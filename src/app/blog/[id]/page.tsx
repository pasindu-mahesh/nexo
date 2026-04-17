'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { use } from 'react';
import { ChevronLeft, Calendar, User, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import BlogCard from '@/components/BlogCard';
import { getBlogPost, getRelatedBlogs } from '@/lib/blogData';
import { notFound } from 'next/navigation';

export default function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const blog = getBlogPost(id);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = getRelatedBlogs(params.id);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-24 left-6 z-40"
      >
        <Link href="/blog">
          <motion.button
            whileHover={{ x: -4 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors duration-300 font-medium"
          >
            <ChevronLeft size={20} />
            Back to Blog
          </motion.button>
        </Link>
      </motion.div>

      {/* Hero Section with Thumbnail */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative w-full h-96 md:h-[500px] overflow-hidden bg-gradient-to-br from-red-100 to-orange-100"
      >
        <motion.img
          src={blog.thumbnail}
          alt={blog.title}
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

        {/* Floating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute bottom-6 left-6 md:bottom-8 md:left-8"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-bold rounded-full shadow-lg">
            {blog.category}
          </span>
        </motion.div>
      </motion.div>

      {/* Title and Metadata Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-gradient-to-br from-pink-50 via-red-50 to-orange-50 border-b border-gray-200"
      >
        <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {blog.title}
          </h1>

          {/* Metadata */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-6 items-center"
          >
            {/* Author */}
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 rounded-full bg-gradient-to-br from-red-400 to-orange-400 flex items-center justify-center text-white font-bold"
              >
                {blog.author[0]}
              </motion.div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{blog.author}</p>
                <p className="text-gray-600 text-xs">Author</p>
              </div>
            </div>

            {/* Date */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors"
            >
              <Calendar size={18} />
              <p className="text-sm font-medium">{blog.date}</p>
            </motion.div>

            {/* Reading Time */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors"
            >
              <Clock size={18} />
              <p className="text-sm font-medium">{blog.readTime}</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <article className="max-w-3xl mx-auto px-6 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {blog.content.map((block, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {block.type === 'text' && (
                <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                  {block.content}
                </p>
              )}

              {block.type === 'heading' && (
                <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                  {block.content}
                </h2>
              )}

              {block.type === 'image' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="my-12 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <motion.img
                    src={block.imageUrl}
                    alt={block.imageAlt}
                    className="w-full h-auto object-cover"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent my-12 origin-left"
        />

        {/* Share Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-8"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">Share this article</h3>
          <div className="flex gap-4 flex-wrap">
            {['Twitter', 'LinkedIn', 'Facebook', 'Copy Link'].map((social) => (
              <motion.button
                key={social}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-gray-100 hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-500 text-gray-900 hover:text-white font-medium rounded-full transition-all duration-300"
              >
                {social}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </article>

      {/* Related Posts Section */}
      <section className="bg-gradient-to-br from-pink-50 via-red-50 to-orange-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Related Blogs
            </h2>
            <p className="text-lg text-gray-600">
              Explore more insights and articles from our blog
            </p>
          </motion.div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {relatedBlogs.map((relatedBlog) => (
              <BlogCard
                key={relatedBlog.id}
                id={relatedBlog.id}
                title={relatedBlog.title}
                excerpt={relatedBlog.excerpt}
                thumbnail={relatedBlog.thumbnail}
                date={relatedBlog.date}
                category={relatedBlog.category}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-red-500 to-orange-500 text-white py-16 px-6"
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don't Miss Our Latest Updates
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Subscribe to our newsletter to get notified about new articles, insights, and marketing strategies.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-red-500 font-bold rounded-full hover:shadow-lg transition-all duration-300"
            >
              Subscribe
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
