import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductImageGalleryProps {
  mainImage?: string;
  images?: string[];
  productName: string;
}

const ProductImageGallery = ({ mainImage, images, productName }: ProductImageGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  
  // Use images array if provided, otherwise create array from mainImage
  const galleryImages = (images && images.length > 0) 
    ? images 
    : mainImage 
      ? [mainImage, mainImage, mainImage, mainImage]
      : [];
  
  const selectedImage = galleryImages[selectedIndex] || mainImage || "";

  const handlePrevious = () => {
    setSelectedIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setSelectedIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };
  const handlePrev = () => {
    setDirection(-1);
    setSelectedIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  // Swipe gestures for mobile
  const startX = useRef<number | null>(null);
  const startY = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    startY.current = e.touches[0].clientY;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (startX.current === null || startY.current === null) return;
    const dx = e.changedTouches[0].clientX - startX.current;
    const dy = e.changedTouches[0].clientY - startY.current;
    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);
    // Only treat as swipe if mostly horizontal and beyond threshold
    if (absDx > 30 && absDx > absDy) {
      if (dx < 0) handleNext(); else handlePrev();
    }
    startX.current = null;
    startY.current = null;
  };

  // Note: No auto-cycling on the product page per request.

  return (
    <div className="space-y-3 sm:space-y-4">
      {/* Main Image with fade animation */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="relative group"
      >
        <div
          className="aspect-square rounded-2xl sm:rounded-3xl overflow-hidden bg-muted shadow-card"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.img
              key={selectedIndex}
              src={selectedImage}
              alt={`${productName} - Image ${selectedIndex + 1}`}
              className="w-full h-full object-cover"
              custom={direction}
              variants={{
                enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
                center: { x: 0, opacity: 1 },
                exit: (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0 })
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>

        {/* Navigation arrows - only show if more than one image */}
        {galleryImages.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 sm:h-10 sm:w-10 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity rounded-full shadow-md"
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 sm:h-10 sm:w-10 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity rounded-full shadow-md"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              aria-label="Next image"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>

            {/* Image counter */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-background/70 backdrop-blur-sm px-2 py-1 rounded-full">
              {galleryImages.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setDirection(i > selectedIndex ? 1 : -1); setSelectedIndex(i); }}
                  aria-label={`Go to image ${i+1}`}
                  className={`h-1.5 w-1.5 rounded-full transition-all ${i === selectedIndex ? 'bg-primary w-3' : 'bg-muted-foreground/50'}`}
                />
              ))}
            </div>
          </>
        )}
      </motion.div>

      {/* Thumbnail Gallery - only show if more than one image */}
      {galleryImages.length > 1 && (
        <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-1 scrollbar-hide">
          {galleryImages.map((image, index) => (
            <motion.button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`relative shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-200 ${
                selectedIndex === index
                  ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                  : "opacity-60 hover:opacity-100"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`View image ${index + 1}`}
              aria-current={selectedIndex === index}
            >
              <img
                src={image}
                alt={`${productName} thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductImageGallery;