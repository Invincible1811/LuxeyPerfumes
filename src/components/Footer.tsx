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

          {/* Company & Policies */}
          <div>
            <h4 className="text-xs tracking-[0.2em] text-violet-300 uppercase mb-6">
              Company
            </h4>
            <div className="space-y-3">
              <Link
                href="/about"
                className="block text-sm text-gray-500 hover:text-violet-300 transition-colors"
              >
                Our Story
              </Link>
              <Link
                href="/contact"
                className="block text-sm text-gray-500 hover:text-violet-300 transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/policies/shipping"
                className="block text-sm text-gray-500 hover:text-violet-300 transition-colors"
              >
                Shipping &amp; Delivery
              </Link>
              <Link
                href="/policies/refunds"
                className="block text-sm text-gray-500 hover:text-violet-300 transition-colors"
              >
                Returns &amp; Refunds
              </Link>
              <Link
                href="/policies/payment"
                className="block text-sm text-gray-500 hover:text-violet-300 transition-colors"
              >
                Payment Info
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
                Kiravi Street, Asokwa
                <br />
                Kumasi, Ghana
              </p>
              <p>
                <a href="tel:+233548911324" className="hover:text-violet-300 transition-colors">+233 548 911 324</a>
                <br />
                <a href="tel:+2330200211226" className="hover:text-violet-300 transition-colors">+233 020 021 1226</a>
              </p>
              <p>
                <a href="mailto:info@luxeyperfumes.com" className="hover:text-violet-300 transition-colors">info@luxeyperfumes.com</a>
              </p>
              <p className="text-xs text-gray-600 pt-2">
                Mon–Fri: 8AM–8PM
                <br />
                Sun: 11AM–8PM
                <br />
                Sat: Closed
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-violet-900/30 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Luxey Perfumes. All rights
            reserved.
          </p>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <Link href="/policies/privacy" className="text-xs text-gray-600 hover:text-violet-400">
              Privacy Policy
            </Link>
            <Link href="/policies/terms" className="text-xs text-gray-600 hover:text-violet-400">
              Terms &amp; Conditions
            </Link>
            <Link href="/policies/cookies" className="text-xs text-gray-600 hover:text-violet-400">
              Cookies
            </Link>
            <Link href="/policies/shipping" className="text-xs text-gray-600 hover:text-violet-400">
              Shipping
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
