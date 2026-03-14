"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("luxey-cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("luxey-cookie-consent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto bg-[#1e1133]/95 backdrop-blur-md border border-violet-800/30 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-2xl shadow-violet-950/40">
        <p className="text-sm text-violet-200/80 leading-relaxed flex-1">
          We use cookies to improve your experience, analyze traffic, and support website functionality. By continuing to
          use this site, you agree to our use of cookies.{" "}
          <Link href="/policies/cookies" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">
            Learn more
          </Link>
        </p>
        <button
          onClick={accept}
          className="flex-shrink-0 bg-gradient-to-r from-violet-600 to-pink-500 text-white text-xs tracking-[0.1em] uppercase px-6 py-3 rounded-full hover:from-violet-700 hover:to-pink-600 transition-all shadow-lg shadow-violet-500/25"
        >
          Accept Cookies
        </button>
      </div>
    </div>
  );
}
