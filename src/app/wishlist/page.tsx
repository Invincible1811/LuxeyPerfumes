"use client";

import { Heart, ShoppingBag, Trash2, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/components/Toast";

export default function WishlistPage() {
  const { items, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const handleAddToCart = (product: (typeof items)[0]) => {
    addToCart(product);
    showToast({
      type: "cart",
      message: "Added to your bag",
      productName: product.name,
      image: product.image,
    });
  };

  const handleRemove = (product: (typeof items)[0]) => {
    removeFromWishlist(product.id);
    showToast({
      type: "info",
      message: "Removed from wishlist",
      productName: product.name,
    });
  };

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-violet-50 via-pink-50 to-rose-50 border-b border-violet-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-xs tracking-[0.3em] text-rose-400 uppercase mb-2">
            Your Favorites
          </p>
          <h1 className="text-4xl font-light text-gray-900 tracking-tight">
            <span className="gradient-text-warm">Wishlist</span>
          </h1>
          <p className="text-gray-500 mt-3 max-w-xl">
            {items.length > 0
              ? `You have ${items.length} fragrance${items.length !== 1 ? "s" : ""} saved.`
              : "Your wishlist is waiting to be filled with beautiful fragrances."}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {items.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-gradient-to-r from-rose-100 to-pink-100 rounded-3xl flex items-center justify-center mx-auto mb-6 animate-float">
              <Heart size={32} className="text-rose-400" />
            </div>
            <h2 className="text-xl font-light text-gray-900 mb-2">
              No favorites yet
            </h2>
            <p className="text-sm text-gray-500 mb-8 max-w-sm mx-auto">
              Explore our collection and tap the heart icon on fragrances you
              love to save them here.
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-pink-500 text-white text-sm tracking-wider uppercase px-8 py-3.5 rounded-full hover:from-violet-700 hover:to-pink-600 transition-all shadow-lg shadow-violet-500/25"
            >
              Explore Collection
              <ArrowRight size={14} />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((product) => (
              <div
                key={product.id}
                className="flex gap-5 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-violet-100 transition-all group"
              >
                <Link
                  href={`/shop/${product.id}`}
                  className="relative w-28 h-36 rounded-xl overflow-hidden bg-violet-50 flex-shrink-0"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <p className="text-[10px] tracking-wider text-violet-400 uppercase">
                      {product.brand}
                    </p>
                    <Link href={`/shop/${product.id}`}>
                      <h3 className="text-sm font-medium text-gray-900 hover:text-violet-700 transition-colors truncate">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-xs text-gray-500 mt-1">{product.size}</p>
                    <p className="text-base font-semibold text-violet-700 mt-2">
                      GH₵{product.price}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="flex-1 flex items-center justify-center gap-1.5 bg-gradient-to-r from-violet-600 to-pink-500 text-white text-xs tracking-wider uppercase py-2.5 rounded-xl hover:from-violet-700 hover:to-pink-600 transition-all"
                    >
                      <ShoppingBag size={13} />
                      Add to Bag
                    </button>
                    <button
                      onClick={() => handleRemove(product)}
                      className="p-2.5 border border-gray-200 text-gray-400 hover:text-rose-500 hover:border-rose-200 rounded-xl transition-colors"
                      aria-label="Remove from wishlist"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
