"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Truck, Lock, ExternalLink } from "lucide-react";
import { useCart } from "@/context/CartContext";

declare global {
  interface Window {
    PaystackPop: {
      setup: (config: Record<string, unknown>) => { openIframe: () => void };
    };
  }
}

export default function CheckoutPage() {
  const router = useRouter();
  const { items, totalPrice, clearCart } = useCart();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    region: "",
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    script.async = true;
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isFormValid =
    form.name && form.email && form.phone && form.address && form.city;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid || !window.PaystackPop) return;

    const handler = window.PaystackPop.setup({
      key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || "",
      email: form.email,
      amount: totalPrice * 100,
      currency: "GHS",
      ref: `luxey-${Date.now()}-${Math.floor(Math.random() * 1000000)}`,
      metadata: {
        custom_fields: [
          { display_name: "Customer Name", variable_name: "name", value: form.name },
          { display_name: "Phone", variable_name: "phone", value: form.phone },
          { display_name: "Address", variable_name: "address", value: `${form.address}, ${form.city}, ${form.region}` },
          { display_name: "Items", variable_name: "items", value: items.map(i => `${i.product.name} x${i.quantity}`).join(", ") },
        ],
      },
      callback: (response: { reference: string }) => {
        clearCart();
        router.push(`/checkout/success?ref=${response.reference}`);
      },
      onClose: () => {
        console.log("Payment window closed");
      },
    });

    handler.openIframe();
  };

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

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: Form */}
            <div className="lg:col-span-3 space-y-8">
              {/* Contact */}
              <div>
                <h2 className="text-sm font-medium text-gray-900 tracking-wider uppercase mb-4">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 border border-violet-200 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/10 transition-all"
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email address"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 border border-violet-200 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/10 transition-all"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone number"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 border border-violet-200 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/10 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping */}
              <div>
                <h2 className="text-sm font-medium text-gray-900 tracking-wider uppercase mb-4">
                  Delivery Address
                </h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="address"
                    placeholder="Street address / Landmark"
                    value={form.address}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 border border-violet-200 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/10 transition-all"
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="city"
                      placeholder="City / Town"
                      value={form.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 border border-violet-200 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/10 transition-all"
                    />
                    <select
                      name="region"
                      value={form.region}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 border border-violet-200 rounded-xl text-sm text-gray-900 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/10 transition-all"
                    >
                      <option value="">Select region</option>
                      <option value="Greater Accra">Greater Accra</option>
                      <option value="Ashanti">Ashanti</option>
                      <option value="Western">Western</option>
                      <option value="Eastern">Eastern</option>
                      <option value="Central">Central</option>
                      <option value="Northern">Northern</option>
                      <option value="Volta">Volta</option>
                      <option value="Upper East">Upper East</option>
                      <option value="Upper West">Upper West</option>
                      <option value="Bono">Bono</option>
                      <option value="Bono East">Bono East</option>
                      <option value="Ahafo">Ahafo</option>
                      <option value="Savannah">Savannah</option>
                      <option value="North East">North East</option>
                      <option value="Oti">Oti</option>
                      <option value="Western North">Western North</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-6 pt-4">
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

            {/* Right: Order Summary */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-violet-50/80 to-pink-50/50 border border-violet-100 rounded-2xl p-6 sticky top-28">
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

                <button
                  type="submit"
                  disabled={!isFormValid}
                  className={`w-full mt-6 flex items-center justify-center gap-2 text-sm tracking-[0.1em] uppercase py-4 rounded-xl transition-all shadow-lg ${
                    isFormValid
                      ? "bg-gradient-to-r from-violet-600 to-pink-500 text-white hover:from-violet-700 hover:to-pink-600 shadow-violet-500/25"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed shadow-none"
                  }`}
                >
                  <Lock size={14} />
                  Pay GH₵{totalPrice.toFixed(2)}
                </button>

                <div className="relative flex items-center my-5">
                  <div className="flex-grow border-t border-violet-200/50"></div>
                  <span className="mx-3 text-[10px] text-gray-400 uppercase tracking-wider">or</span>
                  <div className="flex-grow border-t border-violet-200/50"></div>
                </div>

                <a
                  href="https://paystack.shop/pay/4pco28j60y"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 text-sm tracking-[0.1em] uppercase py-4 rounded-xl transition-all border-2 border-violet-300 text-violet-700 hover:bg-violet-50 hover:border-violet-500"
                >
                  <ExternalLink size={14} />
                  Pay via Paystack Link
                </a>

                <div className="text-center mt-4 space-y-1">
                  <p className="text-xs font-medium text-gray-500">Secure Payment</p>
                  <p className="text-[10px] text-gray-400">
                    Payments are processed securely through Paystack. Your order will only be confirmed after successful payment authorization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
