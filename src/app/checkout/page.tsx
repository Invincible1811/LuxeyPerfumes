"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Truck, Lock } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const { items, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="pt-20 min-h-screen flex flex-col items-center justify-center text-center px-4">
        <div className="w-16 h-16 bg-violet-50 rounded-2xl flex items-center justify-center mb-6">
          <Truck size={28} className="text-violet-400" />
        </div>
        <h1 className="text-2xl font-light text-gray-900 mb-2">
          Your bag is empty
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Add some fragrances before checking out.
        </p>
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-pink-500 text-white text-sm tracking-wider uppercase px-8 py-3.5 rounded-full hover:from-violet-700 hover:to-pink-600 transition-all"
        >
          Browse Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/shop"
          className="inline-flex items-center gap-1.5 text-xs text-violet-400 hover:text-violet-700 transition-colors mb-8"
        >
          <ArrowLeft size={12} />
          Continue Shopping
        </Link>

        <h1 className="text-3xl font-light text-gray-900 tracking-tight mb-10">
          <span className="gradient-text">Checkout</span>
        </h1>

        <div className="max-w-lg mx-auto">
          <div className="bg-gradient-to-br from-violet-50/80 to-pink-50/50 border border-violet-100 rounded-2xl p-6">
            <h2 className="text-sm font-medium text-gray-900 tracking-wider uppercase mb-6">
              Order Summary
            </h2>

            <div className="space-y-4 max-h-64 overflow-y-auto mb-6">
              {items.map((item) => (
                <div key={item.product.id} className="flex gap-3">
                  <div className="relative w-14 h-18 rounded-lg overflow-hidden bg-white flex-shrink-0 product-image-frame">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      width={56}
                      height={72}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {item.product.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      Qty: {item.quantity}
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-violet-700 flex-shrink-0">
                    GH₵
                    {(item.product.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-violet-200/50 pt-4 space-y-3">
              <div className="flex justify-between text-sm text-gray-500">
                <span>Subtotal</span>
                <span>GH₵{totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Delivery</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between text-base font-semibold text-gray-900 pt-2 border-t border-violet-200/50">
                <span>Total</span>
                <span className="text-violet-700">
                  GH₵{totalPrice.toFixed(2)}
                </span>
              </div>
            </div>

            <a
              href="https://paystack.shop/pay/4pco28j60y"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-6 flex items-center justify-center gap-2 text-sm tracking-[0.1em] uppercase py-4 rounded-xl transition-all shadow-lg bg-gradient-to-r from-violet-600 to-pink-500 text-white hover:from-violet-700 hover:to-pink-600 shadow-violet-500/25"
            >
              <Lock size={14} />
              Pay via Paystack
            </a>

            <div className="text-center mt-4 space-y-1">
              <p className="text-xs font-medium text-gray-500">Secure Payment</p>
              <p className="text-[10px] text-gray-400">
                Payments are processed securely through Paystack. Your order will only be confirmed after successful payment authorization.
              </p>
            </div>

            <div className="flex justify-center gap-6 mt-6 pt-4 border-t border-violet-200/50">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Lock size={14} className="text-violet-400" />
                Secure payment
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <ShieldCheck size={14} className="text-violet-400" />
                Buyer protection
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Truck size={14} className="text-violet-400" />
                Fast delivery
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
