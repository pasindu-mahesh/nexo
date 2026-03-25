'use client';

import React, { useState } from 'react';

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 h-fit sticky top-24">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        I want more quality leads for my company
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Input */}
        <div>
          <input
            type="text"
            name="name"
            placeholder="John David"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition text-gray-900 placeholder-gray-400"
            required
          />
        </div>

        {/* Email Input */}
        <div>
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition text-gray-900 placeholder-gray-400"
            required
          />
        </div>

        {/* Phone Number with Country Code */}
        <div className="flex gap-2">
          <select
            className="px-3 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition text-gray-900 min-w-[80px]"
            defaultValue="+94"
          >
            <option value="+94">🇱🇰 +94</option>
            <option value="+1">🇺🇸 +1</option>
            <option value="+44">🇬🇧 +44</option>
            <option value="+91">🇮🇳 +91</option>
            <option value="+61">🇦🇺 +61</option>
          </select>
          <input
            type="tel"
            name="phone"
            placeholder="123 4567"
            value={formData.phone}
            onChange={handleChange}
            className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition text-gray-900 placeholder-gray-400"
            required
          />
        </div>

        {/* Service Dropdown */}
        <div>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition text-gray-900"
            required
          >
            <option value="">I want help to manage my Social Media</option>
            <option value="growth-marketing">Growth Marketing Strategy</option>
            <option value="conversion">Conversion Rate Optimization</option>
            <option value="analytics">Analytics & Reporting</option>
            <option value="seo">Search Engine Optimization</option>
            <option value="ads">Paid Advertising Management</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Message Textarea */}
        <div>
          <textarea
            name="message"
            placeholder="My Goal is to increase leads, web traffic"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition text-gray-900 placeholder-gray-400 resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-semibold py-3 rounded-lg transition shadow-lg hover:shadow-xl active:scale-95"
        >
          Submit
        </button>

        <p className="text-xs text-gray-500 text-center mt-4">
          We respect your privacy. Your data is secure with us.
        </p>
      </form>
    </div>
  );
}
