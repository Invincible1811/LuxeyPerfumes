"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingBag, Heart, ArrowLeft, Minus, Plus, Check } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useToast } from "@/components/Toast";
import ProductCard from "@/components/ProductCard";
import { useState } from "react";

export default function ProductDetailPage() {
  const params = useParams();
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { showToast } = useToast();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return (
      <div className="pt-20 min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-2xl font-light text-gray-900 mb-4">
          Product Not Found
        </h1>
        <Link
          href="/shop"
          className="text-sm underline underline-offset-4 text-violet-600 hover:text-violet-800"
        >
          Return to Shop
        </Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const wishlisted = isInWishlist(product.id);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    showToast({
      type: "cart",
      message: `${quantity} item${quantity > 1 ? "s" : ""} added to your bag`,
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
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Link href="/" className="hover:text-violet-600 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            href="/shop"
            className="hover:text-violet-600 transition-colors"
          >
            Shop
          </Link>
          <span>/</span>
          <span className="text-violet-600">{product.name}</span>
        </div>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image */}
          <div className="relative aspect-[3/4] rounded-3xl overflow-hidden product-image-frame shadow-xl shadow-violet-500/10">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="product-image-vignette" />
            {product.badge && (
              <span className="absolute top-4 left-4 z-10 bg-gradient-to-r from-violet-600 to-pink-500 text-white text-[10px] tracking-[0.15em] uppercase px-4 py-2 rounded-full shadow-lg">
                {product.badge}
              </span>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center">
            <Link
              href="/shop"
              className="inline-flex items-center gap-1.5 text-xs text-violet-400 hover:text-violet-700 transition-colors mb-8"
            >
              <ArrowLeft size={12} />
              Back to Collection
            </Link>

            <p className="text-xs tracking-[0.3em] text-violet-400 uppercase mb-2">
              {product.brand}
            </p>
            <h1 className="text-3xl sm:text-4xl font-light text-gray-900 tracking-tight">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={
                      i < Math.floor(product.rating)
                        ? "fill-amber-400 text-amber-400"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>
              <span className="text-xs text-gray-500">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mt-6">
              <span className="text-2xl font-semibold text-violet-700">
                GH₵{product.price}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-gray-400 line-through">
                  GH₵{product.originalPrice}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mt-6">
              {product.longDescription}
            </p>

            {/* Size */}
            <div className="mt-8">
              <p className="text-xs tracking-wider text-gray-500 uppercase mb-3">
                Size
              </p>
              <div className="inline-flex border-2 border-violet-600 px-5 py-2.5 rounded-xl">
                <span className="text-sm text-violet-700 font-medium">{product.size}</span>
              </div>
            </div>

            {/* Fragrance Notes */}
            <div className="mt-8 space-y-4">
              <p className="text-xs tracking-wider text-gray-500 uppercase">
                Fragrance Notes
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-[10px] tracking-wider text-violet-400 uppercase mb-2">
                    Top
                  </p>
                  {product.notes.top.map((note) => (
                    <p key={note} className="text-xs text-gray-700">
                      {note}
                    </p>
                  ))}
                </div>
                <div>
                  <p className="text-[10px] tracking-wider text-pink-400 uppercase mb-2">
                    Middle
                  </p>
                  {product.notes.middle.map((note) => (
                    <p key={note} className="text-xs text-gray-700">
                      {note}
                    </p>
                  ))}
                </div>
                <div>
                  <p className="text-[10px] tracking-wider text-amber-500 uppercase mb-2">
                    Base
                  </p>
                  {product.notes.base.map((note) => (
                    <p key={note} className="text-xs text-gray-700">
                      {note}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex items-center gap-4 mt-10">
              {/* Quantity */}
              <div className="flex items-center border border-violet-200 rounded-xl">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-violet-400 hover:text-violet-700 transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="px-4 text-sm text-gray-900 min-w-[2rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-violet-400 hover:text-violet-700 transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-pink-500 text-white text-sm tracking-[0.1em] uppercase py-4 rounded-xl hover:from-violet-700 hover:to-pink-600 transition-all shadow-lg shadow-violet-500/25"
              >
                <ShoppingBag size={16} />
                Add to Bag
              </button>

              <button
                onClick={handleToggleWishlist}
                className={`p-4 border rounded-xl transition-all ${
                  wishlisted
                    ? "bg-rose-50 border-rose-300 text-rose-500"
                    : "border-violet-200 text-violet-400 hover:text-rose-500 hover:border-rose-400"
                }`}
                aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
              >
                <Heart size={16} className={wishlisted ? "fill-rose-500" : ""} />
              </button>
            </div>

            {/* Category Tag */}
            <div className="mt-8 pt-8 border-t border-violet-100">
              <p className="text-xs text-gray-400">
                Category:{" "}
                <Link
                  href={`/shop?category=${product.category}`}
                  className="text-violet-600 hover:underline underline-offset-4"
                >
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-24">
            <h2 className="text-2xl font-light text-gray-900 tracking-tight mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
