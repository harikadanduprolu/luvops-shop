import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, ZoomOut, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";

interface ProductImageGalleryProps {
  mainImage: string;
  productName: string;
}

// Generate gallery images from main image (simulating multiple angles)
const generateGalleryImages = (mainImage: string, productName: string) => {
  return [
    { id: 1, src: mainImage, alt: `${productName} - Main view` },
    { id: 2, src: mainImage, alt: `${productName} - Angle 2` },
    { id: 3, src: mainImage, alt: `${productName} - Detail view` },
    { id: 4, src: mainImage, alt: `${productName} - Lifestyle` },
  ];
};

const ProductImageGallery = ({ mainImage, productName }: ProductImageGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  // Touch gesture refs
  const lastTouchDistance = useRef<number | null>(null);
  const lastTouchCenter = useRef<{ x: number; y: number } | null>(null);
  const isDragging = useRef(false);
  const lastDragPosition = useRef<{ x: number; y: number } | null>(null);
  const images = generateGalleryImages(mainImage, productName);
  const selectedImage = images[selectedIndex];

  const handlePrevious = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.5, 1));
    if (zoomLevel <= 1.5) {
      setPosition({ x: 0, y: 0 });
    }
  };

  const openZoom = () => {
    setIsZoomed(true);
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  };

  const closeZoom = () => {
    setIsZoomed(false);
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  };

  // Calculate distance between two touch points
  const getTouchDistance = (touches: React.TouchList) => {
    if (touches.length < 2) return 0;
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  // Calculate center point between two touches
  const getTouchCenter = (touches: React.TouchList) => {
    if (touches.length < 2) {
      return { x: touches[0].clientX, y: touches[0].clientY };
    }
    return {
      x: (touches[0].clientX + touches[1].clientX) / 2,
      y: (touches[0].clientY + touches[1].clientY) / 2,
    };
  };

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      // Pinch gesture start
      lastTouchDistance.current = getTouchDistance(e.touches);
      lastTouchCenter.current = getTouchCenter(e.touches);
    } else if (e.touches.length === 1 && zoomLevel > 1) {
      // Pan gesture start
      isDragging.current = true;
      lastDragPosition.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
    }
  }, [zoomLevel]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 2 && lastTouchDistance.current !== null) {
      // Pinch gesture
      e.preventDefault();
      const currentDistance = getTouchDistance(e.touches);
      const scale = currentDistance / lastTouchDistance.current;
      
      setZoomLevel((prev) => {
        const newZoom = Math.min(Math.max(prev * scale, 1), 3);
        if (newZoom <= 1) {
          setPosition({ x: 0, y: 0 });
        }
        return newZoom;
      });
      
      lastTouchDistance.current = currentDistance;
    } else if (e.touches.length === 1 && isDragging.current && lastDragPosition.current && zoomLevel > 1) {
      // Pan gesture
      e.preventDefault();
      const deltaX = e.touches[0].clientX - lastDragPosition.current.x;
      const deltaY = e.touches[0].clientY - lastDragPosition.current.y;
      
      setPosition((prev) => ({
        x: prev.x + deltaX,
        y: prev.y + deltaY,
      }));
      
      lastDragPosition.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
    }
  }, [zoomLevel]);

  const handleTouchEnd = useCallback(() => {
    lastTouchDistance.current = null;
    lastTouchCenter.current = null;
    isDragging.current = false;
    lastDragPosition.current = null;
  }, []);

  // Double tap to zoom
  const lastTapTime = useRef(0);
  const handleDoubleTap = useCallback((e: React.TouchEvent) => {
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTapTime.current;
    
    if (tapLength < 300 && tapLength > 0) {
      e.preventDefault();
      if (zoomLevel > 1) {
        setZoomLevel(1);
        setPosition({ x: 0, y: 0 });
      } else {
        setZoomLevel(2);
      }
    }
    lastTapTime.current = currentTime;
  }, [zoomLevel]);


  return (
    <div className="space-y-3 sm:space-y-4">
      {/* Main Image */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="relative group"
      >
        <div 
          className="aspect-square rounded-2xl sm:rounded-3xl overflow-hidden bg-muted shadow-card cursor-zoom-in"
          onClick={openZoom}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={selectedIndex}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          </AnimatePresence>
        </div>
        
        {/* Zoom hint overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="bg-background/80 backdrop-blur-sm rounded-full p-3 shadow-lg">
            <ZoomIn className="h-5 w-5 text-foreground" />
          </div>
        </div>

        {/* Navigation arrows on main image */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 sm:h-10 sm:w-10 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity rounded-full shadow-md"
          onClick={(e) => {
            e.stopPropagation();
            handlePrevious();
          }}
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
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </Button>
      </motion.div>

      {/* Thumbnail Gallery */}
      <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-1 scrollbar-hide">
        {images.map((image, index) => (
          <motion.button
            key={image.id}
            onClick={() => setSelectedIndex(index)}
            className={`relative shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-200 ${
              selectedIndex === index
                ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                : "opacity-60 hover:opacity-100"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </motion.button>
        ))}
      </div>

      {/* Zoom Modal */}
      <Dialog open={isZoomed} onOpenChange={setIsZoomed}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] w-full h-full p-0 bg-background/95 backdrop-blur-md border-none">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Controls */}
            <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleZoomOut}
                disabled={zoomLevel <= 1}
                className="h-10 w-10 bg-background/80 backdrop-blur-sm rounded-full shadow-md"
              >
                <ZoomOut className="h-5 w-5" />
              </Button>
              <span className="px-3 py-1.5 bg-background/80 backdrop-blur-sm rounded-full text-sm font-medium">
                {Math.round(zoomLevel * 100)}%
              </span>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleZoomIn}
                disabled={zoomLevel >= 3}
                className="h-10 w-10 bg-background/80 backdrop-blur-sm rounded-full shadow-md"
              >
                <ZoomIn className="h-5 w-5" />
              </Button>
              <DialogClose asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeZoom}
                  className="h-10 w-10 bg-background/80 backdrop-blur-sm rounded-full shadow-md ml-2"
                >
                  <X className="h-5 w-5" />
                </Button>
              </DialogClose>
            </div>

            {/* Navigation arrows */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 bg-background/80 backdrop-blur-sm rounded-full shadow-md z-10"
              onClick={handlePrevious}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 bg-background/80 backdrop-blur-sm rounded-full shadow-md z-10"
              onClick={handleNext}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

     {/* Zoomed Image with touch gestures */}
            <div 
              className="overflow-hidden max-w-full max-h-full p-4 sm:p-8 touch-none"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onTouchCancel={handleTouchEnd}
            >
              <motion.img
                key={`zoom-${selectedIndex}`}
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-none select-none"
                style={{ 
                  transform: `scale(${zoomLevel})translate(${position.x / zoomLevel}px, ${position.y / zoomLevel}px)`,
                  transformOrigin: 'center center'
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                draggable={false}
                onTouchEnd={handleDoubleTap}
              />
                          {images.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setSelectedIndex(index)}
                  className={`w-12 h-12 rounded-lg overflow-hidden transition-all ${
                    selectedIndex === index
                      ? "ring-2 ring-primary"
                      : "opacity-50 hover:opacity-100"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductImageGallery;