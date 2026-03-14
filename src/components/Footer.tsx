import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#1e1133] to-[#0f0a1a] text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold tracking-[0.3em] uppercase mb-4 gradient-text">
              Luxey
            </h3>
            <p className="text-sm leading-relaxed text-gray-500">
              Crafting extraordinary fragrances that tell your story. Each scent
              is a masterpiece, designed to evoke emotion and leave a lasting
              impression.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="text-gray-500 hover:text-pink-400 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-violet-400 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-violet-400 transition-colors"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] text-violet-300 uppercase mb-6">
              Quick Links
            </h4>
            <div className="space-y-3">
              <Link
                href="/shop"
                className="block text-sm text-gray-500 hover:text-violet-300 transition-colors"
              >
                Shop All
              </Link>
              <Link
                href="/shop?category=floral"
                className="block text-sm text-gray-500 hover:text-violet-300 transition-colors"
              >
                Floral
              </Link>
              <Link
                href="/shop?category=fresh"
                className="block text-sm text-gray-500 hover:text-violet-300 transition-colors"
              >
                Fresh
              </Link>
              <Link
                href="/shop?category=woody"
                className="block text-sm text-gray-500 hover:text-violet-300 transition-colors"
              >
                Woody
              </Link>
              <Link
                href="/shop?category=oriental"
                className="block text-sm text-gray-500 hover:text-violet-300 transition-colors"
              >
                Oriental
              </Link>
            </div>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-xs tracking-[0.2em] text-violet-300 uppercase mb-6">
              Policies
            </h4>
            <div className="space-y-3">
              <Link
                href="/policies/terms"
                className="block text-sm text-gray-500 hover:text-violet-300 transition-colors"
              >
                Terms &amp; Conditions
              </Link>
              <Link
                href="/policies/privacy"
                className="block text-sm text-gray-500 hover:text-violet-300 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/policies/refunds"
                className="block text-sm text-gray-500 hover:text-violet-300 transition-colors"
              >
                Refund / Return / Exchange
              </Link>
              <Link
                href="/policies/shipping"
                className="block text-sm text-gray-500 hover:text-violet-300 transition-colors"
              >
                Shipping &amp; Delivery
              </Link>
              <Link
                href="/policies/legal"
                className="block text-sm text-gray-500 hover:text-violet-300 transition-colors"
              >
                Contact / Legal Info
              </Link>
              <Link
                href="/policies/payment"
                className="block text-sm text-gray-500 hover:text-violet-300 transition-colors"
              >
                Payment Information
              </Link>
              <Link
                href="/policies/cookies"
                className="block text-sm text-gray-500 hover:text-violet-300 transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs tracking-[0.2em] text-violet-300 uppercase mb-6">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-gray-500">
              <p>
                Kiravi Street, Asokwa, Kumasi
                <br />
                Ashanti Region, Ghana
              </p>
              <p>
                <a href="tel:0200211226" className="hover:text-violet-300 transition-colors">0200211226</a>
              </p>
              <p>
                <a href="mailto:info@luxeyperfumes.com" className="hover:text-violet-300 transition-colors">info@luxeyperfumes.com</a>
              </p>
              <p className="text-xs text-violet-400/60 pt-2">
                Payments secured by Paystack
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-violet-900/30 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-xs text-gray-600">
              &copy; {new Date().getFullYear()} Luxey Perfumes. All rights reserved.
            </p>
            <p className="text-[10px] text-gray-700 mt-1">
              Independent fragrance retail startup in Ghana
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link href="/policies/terms" className="text-xs text-gray-600 hover:text-violet-400">
              Terms
            </Link>
            <Link href="/policies/privacy" className="text-xs text-gray-600 hover:text-violet-400">
              Privacy
            </Link>
            <Link href="/policies/refunds" className="text-xs text-gray-600 hover:text-violet-400">
              Refunds
            </Link>
            <Link href="/policies/shipping" className="text-xs text-gray-600 hover:text-violet-400">
              Shipping
            </Link>
            <Link href="/policies/cookies" className="text-xs text-gray-600 hover:text-violet-400">
              Cookies
            </Link>
            <Link href="/policies/legal" className="text-xs text-gray-600 hover:text-violet-400">
              Legal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
