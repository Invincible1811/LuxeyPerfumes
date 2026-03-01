"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle, Package, ArrowRight } from "lucide-react";

export default function CheckoutSuccessPage() {
  const searchParams = useSearchParams();
  const ref = searchParams.get("ref");
  const id = searchParams.get("id");

  return (
    <div className="pt-20 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <div className="w-20 h-20 bg-gradient-to-r from-green-100 to-emerald-100 rounded-3xl flex items-center justify-center mx-auto mb-8 animate-float">
          <CheckCircle size={36} className="text-emerald-500" />
        </div>

        <h1 className="text-3xl font-light text-gray-900 tracking-tight mb-3">
          Order <span className="gradient-text">Confirmed!</span>
        </h1>
        <p className="text-gray-500 mb-8 leading-relaxed">
          Thank you for your purchase! Your fragrances are being prepared with
          care. We&apos;ll notify you when your order is on its way.
        </p>

        {ref && (
          <div className="bg-violet-50/80 border border-violet-100 rounded-2xl p-5 mb-8 text-left space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Reference</span>
              <span className="font-medium text-gray-900">{ref}</span>
            </div>
            {id && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Transaction ID</span>
                <span className="font-medium text-gray-900">{id}</span>
              </div>
            )}
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Status</span>
              <span className="font-medium text-emerald-600">Paid</span>
            </div>
          </div>
        )}

        <div className="flex items-center justify-center gap-3 text-sm text-gray-500 mb-10">
          <Package size={16} className="text-violet-400" />
          Estimated delivery: 1–3 business days within Accra
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/shop"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-pink-500 text-white text-sm tracking-wider uppercase px-8 py-3.5 rounded-full hover:from-violet-700 hover:to-pink-600 transition-all shadow-lg shadow-violet-500/25"
          >
            Continue Shopping
            <ArrowRight size={14} />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 border border-violet-200 text-violet-600 text-sm tracking-wider uppercase px-8 py-3.5 rounded-full hover:bg-violet-50 transition-all"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
