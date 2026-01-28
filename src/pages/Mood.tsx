import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/products/ProductCard";
import MoodChip from "@/components/products/MoodChip";
import { Button } from "@/components/ui/button";
import { moods, getProductsByMood } from "@/data/products";

const Mood = () => {
  const { moodId } = useParams();
  const navigate = useNavigate();

  // Scroll to top when mood changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [moodId]);

  const mood = moods.find((m) => m.id === moodId);
  const moodProducts = moodId ? getProductsByMood(moodId) : [];

  if (!mood) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-serif text-foreground mb-4">Mood not found</h1>
          <Button onClick={() => navigate("/shop")}>Back to Shop</Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Header */}
      <section className="gradient-hero py-20">
        <div className="container text-center">
          <span className="text-4xl mb-4 block">{mood.emoji}</span>
          <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
            {mood.name} Gifts
          </h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            Curated gifts for when you're feeling {mood.name.toLowerCase()}
          </p>
        </div>
      </section>

      {/* Other Moods */}
      <section className="py-8 bg-muted/30">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-3">
            {moods.map((m) => (
              <MoodChip key={m.id} {...m} isActive={m.id === moodId} />
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container">
          {moodProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {moodProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No products in this mood yet</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Mood;
