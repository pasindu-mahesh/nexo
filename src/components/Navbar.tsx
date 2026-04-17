import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              N
            </div>
            <span className="text-xl font-bold text-gray-900">NEXO</span>
          </div>

          {/* Menu Items */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="/" className="text-gray-900 font-medium text-sm hover:text-red-500 transition">
              Home
            </a>
            <div className="relative group cursor-pointer">
              <div className="flex items-center gap-1 text-gray-600 text-sm hover:text-red-500 transition">
                Services
                <ChevronDown size={16} />
              </div>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2">
                <a href="#services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 rounded">
                  Growth Marketing
                </a>
                <a href="#services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 rounded">
                  Strategy & Consulting
                </a>
                <a href="#services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 rounded">
                  Analytics & Optimization
                </a>
              </div>
            </div>
            <a href="#portfolio" className="text-gray-600 text-sm hover:text-red-500 transition">
              Portfolio
            </a>
            <a href="/blog" className="text-gray-600 text-sm hover:text-red-500 transition">
              Blog
            </a>
            <a href="#about" className="text-gray-600 text-sm hover:text-red-500 transition">
              About Us
            </a>
            <div className="relative group cursor-pointer">
              <div className="flex items-center gap-1 text-gray-600 text-sm hover:text-red-500 transition">
                Free Audits
                <ChevronDown size={16} />
              </div>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2">
                <a href="#audits" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 rounded">
                  Website Audit
                </a>
                <a href="#audits" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 rounded">
                  Marketing Audit
                </a>
              </div>
            </div>
            <a href="#schedule" className="text-gray-600 text-sm hover:text-red-500 transition">
              Schedule a Call
            </a>
          </div>

          {/* CTA Button */}
          <button className="hidden lg:block px-6 py-2.5 bg-red-500 hover:bg-red-600 text-white font-medium text-sm rounded-full transition shadow-md hover:shadow-lg">
            Get a Quote
          </button>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden p-2 text-gray-600 hover:text-gray-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
