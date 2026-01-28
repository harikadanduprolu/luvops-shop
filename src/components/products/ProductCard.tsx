import { Link } from "react-router-dom";
import { Star, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { slugify } from "@/lib/utils";
import { Product } from "@/data/products";
import { useWishlist } from "@/contexts/WishlistContext";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);
  const galleryImages = (product.images && product.images.length > 0)
    ? product.images
    : product.image
      ? [product.image]
      : [];
  const [hovered, setHovered] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<number | null>(null);
  const isMobile = useIsMobile();
  const cardRef = useRef<HTMLAnchorElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const shouldAnimate = ((isMobile && inView) || hovered) && galleryImages.length > 1;
    if (shouldAnimate) {
      // Advance immediately for instant feedback
      setDirection(1);
      setImgIndex((prev) => (prev + 1) % galleryImages.length);
      timerRef.current = window.setInterval(() => {
        setDirection(1);
        setImgIndex((prev) => (prev + 1) % galleryImages.length);
      }, 2800);
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [hovered, inView, isMobile, galleryImages.length]);

  // Intersection observer for mobile auto-loop when card is centered/visible
  useEffect(() => {
    if (!cardRef.current) return;
    const el = cardRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setInView(entry.isIntersecting && entry.intersectionRatio > 0.6);
      },
      { threshold: [0, 0.25, 0.5, 0.6, 0.75, 1] }
    );
    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product.id);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link
        to={`/product/${slugify(product.name)}-${product.id}`}
        className="group block"
        ref={cardRef}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => { setHovered(false); setImgIndex(0); }}
      >
        <article className="bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-500 hover:-translate-y-1 relative">
          {/* Wishlist Button */}
          <button
            onClick={handleWishlistClick}
            className={`absolute top-4 right-4 z-10 p-2.5 rounded-full backdrop-blur-sm shadow-soft hover:scale-110 transition-all duration-300 ${
              inWishlist
                ? "bg-primary/20 border border-primary"
                : "bg-card/90 hover:bg-primary/10"
            }`}
            aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart
              className={`h-5 w-5 transition-all duration-300 ${
                inWishlist
                  ? "fill-primary text-primary scale-110"
                  : "text-muted-foreground hover:text-primary"
              }`}
            />
          </button>

          {/* Image with hover fade slideshow */}
          <div className="aspect-square overflow-hidden bg-muted relative">
            <AnimatePresence mode="wait" custom={direction} initial={false}>
              <motion.img
                key={imgIndex}
                src={galleryImages[imgIndex]}
                alt={product.name}
                className="absolute inset-1 w-[calc(100%-0.5rem)] h-[calc(100%-0.5rem)] object-cover rounded-2xl"
                custom={direction}
                variants={{
                  enter: (d: number) => ({ x: d > 0 ? 50 : -50, opacity: 0 }),
                  center: { x: 0, opacity: 1 },
                  exit: (d: number) => ({ x: d > 0 ? -50 : 50, opacity: 0 })
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: "easeInOut" }}
                whileHover={{ scale: 1.02 }}
              />
            </AnimatePresence>
            {/* Ensure container height */}
            <img src={galleryImages[0]} alt="" className="invisible w-full h-full object-cover" />
            {galleryImages.length > 1 && (
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-background/70 backdrop-blur-sm px-2 py-1 rounded-full">
                {galleryImages.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 w-1.5 rounded-full transition-all ${i === imgIndex ? 'bg-primary w-3' : 'bg-muted-foreground/50'}`}
                    aria-label={`Image ${i+1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-5 space-y-3">
            <h3 className="font-serif text-lg font-medium text-foreground line-clamp-1 group-hover:text-primary transition-colors">
              {product.name}
            </h3>

            <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
              {product.description}
            </p>

            <div className="flex items-center justify-between pt-2">
              <span className="text-lg font-semibold text-foreground">
                ₹{product.price.toFixed(2)}
              </span>

              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span>{product.rating}</span>
                {product.likes && (
                  <>
                    <span className="text-muted-foreground/50">·</span>
                    <Heart className="h-3.5 w-3.5 fill-primary text-primary" />
                    <span>{product.likes.toLocaleString()}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
