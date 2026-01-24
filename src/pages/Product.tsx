import { useParams, useNavigate, Link, useLocation } from "react-router-dom";
import { Star, ExternalLink, ArrowLeft, Heart } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/products/ProductCard";
import GiftWrappingTips from "@/components/products/GiftWrappingTips";
import ProductReviews from "@/components/products/ProductsReviews";
import ShareButtons from "@/components/products/ShareButtons";
import ProductImageGallery from "@/components/products/ProductImageGallery";
import { Button } from "@/components/ui/button";
import { products, categories } from "@/data/products";
import { useWishlist } from "@/contexts/WishlistContext";

const Product = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  
  const productUrl = typeof window !== "undefined" 
    ? `${window.location.origin}${location.pathname}` 
    : "";

  const product = products.find((p) => p.id === productId);
  const category = product ? categories.find((c) => c.id === product.category) : null;
  const relatedProducts = product
    ? products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)
    : [];

  const inWishlist = product ? isInWishlist(product.id) : false;

  const handleWishlistClick = () => {
    if (!product) return;
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product.id);
    }
  };

  if (!product) {
    return (
      <Layout>
        <div className="container px-4 sm:px-6 py-20 text-center">
          <h1 className="text-xl sm:text-2xl font-serif text-foreground mb-4">Product not found</h1>
          <Button onClick={() => navigate("/shop")}>Back to Shop</Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="container px-4 sm:px-6 py-6 sm:py-8"
      >
        {/* Breadcrumb - Desktop only */}
        <nav className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground mb-8 overflow-x-auto">
          <Link to="/" className="hover:text-primary transition-colors shrink-0">
            Home
          </Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-primary transition-colors shrink-0">
            Shop
          </Link>
          <span>/</span>
          {category && (
            <>
              <Link to={`/category/${category.id}`} className="hover:text-primary transition-colors shrink-0">
                {category.name}
              </Link>
              <span>/</span>
            </>
          )}
          <span className="text-foreground truncate">{product.name}</span>
        </nav>

        {/* Back Button (Mobile) */}
        <Button
          variant="ghost"
          size="sm"
          className="mb-4 sm:hidden -ml-2"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>

        {/* Product Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
          <ProductImageGallery mainImage={product.image} productName={product.name} />

          {/* Details */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4 sm:space-y-6"
          >
            {/* Category Badge */}
            {category && (
              <Link
                to={`/category/${category.id}`}
                className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-xl bg-muted text-xs sm:text-sm text-muted-foreground hover:bg-secondary transition-colors"
              >
                {category.name}
              </Link>
            )}

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-foreground leading-tight">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              <div className="flex items-center gap-0.5 sm:gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 sm:h-5 sm:w-5 ${
                      i < Math.floor(product.rating)
                        ? "fill-primary text-primary"
                        : "text-muted"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs sm:text-sm text-muted-foreground">
                {product.rating} · {product.reviews.toLocaleString()} reviews
              </span>
            </div>

            {/* Price */}
            <p className="text-2xl sm:text-3xl font-semibold text-foreground">
              ${product.price.toFixed(2)}
            </p>

            {/* Description */}
            <p className="text-sm sm:text-lg text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-xl bg-muted text-xs sm:text-sm text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-2 sm:pt-4 space-y-3 sm:space-y-4">
              <div className="flex gap-2 sm:gap-3">
                <a
                  href={product.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button variant="romantic" size="lg" className="w-full gap-2 sm:gap-3 text-sm sm:text-base h-12 sm:h-14">
                    Shop This Gift
                    <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </a>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleWishlistClick}
                  className="px-4 sm:px-6 h-12 sm:h-14"
                >
                  <Heart
                    className={`h-5 w-5 sm:h-6 sm:w-6 transition-colors ${
                      inWishlist ? "fill-primary text-primary" : ""
                    }`}
                  />
                </Button>
              </div>
              <p className="text-[10px] sm:text-xs text-muted-foreground text-center">
                You'll be redirected to our trusted partner site
              </p>
            </div>

            {/* Social Sharing */}
            <div className="pt-1 sm:pt-2">
              <ShareButtons productName={product.name} productUrl={productUrl} />
            </div>

            {/* Trust Note */}
            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-muted/50 border border-border/50">
              <p className="text-xs sm:text-sm text-muted-foreground">
                💕 <strong className="text-foreground">Why we love it:</strong> This gift has been
                hand-picked by our team for its quality, thoughtfulness, and the joy it brings to couples.
              </p>
            </div>

            {/* Gift Wrapping Tips */}
            <GiftWrappingTips />
          </motion.div>
        </div>

<ProductReviews productRating={product.rating} reviewCount={product.reviews} />
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-12 sm:mt-20 max-w-6xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-serif font-medium text-foreground mb-6 sm:mb-8 ">
              You might also love
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {relatedProducts.map((p, index) => (
                <ProductCard key={p.id} product={p} index={index} />
              ))}
            </div>
          </section>
        )}
      </motion.div>
    </Layout>
  );
};

export default Product;