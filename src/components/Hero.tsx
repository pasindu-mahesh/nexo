import React from 'react';
import HeroSection from './HeroSection';
import LeadForm from './LeadForm';

export default function Hero() {
  return (
    <div className="relative w-full">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-red-50 to-orange-50" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-200 to-transparent opacity-40 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-200 to-transparent opacity-40 blur-3xl" />
      </div>

      <section className="min-h-screen pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            {/* Left Column - Content (takes 2 columns on desktop) */}
            <div className="lg:col-span-2 space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/60 backdrop-blur-sm border border-gray-200 rounded-full">
                <div className="flex -space-x-2">
                  <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">🇱🇰</span>
                  <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">🇺🇸</span>
                  <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">🇬🇧</span>
                  <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">🇦🇺</span>
                  <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">🇮🇳</span>
                </div>
                <span className="text-sm text-gray-700 font-medium">
                  Portfolio of 250 brands across 10 countries
                </span>
              </div>

              {/* Main Headline */}
              <div className="space-y-2">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                  We Help Businesses{' '}
                  <span className="inline-block">📊</span>
                </h1>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-red-500">
                  Increase Their Revenue
                </h1>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                  Through Growth Marketing{' '}
                  <span className="inline-block">🚀</span>
                </h1>
              </div>

              {/* Subtext */}
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                Leaner funnels. Smarter touchpoints. Better leads through a rigorous process of
                research, creativity, data and optimization.
              </p>

              {/* CTA Button */}
              <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold rounded-xl transition shadow-lg hover:shadow-xl active:scale-95 w-full md:w-auto">
                Get a Free Revenue-focused Marketing Consultation
              </button>

              {/* Social Proof - Reviews */}
              <div className="pt-6 space-y-4">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  <span className="font-bold">5 stars out of 70+ Reviews</span> across
                </p>

                {/* Platform Icons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-white rounded-lg shadow-sm">
                    <span className="text-lg">⭐</span>
                  </div>
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-white rounded-lg shadow-sm">
                    <span className="text-lg">📊</span>
                  </div>
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-white rounded-lg shadow-sm">
                    <span className="text-lg">✅</span>
                  </div>
                  <span className="text-xs text-gray-600 ml-2">Google, Clutch, Trustpilot</span>
                </div>
              </div>

              {/* Trusted Logos */}
              <div className="pt-6 border-t border-gray-200">
                <p className="text-xs text-gray-500 uppercase font-semibold tracking-wide mb-4">
                  Trusted by leading brands
                </p>
                <div className="flex flex-wrap items-center gap-6 lg:gap-8">
                  {['Acme Corp', 'TechFlow', 'DataPro', 'GrowthLabs', 'Innovate'].map((brand) => (
                    <div
                      key={brand}
                      className="text-sm font-semibold text-gray-400 hover:text-gray-600 transition cursor-pointer"
                    >
                      {brand}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Lead Form */}
            <div className="lg:col-span-1">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
