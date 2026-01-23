import { Link, useNavigate } from "react-router-dom";
import { Search, ArrowRight, Shield, Gift, Star, Sparkles } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/products/ProductCard";
import CategoryCard from "@/components/products/CategoryCard";
import MoodChip from "@/components/products/MoodChip";
import { Button } from "@/components/ui/button";
import { categories, moods, getValentinePicks, products } from "@/data/products";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const valentinePicks = getValentinePicks().slice(0, 4);
  const recentlyLoved = products.slice(0, 4);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero relative overflow-hidden">
        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 bg-background" style={{
          clipPath: "ellipse(75% 100% at 50% 100%)"
        }} />

        <div className="container px-4 sm:px-6 py-12 sm:py-20 md:py-32 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center space-y-5 sm:space-y-8"
          >
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground leading-tight px-2">
              Discover gifts that speak the language of love
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-lg mx-auto px-4">
              Curated treasures for couples who believe in thoughtful gestures and meaningful moments.
            </p>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative max-w-xl mx-auto px-2">
              <Search className="absolute left-5 sm:left-7 top-1/2 -translate-y-1/2 h-4 sm:h-5 w-4 sm:w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for the perfect gift..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-12 sm:h-14 pl-11 sm:pl-14 pr-24 sm:pr-32 rounded-2xl bg-card border border-border/50 text-sm sm:text-base placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all shadow-card"
              />
              <Button
                type="submit"
                variant="romantic"
                size="sm"
                className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 h-10 sm:h-auto px-3 sm:px-4"
              >
                Search
              </Button>
            </form>

            {/* Quiz CTA */}
            <Link to="/quiz">
              <Button variant="glass" size="default" className="gap-2 mt-2 sm:mt-4 text-sm sm:text-base">
                <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" />
                Take the Gift Quiz
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Shop by Mood */}
      <section className="py-10 sm:py-16">
        <div className="container px-4 sm:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-6 sm:mb-10"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-medium text-foreground mb-2 sm:mb-3">
              Shop by Mood
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              How are you feeling today?
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {moods.map((mood) => (
              <MoodChip key={mood.id} {...mood} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-10 sm:py-16 bg-muted/30">
        <div className="container px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0 mb-6 sm:mb-10">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-medium text-foreground mb-1 sm:mb-2">
                Browse Categories
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                Find the perfect gift for every occasion
              </p>
            </div>
            <Link to="/shop">
              <Button variant="ghost" size="sm" className="gap-2 -ml-2 sm:ml-0">
                View All <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-4 md:gap-6">
            {categories.map((category, index) => (
              <motion.div 
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <CategoryCard {...category} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Valentine's Picks */}
      <section className="py-10 sm:py-16">
        <div className="container px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0 mb-6 sm:mb-10">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-medium text-foreground mb-1 sm:mb-2">
                Valentine's Picks
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                Our most romantic selections
              </p>
            </div>
            <Link to="/valentine-picks">
              <Button variant="soft" size="sm" className="gap-2 -ml-2 sm:ml-0">
                See All Picks <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {valentinePicks.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Recently Loved */}
      <section className="py-10 sm:py-16 bg-gradient-wave">
        <div className="container px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-6 sm:mb-10"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-medium text-foreground mb-1 sm:mb-2">
              Recently Loved
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Popular with other couples this week
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {recentlyLoved.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 sm:py-20">
        <div className="container px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-center space-y-3 sm:space-y-4"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-rose-mist">
                <Gift className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <h3 className="font-serif text-base sm:text-lg font-medium text-foreground">
                Thoughtfully Curated
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Every item is hand-picked by couples, for couples.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-center space-y-3 sm:space-y-4"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-soft-lilac">
                <Star className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <h3 className="font-serif text-base sm:text-lg font-medium text-foreground">
                Highly Rated
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                We only feature products with stellar reviews.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-center space-y-3 sm:space-y-4"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-cream">
                <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <h3 className="font-serif text-base sm:text-lg font-medium text-foreground">
                Secure Shopping
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                All purchases go through trusted partner sites.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;