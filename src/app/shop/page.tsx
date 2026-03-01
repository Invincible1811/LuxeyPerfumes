"use client";

import { useState, useMemo } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";

  const [category, setCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (category !== "all") {
      filtered = filtered.filter((p) => p.category === category);
    }

    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return filtered;
  }, [category, sortBy]);

  const categories = [
    { value: "all", label: "All Fragrances" },
    { value: "floral", label: "Floral" },
    { value: "fresh", label: "Fresh" },
    { value: "woody", label: "Woody" },
    { value: "oriental", label: "Oriental" },
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-50 to-pink-50 border-b border-violet-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-xs tracking-[0.3em] text-violet-400 uppercase mb-2">
            Explore
          </p>
          <h1 className="text-4xl font-light text-gray-900 tracking-tight">
            Our <span className="gradient-text">Collection</span>
          </h1>
          <p className="text-gray-500 mt-3 max-w-xl">
            Browse our curated selection of luxury fragrances, each crafted
            with the finest ingredients from around the world.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setCategory(cat.value)}
                className={`text-xs tracking-wider uppercase px-4 py-2 border rounded-full transition-all ${
                  category === cat.value
                    ? "bg-gradient-to-r from-violet-600 to-pink-500 text-white border-transparent shadow-md shadow-violet-500/20"
                    : "bg-white text-gray-600 border-violet-200 hover:border-violet-400 hover:text-violet-700"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-xs text-gray-600 border border-violet-200 px-3 py-2 rounded-lg bg-white focus:outline-none focus:border-violet-400"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="name">Name A–Z</option>
            </select>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="sm:hidden flex items-center gap-1.5 text-xs text-gray-600 border border-violet-200 px-3 py-2 rounded-lg"
            >
              {showFilters ? <X size={14} /> : <SlidersHorizontal size={14} />}
              Filters
            </button>
          </div>
        </div>

        {/* Results Count */}
        <p className="text-xs text-violet-400 mb-8">
          Showing {filteredProducts.length} fragrance
          {filteredProducts.length !== 1 ? "s" : ""}
        </p>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <p className="text-gray-500">
              No fragrances found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="pt-20 min-h-screen flex items-center justify-center">
          <p className="text-violet-400 text-sm">Loading...</p>
        </div>
      }
    >
      <ShopContent />
    </Suspense>
  );
}
