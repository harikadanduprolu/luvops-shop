import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="gradient-hero py-12 sm:py-20">
        <div className="container px-4 sm:px-6 text-center max-w-3xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4 sm:mb-6">
            About LuvOps Shop
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-2">
            We believe that every gesture of love deserves to be expressed through something beautiful and meaningful.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-12 sm:py-20">
        <div className="container px-4 sm:px-6 max-w-3xl mx-auto">
          <div className="space-y-8 sm:space-y-10 text-center">
            <div className="animate-fade-up">
              <h2 className="text-xl sm:text-2xl font-serif font-medium text-foreground mb-3 sm:mb-4">
                Our Story
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                LuvOps Shop was born from a simple idea: finding the perfect gift for your partner shouldn't feel like a chore. It should feel like an act of love itself. We curate only the most thoughtful, romantic, and meaningful products from around the web.
              </p>
            </div>

            <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <h2 className="text-xl sm:text-2xl font-serif font-medium text-foreground mb-3 sm:mb-4">
                What We Do
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                We're an affiliate marketplace, meaning we don't sell products directly. Instead, we carefully select items from trusted retailers and brands that meet our quality standards. When you find something you love, we'll guide you to the best place to purchase it.
              </p>
            </div>

            <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-xl sm:text-2xl font-serif font-medium text-foreground mb-3 sm:mb-4">
                Our Promise
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Every product featured on LuvOps Shop has been hand-picked for its quality, uniqueness, and ability to create lasting memories. We only recommend items we'd be proud to give to our own partners.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mt-12 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center space-y-2 sm:space-y-3 animate-fade-up">
              <div className="text-2xl sm:text-3xl">✨</div>
              <h3 className="font-serif font-medium text-foreground text-sm sm:text-base">Quality First</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                We partner only with trusted retailers and high-rated products.
              </p>
            </div>

            <div className="text-center space-y-2 sm:space-y-3 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <div className="text-2xl sm:text-3xl">💕</div>
              <h3 className="font-serif font-medium text-foreground text-sm sm:text-base">Made for Couples</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Every selection is chosen with relationships in mind.
              </p>
            </div>

            <div className="text-center space-y-2 sm:space-y-3 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="text-2xl sm:text-3xl">🌟</div>
              <h3 className="font-serif font-medium text-foreground text-sm sm:text-base">Honest Reviews</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                We feature real ratings from thousands of happy customers.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 sm:mt-20 text-center animate-fade-up">
            <Link to="/shop">
              <Button variant="romantic" size="default" className="gap-2 text-sm sm:text-base">
                Start Shopping <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;