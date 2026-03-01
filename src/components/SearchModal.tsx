"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const results = query.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.brand.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.notes.top.some((n) =>
            n.toLowerCase().includes(query.toLowerCase())
          ) ||
          p.notes.middle.some((n) =>
            n.toLowerCase().includes(query.toLowerCase())
          ) ||
          p.notes.base.some((n) =>
            n.toLowerCase().includes(query.toLowerCase())
          )
      )
    : [];

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setQuery("");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity"
        onClick={onClose}
      />
      <div className="fixed inset-x-0 top-0 z-[70] flex justify-center pt-[15vh] px-4">
        <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-slide-up">
          {/* Search Input */}
          <div className="flex items-center gap-3 px-6 py-5 border-b border-gray-100">
            <Search size={20} className="text-violet-400 flex-shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search fragrances, notes, categories..."
              className="flex-1 text-base text-gray-900 placeholder:text-gray-400 bg-transparent outline-none"
            />
            <kbd className="hidden sm:flex items-center gap-0.5 text-[10px] text-gray-400 bg-gray-100 px-2 py-1 rounded-md">
              ESC
            </kbd>
            <button
              onClick={onClose}
              className="sm:hidden text-gray-400 hover:text-gray-600"
            >
              <X size={18} />
            </button>
          </div>

          {/* Results */}
          <div className="max-h-[50vh] overflow-y-auto">
            {query.trim() === "" ? (
              <div className="px-6 py-10 text-center">
                <Search size={40} className="text-gray-200 mx-auto mb-3" />
                <p className="text-sm text-gray-400">
                  Start typing to search our collection
                </p>
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  {["Rose", "Oud", "Citrus", "Vanilla", "Leather"].map(
                    (tag) => (
                      <button
                        key={tag}
                        onClick={() => setQuery(tag)}
                        className="text-xs px-3 py-1.5 bg-violet-50 text-violet-600 rounded-full hover:bg-violet-100 transition-colors"
                      >
                        {tag}
                      </button>
                    )
                  )}
                </div>
              </div>
            ) : results.length > 0 ? (
              <div className="p-3">
                <p className="text-[10px] text-gray-400 uppercase tracking-wider px-3 py-2">
                  {results.length} result{results.length !== 1 ? "s" : ""}
                </p>
                {results.map((product) => (
                  <Link
                    key={product.id}
                    href={`/shop/${product.id}`}
                    onClick={onClose}
                    className="flex items-center gap-4 px-3 py-3 rounded-2xl hover:bg-violet-50 transition-colors group"
                  >
                    <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-violet-50 flex-shrink-0">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {product.name}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {product.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span className="text-sm font-semibold text-violet-600">
                        GH₵{product.price}
                      </span>
                      <ArrowRight
                        size={14}
                        className="text-gray-300 group-hover:text-violet-500 group-hover:translate-x-0.5 transition-all"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="px-6 py-10 text-center">
                <p className="text-sm text-gray-500">
                  No results for &ldquo;{query}&rdquo;
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Try searching for a fragrance name, note, or category
                </p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-6 py-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
            <Link
              href="/shop"
              onClick={onClose}
              className="text-xs text-violet-600 hover:text-violet-800 flex items-center gap-1"
            >
              Browse all fragrances
              <ArrowRight size={12} />
            </Link>
            <p className="text-[10px] text-gray-400">
              <kbd className="bg-gray-200 px-1.5 py-0.5 rounded text-[10px]">
                ⌘K
              </kbd>{" "}
              to toggle search
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
