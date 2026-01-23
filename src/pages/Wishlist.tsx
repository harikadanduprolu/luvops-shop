import { Link } from "react-router-dom";
import { Heart, ArrowRight, Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { useWishlist } from "@/contexts/WishlistContext";
import { products } from "@/data/products";

const Wishlist = () => {
  const { wishlist, clearWishlist } = useWishlist();

  const wishlistProducts = products.filter((p) => wishlist.includes(p.id));

  return (
    <Layout>
      {/* Header */}
      <section className="gradient-hero py-10 sm:py-16">
        <div className="container px-4 sm:px-6 text-center">
          <Heart className="h-8 w-8 sm:h-10 sm:w-10 text-primary mx-auto mb-3 sm:mb-4" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-foreground mb-2 sm:mb-3">
            Your Wishlist
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto px-2">
            {wishlistProducts.length > 0
              ? `${wishlistProducts.length} ${wishlistProducts.length === 1 ? "gift" : "gifts"} saved for later`
              : "Save gifts you love and come back anytime"}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 sm:py-16">
        <div className="container px-4 sm:px-6">
          {wishlistProducts.length > 0 ? (
            <>
              {/* Clear All Button */}
              <div className="flex justify-end mb-6 sm:mb-8">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearWishlist}
                  className="text-muted-foreground hover:text-destructive gap-2 text-sm"
                >
                  <Trash2 className="h-4 w-4" />
                  Clear All
                </Button>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                {wishlistProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12 sm:py-20"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-muted mb-4 sm:mb-6">
                <Heart className="h-8 w-8 sm:h-10 sm:w-10 text-muted-foreground" />
              </div>
              <h2 className="text-lg sm:text-xl font-serif font-medium text-foreground mb-2 sm:mb-3">
                Your wishlist is empty
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 max-w-md mx-auto px-4">
                Start exploring and tap the heart icon on gifts you love. They'll be waiting for you here.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <Link to="/shop">
                  <Button variant="romantic" className="gap-2 w-full sm:w-auto">
                    Browse Gifts <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/quiz">
                  <Button variant="outline" className="gap-2 w-full sm:w-auto">
                    Take Gift Quiz
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Wishlist;