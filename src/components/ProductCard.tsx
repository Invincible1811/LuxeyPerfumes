"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Star, Heart } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useToast } from "@/components/Toast";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { showToast } = useToast();
  const wishlisted = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product);
    showToast({
      type: "cart",
      message: "Added to your bag",
      productName: product.name,
      image: product.image,
    });
  };

  const handleToggleWishlist = () => {
    const added = toggleWishlist(product);
    showToast({
      type: "wishlist",
      message: added ? "Added to wishlist" : "Removed from wishlist",
      productName: product.name,
      image: product.image,
    });
  };

  return (
    <div className="group relative card-hover">
      {/* Image */}
      <Link href={`/shop/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl product-image-frame">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
          <div className="product-image-vignette" />
          {product.badge && (
            <span className="absolute top-3 left-3 z-10 bg-gradient-to-r from-violet-600 to-pink-500 text-white text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 rounded-full shadow-md">
              {product.badge}
            </span>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[1]" />
        </div>
      </Link>

      {/* Wishlist */}
      <button
        onClick={handleToggleWishlist}
        className={`absolute top-3 right-3 w-9 h-9 rounded-full shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ${
          wishlisted
            ? "bg-rose-500 text-white opacity-100"
            : "bg-white/90 text-gray-400 hover:text-rose-500"
        }`}
        aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
      >
        <Heart size={14} className={wishlisted ? "fill-white" : ""} />
      </button>

      {/* Quick Add */}
      <button
        onClick={handleAddToCart}
        className="absolute bottom-[calc(25%+1rem)] right-3 w-10 h-10 bg-white/90 rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-gradient-to-r hover:from-violet-600 hover:to-pink-500 hover:text-white text-violet-700"
        aria-label="Add to cart"
      >
        <ShoppingBag size={16} />
      </button>

      {/* Info */}
      <div className="mt-4 space-y-1.5">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={10}
              className={
                i < Math.floor(product.rating)
                  ? "fill-amber-400 text-amber-400"
                  : "text-gray-200"
              }
            />
          ))}
          <span className="text-[10px] text-gray-400 ml-1">
            ({product.reviewCount})
          </span>
        </div>
        <Link href={`/shop/${product.id}`}>
          <p className="text-xs tracking-wider text-violet-400 uppercase">
            {product.brand}
          </p>
          <h3 className="text-sm font-medium text-gray-900 group-hover:text-violet-700 transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs text-gray-500 line-clamp-1">
          {product.description}
        </p>
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-violet-700">
            GH₵{product.price}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-gray-400 line-through">
              GH₵{product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
