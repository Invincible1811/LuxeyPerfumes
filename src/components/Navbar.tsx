"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ShoppingBag, Menu, X, Search, Heart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import SearchModal from "@/components/SearchModal";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();
  const { items: wishlistItems } = useWishlist();

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
    <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-violet-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-[0.3em] uppercase gradient-text">
              Luxey
            </span>
            <span className="text-xs tracking-[0.2em] text-violet-400 uppercase hidden sm:block">
              Perfumes
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <Link
              href="/"
              className="text-sm tracking-wider text-gray-600 hover:text-violet-600 transition-colors uppercase"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="text-sm tracking-wider text-gray-600 hover:text-violet-600 transition-colors uppercase"
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="text-sm tracking-wider text-gray-600 hover:text-violet-600 transition-colors uppercase"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm tracking-wider text-gray-600 hover:text-violet-600 transition-colors uppercase"
            >
              Contact
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-gray-500 hover:text-violet-600 transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <Link
              href="/wishlist"
              className="relative p-2 text-gray-500 hover:text-rose-500 transition-colors hidden sm:block"
              aria-label="Wishlist"
            >
              <Heart size={20} />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs rounded-full flex items-center justify-center">
                  {wishlistItems.length}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-gray-500 hover:text-violet-600 transition-colors"
              aria-label="Cart"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-violet-600 to-pink-500 text-white text-xs rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              className="md:hidden p-2 text-gray-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-violet-100 animate-in slide-in-from-top">
          <div className="px-6 py-8 space-y-6">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-sm tracking-wider text-gray-600 hover:text-violet-600 uppercase"
            >
              Home
            </Link>
            <Link
              href="/shop"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-sm tracking-wider text-gray-600 hover:text-violet-600 uppercase"
            >
              Shop
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-sm tracking-wider text-gray-600 hover:text-violet-600 uppercase"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-sm tracking-wider text-gray-600 hover:text-violet-600 uppercase"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
    </>
  );
}
