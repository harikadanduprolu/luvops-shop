import { useState } from "react";
import { Heart, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success("Welcome to our love letters! 💕", {
      description: "You'll receive curated gift ideas and romantic inspiration.",
    });
    
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-mauve/10 to-lavender/10 p-8 md:p-10">
      {/* Decorative elements */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-mauve/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
          <Heart className="h-4 w-4 fill-primary" />
          Love Letters
        </div>
        
        <h3 className="text-2xl md:text-3xl font-serif font-semibold text-foreground">
          Get Romantic Gift Ideas
        </h3>
        
        <p className="text-muted-foreground max-w-md mx-auto">
          Join couples who receive our curated gift inspiration, seasonal picks, and exclusive romantic surprises.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2">
          <input
            type="email"
            placeholder="Enter your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 h-12 px-5 rounded-2xl bg-card border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
          />
          <Button 
            type="submit" 
            variant="romantic" 
            size="lg"
            disabled={isSubmitting}
            className="gap-2 h-12"
          >
            {isSubmitting ? (
              "Subscribing..."
            ) : (
              <>
                Subscribe
                <Send className="h-4 w-4" />
              </>
            )}
          </Button>
        </form>
        
        <p className="text-xs text-muted-foreground">
          No spam, just love. Unsubscribe anytime. 💕
        </p>
      </div>
    </div>
  );
};

export default NewsletterForm;
