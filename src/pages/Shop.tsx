import Layout from "@/components/layout/Layout";
import CategoryCard from "@/components/products/CategoryCard";
import { categories } from "@/data/products";

const Shop = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="gradient-hero py-10 sm:py-16">
        <div className="container px-4 sm:px-6 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-foreground mb-2 sm:mb-3">
            Shop
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto px-4">
            Explore our curated categories and find the perfect gift
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-10 sm:py-16">
        <div className="container px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 md:gap-8">
            {categories.map((category, index) => (
              <div
                key={category.id}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CategoryCard {...category} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Shop;