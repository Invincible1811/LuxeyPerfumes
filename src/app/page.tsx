import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Truck, Shield, Leaf } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const featuredProducts = products.slice(0, 4);
  const bestSellers = products.filter((p) => p.badge === "Bestseller" || p.rating >= 4.8);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=1920&h=1080&fit=crop"
            alt="Luxury perfume"
            fill
            className="object-cover"
            priority
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxYTEwMjUiLz48L3N2Zz4="
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e1133]/90 via-purple-950/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.4em] text-violet-300 uppercase mb-6 animate-fade-in">
              The Art of Fragrance
            </p>
            <h1 className="text-5xl sm:text-7xl font-light text-white leading-tight tracking-tight animate-fade-in animation-delay-200">
              Scent is the
              <br />
              <span className="italic font-normal animate-shimmer">invisible</span> accessory
            </h1>
            <p className="text-lg text-violet-200/80 mt-8 max-w-lg leading-relaxed animate-fade-in animation-delay-400">
              Discover extraordinary fragrances crafted for the modern
              connoisseur. Each bottle tells a story of artistry and elegance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10 animate-fade-in animation-delay-600">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-pink-500 text-white text-sm tracking-[0.15em] uppercase px-10 py-4 rounded-full hover:from-violet-700 hover:to-pink-600 transition-all shadow-lg shadow-violet-500/30 animate-pulse-glow"
              >
                Shop Collection
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 border border-violet-400/40 text-white text-sm tracking-[0.15em] uppercase px-10 py-4 rounded-full hover:bg-violet-500/20 hover:border-violet-400/60 transition-all backdrop-blur-sm"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-gradient-to-r from-violet-50 to-pink-50 border-y border-violet-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center gap-3">
              <Truck size={20} className="text-violet-500" />
              <div>
                <p className="text-xs font-medium text-gray-900">Free Shipping</p>
                <p className="text-[10px] text-gray-500">On orders over $100</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Shield size={20} className="text-pink-500" />
              <div>
                <p className="text-xs font-medium text-gray-900">Authentic</p>
                <p className="text-[10px] text-gray-500">100% genuine products</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Sparkles size={20} className="text-amber-500" />
              <div>
                <p className="text-xs font-medium text-gray-900">Gift Wrapping</p>
                <p className="text-[10px] text-gray-500">Complimentary service</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Leaf size={20} className="text-emerald-500" />
              <div>
                <p className="text-xs font-medium text-gray-900">Sustainable</p>
                <p className="text-[10px] text-gray-500">Eco-friendly packaging</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs tracking-[0.3em] text-violet-400 uppercase mb-2">
              Curated Selection
            </p>
            <h2 className="text-3xl font-light text-gray-900 tracking-tight">
              Featured <span className="gradient-text">Fragrances</span>
            </h2>
          </div>
          <Link
            href="/shop"
            className="hidden sm:flex items-center gap-2 text-sm text-violet-600 hover:text-violet-800 transition-colors group"
          >
            View All
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="sm:hidden mt-8 text-center">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-sm text-violet-600 hover:text-violet-800"
          >
            View All Collection
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Banner Section */}
      <section className="relative h-[500px] overflow-hidden bg-[#0c0514]">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-violet-600/20 blur-[120px] animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-pink-500/20 blur-[100px] animate-float" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-fuchsia-500/15 blur-[80px] animate-pulse" />
        </div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        {/* Top & bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0514] via-transparent to-[#0c0514] opacity-60" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.4em] text-violet-300 uppercase mb-4">
              Curated for You
            </p>
            <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight mb-6">
              The <span className="animate-shimmer">Luxey</span> Collection
            </h2>
            <p className="text-violet-200/80 mb-8 max-w-lg mx-auto leading-relaxed">
              Explore our handpicked collection of 30 signature fragrances — from
              floral elegance to bold woody depth, crafted to leave a lasting impression.
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-pink-500 text-white text-sm tracking-[0.15em] uppercase px-10 py-4 rounded-full hover:from-violet-700 hover:to-pink-600 transition-all shadow-lg shadow-violet-500/30"
            >
              Discover Now
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] text-pink-400 uppercase mb-2">
            Most Loved
          </p>
          <h2 className="text-3xl font-light text-gray-900 tracking-tight">
            Best<span className="gradient-text">sellers</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {bestSellers.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Link href="/shop?category=floral" className="group relative h-72 overflow-hidden rounded-2xl">
            <Image
              src="/images/IMG1.jpeg"
              alt="Floral fragrances"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-purple-950/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <p className="text-[10px] tracking-[0.3em] text-violet-300 uppercase mb-1">
                Collection
              </p>
              <h3 className="text-xl font-light text-white">Floral</h3>
            </div>
          </Link>
          <Link href="/shop?category=fresh" className="group relative h-72 overflow-hidden rounded-2xl">
            <Image
              src="/images/IMG5.jpeg"
              alt="Fresh fragrances"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-purple-950/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <p className="text-[10px] tracking-[0.3em] text-violet-300 uppercase mb-1">
                Collection
              </p>
              <h3 className="text-xl font-light text-white">Fresh</h3>
            </div>
          </Link>
          <Link href="/shop?category=woody" className="group relative h-72 overflow-hidden rounded-2xl">
            <Image
              src="/images/IMG10.jpeg"
              alt="Woody fragrances"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-purple-950/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <p className="text-[10px] tracking-[0.3em] text-violet-300 uppercase mb-1">
                Collection
              </p>
              <h3 className="text-xl font-light text-white">Woody</h3>
            </div>
          </Link>
          <Link href="/shop?category=oriental" className="group relative h-72 overflow-hidden rounded-2xl">
            <Image
              src="/images/IMG8.jpeg"
              alt="Oriental fragrances"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-purple-950/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <p className="text-[10px] tracking-[0.3em] text-violet-300 uppercase mb-1">
                Collection
              </p>
              <h3 className="text-xl font-light text-white">Oriental</h3>
            </div>
          </Link>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-gradient-to-r from-violet-50 via-pink-50 to-amber-50 py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Sparkles size={24} className="text-violet-400 mx-auto mb-6" />
          <blockquote className="text-2xl sm:text-3xl font-light text-gray-800 leading-relaxed italic">
            &ldquo;Luxey perfumes are more than fragrances — they are an
            experience. Each scent transports me to a different world.&rdquo;
          </blockquote>
          <div className="mt-8">
            <p className="text-sm font-medium text-gray-900">Sophie Laurent</p>
            <p className="text-xs text-violet-500 mt-1">Fashion Editor, Vogue</p>
          </div>
        </div>
      </section>
    </>
  );
}
