import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { categories, getProductsByCategory, products } from "@/data/products";

const priceFilters = [
  { id: "all", label: "All Prices" },
  { id: "under-50", label: "Under $50" },
  { id: "50-100", label: "$50 - $100" },
  { id: "over-100", label: "Over $100" },
];

const sortOptions = [
  { id: "popular", label: "Most Popular" },
  { id: "price-low", label: "Price: Low to High" },
  { id: "price-high", label: "Price: High to Low" },
  { id: "rating", label: "Highest Rated" },
];

const Category = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  const [showFilters, setShowFilters] = useState(false);

  const category = categories.find((c) => c.id === categoryId);
  let categoryProducts = categoryId ? getProductsByCategory(categoryId) : products;

  // Apply search filter
  if (searchQuery) {
    categoryProducts = categoryProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Apply price filter
  if (priceFilter !== "all") {
    categoryProducts = categoryProducts.filter((p) => {
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

  // Apply sorting
  categoryProducts = [...categoryProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      default:
        return b.reviews - a.reviews;
    }
  });

  if (!category) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-serif text-foreground mb-4">Category not found</h1>
          <Button onClick={() => navigate("/shop")}>Back to Shop</Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Header */}
      <section className="gradient-hero py-16">
        <div className="container text-center">
          <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-3">
            {category.name}
          </h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            {category.description}
          </p>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="sticky top-16 z-40 bg-background/95 backdrop-blur-xl border-b border-border/50 py-4">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search in this category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-11 pl-11 pr-4 rounded-2xl bg-muted/50 border border-border/50 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
              />
            </div>

            {/* Filter Toggle (Mobile) */}
            <Button
              variant="outline"
              size="sm"
              className="md:hidden w-full"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters & Sort
            </Button>

            {/* Filters (Desktop) */}
            <div className="hidden md:flex items-center gap-3">
              {/* Price Filter */}
              <div className="flex items-center gap-2">
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

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="h-10 px-4 rounded-xl bg-muted border-0 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Mobile Filters Dropdown */}
          {showFilters && (
            <div className="md:hidden mt-4 p-4 bg-muted/50 rounded-2xl space-y-4 animate-fade-in">
              <div>
                <p className="text-sm font-medium text-foreground mb-2">Price</p>
                <div className="flex flex-wrap gap-2">
                  {priceFilters.map((filter) => (
                    <button
                      key={filter.id}
                      onClick={() => setPriceFilter(filter.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs transition-all ${
                        priceFilter === filter.id
                          ? "bg-primary text-primary-foreground"
                          : "bg-background text-muted-foreground"
                      }`}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-foreground mb-2">Sort By</p>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full h-10 px-4 rounded-xl bg-background text-sm text-foreground focus:outline-none"
                >
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container">
          {categoryProducts.length > 0 ? (
            <>
              <p className="text-sm text-muted-foreground mb-8">
                {categoryProducts.length} {categoryProducts.length === 1 ? "item" : "items"}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {categoryProducts.map((product, index) => (
                  <div
                    key={product.id}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No products found</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Category;
