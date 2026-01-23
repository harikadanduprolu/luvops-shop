import { useSearchParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Search as SearchIcon } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/products/ProductCard";
import MoodChip from "@/components/products/MoodChip";
import { searchProducts, moods } from "@/data/products";

const priceFilters = [
  { id: "all", label: "All Prices" },
  { id: "under-50", label: "Under $50" },
  { id: "50-100", label: "$50 - $100" },
  { id: "over-100", label: "Over $100" },
];

const Search = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get("q") || "";
  const [searchQuery, setSearchQuery] = useState(query);
  const [priceFilter, setPriceFilter] = useState("all");

  let results = searchProducts(query);

  // Apply price filter
  if (priceFilter !== "all") {
    results = results.filter((p) => {
      switch (priceFilter) {
        case "under-50":
          return p.price < 50;
        case "50-100":
          return p.price >= 50 && p.price <= 100;
        case "over-100":
          return p.price > 100;
        default:
          return true;
      }
    });
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  useEffect(() => {
    setSearchQuery(query);
  }, [query]);

  return (
    <Layout>
      {/* Search Header */}
      <section className="gradient-hero py-12">
        <div className="container">
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="relative">
              <SearchIcon className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for gifts, moods, or occasions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-14 pl-14 pr-6 rounded-2xl bg-card border border-border/50 text-base placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all shadow-card"
              />
            </div>
          </form>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-40 bg-background/95 backdrop-blur-xl border-b border-border/50 py-4">
        <div className="container">
          <div className="flex flex-wrap items-center gap-3">
            {priceFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setPriceFilter(filter.id)}
                className={`px-4 py-2 rounded-xl text-sm transition-all ${
                  priceFilter === filter.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-secondary"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12">
        <div className="container">
          {query ? (
            <>
              <div className="mb-8">
                <h1 className="text-2xl font-serif font-medium text-foreground mb-2">
                  {results.length > 0
                    ? `Results for "${query}"`
                    : `No results for "${query}"`}
                </h1>
                <p className="text-muted-foreground">
                  {results.length} {results.length === 1 ? "item" : "items"} found
                </p>
              </div>

              {results.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {results.map((product, index) => (
                    <div
                      key={product.id}
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 space-y-6">
                  <p className="text-muted-foreground">
                    Try searching for something else or explore by mood
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    {moods.map((mood) => (
                      <MoodChip key={mood.id} {...mood} />
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16 space-y-6">
              <h2 className="text-2xl font-serif font-medium text-foreground">
                What are you looking for?
              </h2>
              <p className="text-muted-foreground">
                Search for gifts or explore by mood
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {moods.map((mood) => (
                  <MoodChip key={mood.id} {...mood} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Search;
