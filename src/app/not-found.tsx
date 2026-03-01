import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 bg-gradient-to-r from-violet-100 to-pink-100 rounded-3xl flex items-center justify-center mx-auto mb-8">
          <Sparkles size={32} className="text-violet-500" />
        </div>
        <h1 className="text-6xl font-bold gradient-text mb-4">404</h1>
        <h2 className="text-xl font-light text-gray-900 mb-3">
          Page Not Found
        </h2>
        <p className="text-sm text-gray-500 mb-8 leading-relaxed">
          The page you&apos;re looking for seems to have vanished like a
          fleeting scent. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-pink-500 text-white text-sm tracking-wider uppercase px-8 py-3.5 rounded-full hover:from-violet-700 hover:to-pink-600 transition-all shadow-lg shadow-violet-500/25"
          >
            <ArrowLeft size={14} />
            Back Home
          </Link>
          <Link
            href="/shop"
            className="inline-flex items-center justify-center gap-2 border border-violet-200 text-violet-700 text-sm tracking-wider uppercase px-8 py-3.5 rounded-full hover:bg-violet-50 transition-colors"
          >
            Browse Shop
          </Link>
        </div>
      </div>
    </div>
  );
}
