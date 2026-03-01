"use client";

import { createContext, useContext, useState, useCallback } from "react";
import { Check, X, ShoppingBag, Heart } from "lucide-react";
import Image from "next/image";

interface ToastData {
  id: string;
  message: string;
  type: "cart" | "wishlist" | "success" | "info";
  image?: string;
  productName?: string;
}

interface ToastContextType {
  showToast: (toast: Omit<ToastData, "id">) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const showToast = useCallback((toast: Omit<ToastData, "id">) => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { ...toast, id }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {/* Toast Container */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3 max-w-sm">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="animate-slide-up bg-white rounded-2xl shadow-2xl shadow-black/10 border border-gray-100 p-4 flex items-center gap-3 min-w-[320px]"
          >
            {toast.image && (
              <div className="relative w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 bg-violet-50">
                <Image
                  src={toast.image}
                  alt={toast.productName || ""}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="flex items-center gap-2 flex-1 min-w-0">
              {toast.type === "cart" && (
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 flex items-center justify-center flex-shrink-0">
                  <Check size={14} className="text-white" />
                </div>
              )}
              {toast.type === "wishlist" && (
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-rose-400 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <Heart size={12} className="text-white fill-white" />
                </div>
              )}
              <div className="min-w-0">
                {toast.productName && (
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {toast.productName}
                  </p>
                )}
                <p className="text-xs text-gray-500">{toast.message}</p>
              </div>
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-gray-300 hover:text-gray-500 transition-colors flex-shrink-0"
            >
              <X size={14} />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
