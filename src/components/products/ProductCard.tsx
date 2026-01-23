import { Link } from "react-router-dom";
import { Star, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { Product } from "@/data/products";
import { useWishlist } from "@/contexts/WishlistContext";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);

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
        to={`/product/${product.id}`}
        className="group block"
      >
        <article className="bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-500 hover:-translate-y-1 relative">
          {/* Wishlist Button */}
          <button
            onClick={handleWishlistClick}
            className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-card/90 backdrop-blur-sm shadow-soft hover:scale-110 transition-all duration-300"
            aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart
              className={`h-5 w-5 transition-colors duration-300 ${
                inWishlist
                  ? "fill-primary text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            />
          </button>

          {/* Image */}
          <div className="aspect-square overflow-hidden bg-muted">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
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
                ${product.price.toFixed(2)}
              </span>

              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span>{product.rating}</span>
                <span className="text-muted-foreground/50">
                  ({product.reviews.toLocaleString()})
                </span>
              </div>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
