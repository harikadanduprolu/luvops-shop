import { Facebook, Twitter, Link2, MessageCircle, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";

interface ShareButtonsProps {
  productName: string;
  productUrl: string;
}

const ShareButtons = ({ productName, productUrl }: ShareButtonsProps) => {
  const { toast } = useToast();
  const [canNativeShare, setCanNativeShare] = useState(false);
  
  useEffect(() => {
    setCanNativeShare(typeof navigator !== "undefined" && !!navigator.share);
  }, []);
  
  const shareText = `Check out this perfect gift idea: ${productName} 💝`;
  const encodedText = encodeURIComponent(shareText);
  const encodedUrl = encodeURIComponent(productUrl);

  const shareLinks = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
      color: "hover:text-green-600",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedText}`,
      color: "hover:text-blue-600",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
      color: "hover:text-sky-500",
    },
  ];

  const handleNativeShare = async () => {
    try {
      await navigator.share({
        title: productName,
        text: shareText,
        url: productUrl,
      });
      toast({
        title: "Shared successfully! 💕",
        description: "Thanks for spreading the love",
      });
    } catch (error) {
      // User cancelled or share failed - only show error if it wasn't a cancel
      if (error instanceof Error && error.name !== "AbortError") {
        toast({
          title: "Couldn't share",
          description: "Please try using the share buttons instead",
          variant: "destructive",
        });
      }
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(productUrl);
      toast({
        title: "Link copied! 💕",
        description: "Share this gift idea with your partner",
      });
    } catch {
      toast({
        title: "Couldn't copy link",
        description: "Please copy the URL manually",
        variant: "destructive",
      });
    }
  };

  // Native share button for mobile devices
  if (canNativeShare) {
    return (
      <div className="flex items-center gap-3">
        <Button
          variant="soft"
          size="sm"
          onClick={handleNativeShare}
          className="gap-2"
        >
          <Share2 className="h-4 w-4" />
          Share Gift Idea
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 rounded-xl hover:text-primary transition-colors"
          onClick={copyToClipboard}
          aria-label="Copy link"
        >
          <Link2 className="h-4 w-4" />
        </Button>
      </div>
    );
  }

  // Fallback buttons for desktop
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground mr-1">Share:</span>
      {shareLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Share on ${link.name}`}
        >
          <Button
            variant="ghost"
            size="icon"
            className={`h-9 w-9 rounded-xl ${link.color} transition-colors`}
          >
            <link.icon className="h-4 w-4" />
          </Button>
        </a>
      ))}
      <Button
        variant="ghost"
        size="icon"
        className="h-9 w-9 rounded-xl hover:text-primary transition-colors"
        onClick={copyToClipboard}
        aria-label="Copy link"
      >
        <Link2 className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ShareButtons;
