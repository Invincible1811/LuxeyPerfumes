import Image from "next/image";
import { Award, Globe, Heart, Leaf } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Luxey Perfumes — our story, values, and the artistry behind our luxury fragrance collection.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=1920&h=800&fit=crop"
          alt="About Luxey Perfumes"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e1133]/80 to-purple-950/70" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div>
            <p className="text-xs tracking-[0.4em] text-violet-300 uppercase mb-4">
              Our Story
            </p>
            <h1 className="text-4xl sm:text-6xl font-light text-white tracking-tight">
              The Art of <span className="animate-shimmer">Luxey</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.3em] text-violet-400 uppercase mb-4">
              Since 2015
            </p>
            <h2 className="text-3xl font-light text-gray-900 tracking-tight mb-6">
              Born from <span className="gradient-text">Passion</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Luxey Perfumes was founded with a singular vision: to create
              fragrances that transcend the ordinary. Every bottle we produce
              is the result of countless hours of meticulous craftsmanship,
              blending the finest raw materials sourced from around the globe.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our master perfumers draw inspiration from art, nature, and
              human emotion to compose scents that tell stories. From the
              sun-drenched fields of Grasse to the exotic spice markets of
              Marrakech, each ingredient is carefully selected to create
              harmonious, evocative compositions.
            </p>
          </div>
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden product-image-frame shadow-xl shadow-violet-500/10">
            <Image
              src="/images/IMG5.jpeg"
              alt="Luxey Perfumes collection"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="product-image-vignette" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gradient-to-r from-violet-50 via-pink-50 to-amber-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] text-violet-400 uppercase mb-2">
              What We Believe
            </p>
            <h2 className="text-3xl font-light text-gray-900 tracking-tight">
              Our <span className="gradient-text">Values</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="text-center">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-5 shadow-md shadow-violet-200/50">
                <Award size={22} className="text-violet-600" />
              </div>
              <h3 className="text-sm font-medium text-gray-900 mb-2">
                Excellence
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                We never compromise on quality. Every fragrance meets the
                highest standards of perfumery.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-5 shadow-md shadow-emerald-200/50">
                <Leaf size={22} className="text-emerald-500" />
              </div>
              <h3 className="text-sm font-medium text-gray-900 mb-2">
                Sustainability
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Eco-conscious sourcing and recyclable packaging reflect our
                commitment to the planet.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-5 shadow-md shadow-pink-200/50">
                <Heart size={22} className="text-pink-500" />
              </div>
              <h3 className="text-sm font-medium text-gray-900 mb-2">
                Passion
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Every creation is infused with love and dedication from our
                team of artisan perfumers.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-5 shadow-md shadow-amber-200/50">
                <Globe size={22} className="text-amber-500" />
              </div>
              <h3 className="text-sm font-medium text-gray-900 mb-2">
                Global Craft
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Ingredients sourced worldwide, blended in France, cherished
                everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-light gradient-text">50+</p>
            <p className="text-xs text-gray-500 mt-2 tracking-wider uppercase">
              Unique Scents
            </p>
          </div>
          <div>
            <p className="text-4xl font-light gradient-text">30</p>
            <p className="text-xs text-gray-500 mt-2 tracking-wider uppercase">
              Countries
            </p>
          </div>
          <div>
            <p className="text-4xl font-light gradient-text">100K+</p>
            <p className="text-xs text-gray-500 mt-2 tracking-wider uppercase">
              Happy Customers
            </p>
          </div>
          <div>
            <p className="text-4xl font-light gradient-text">10</p>
            <p className="text-xs text-gray-500 mt-2 tracking-wider uppercase">
              Years of Craft
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#1e1133] to-purple-950 py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-light text-white tracking-tight mb-4">
            Experience the Difference
          </h2>
          <p className="text-violet-300/70 mb-8">
            Visit our boutique or explore our collection online to find the
            fragrance that speaks to your soul.
          </p>
          <a
            href="/shop"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-pink-500 text-white text-sm tracking-[0.15em] uppercase px-10 py-4 rounded-full hover:from-violet-700 hover:to-pink-600 transition-all shadow-lg shadow-violet-500/30"
          >
            Explore Collection
          </a>
        </div>
      </section>
    </div>
  );
}
