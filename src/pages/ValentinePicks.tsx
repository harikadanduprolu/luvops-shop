import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/products/ProductCard";
import { getValentinePicks } from "@/data/products";

const ValentinePicks = () => {
  const picks = getValentinePicks();

  return (
    <Layout>
      {/* Header */}
      <section className="gradient-hero py-12 sm:py-20">
        <div className="container px-4 sm:px-6 text-center">
          <span className="text-3xl sm:text-4xl mb-3 sm:mb-4 block">💝</span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-foreground mb-3 sm:mb-4">
            Valentine's Picks
          </h1>
          <p className="text-sm sm:text-lg text-muted-foreground max-w-lg mx-auto px-2">
            Our most romantic selections, hand-picked to make hearts flutter and memories last forever.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-10 sm:py-16">
        <div className="container px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {picks.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-10 sm:py-16 bg-gradient-wave">
        <div className="container px-4 sm:px-6 text-center">
          <p className="text-base sm:text-lg text-muted-foreground font-serif italic px-4">
            "The best gifts come from the heart"
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default ValentinePicks;