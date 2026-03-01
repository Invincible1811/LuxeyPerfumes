"use client";

import { X, Plus, Minus, ShoppingBag, Lock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const {
    items,
    removeFromCart,
    updateQuantity,
    totalItems,
    totalPrice,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-50 transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-violet-100">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} className="text-violet-600" />
            <h2 className="text-sm tracking-[0.15em] uppercase text-gray-900">
              Shopping Bag ({totalItems})
            </h2>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1 text-gray-400 hover:text-violet-600 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="text-violet-200 mb-4" />
              <p className="text-gray-500 text-sm mb-2">
                Your bag is empty
              </p>
              <Link
                href="/shop"
                onClick={() => setIsCartOpen(false)}
                className="text-sm underline underline-offset-4 text-violet-600 hover:text-violet-800 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 pb-6 border-b border-violet-50 last:border-0"
                >
                  <div className="relative w-20 h-24 bg-violet-50 rounded-xl overflow-hidden flex-shrink-0">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-sm font-medium text-gray-900 truncate">
                          {item.product.name}
                        </h3>
                        <p className="text-xs text-gray-500 mt-0.5">
                          {item.product.size}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-gray-400 hover:text-rose-500 transition-colors"
                      >
                        <X size={14} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-violet-200 rounded-lg">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.quantity - 1
                            )
                          }
                          className="p-1.5 text-violet-400 hover:text-violet-700 transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-3 text-xs text-gray-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.quantity + 1
                            )
                          }
                          className="p-1.5 text-violet-400 hover:text-violet-700 transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <p className="text-sm font-semibold text-violet-700">
                        GH₵{(item.product.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-violet-100 px-6 py-5 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Subtotal</span>
              <span className="text-lg font-semibold text-violet-700">
                GH₵{totalPrice.toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-gray-400">
              Shipping and taxes calculated at checkout.
            </p>
            <Link
              href="/checkout"
              onClick={() => setIsCartOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-pink-500 text-white text-sm tracking-[0.1em] uppercase py-4 rounded-xl hover:from-violet-700 hover:to-pink-600 transition-all shadow-lg shadow-violet-500/25"
            >
              <Lock size={14} />
              Checkout — GH₵{totalPrice.toFixed(2)}
            </Link>
            <button
              onClick={() => setIsCartOpen(false)}
              className="w-full text-sm text-gray-500 underline underline-offset-4 hover:text-violet-600 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
