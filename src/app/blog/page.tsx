'use client';
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import BlogCard from '@/components/BlogCard';
import BlogPagination from '@/components/BlogPagination';
import { BLOG_POSTS } from '@/lib/blogData';

const POSTS_PER_PAGE = 9;

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);

  // Sort blogs by date (newest first) and paginate
  const paginatedBlogs = useMemo(() => {
    const sortedBlogs = [...BLOG_POSTS].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    const startIdx = (currentPage - 1) * POSTS_PER_PAGE;
    const endIdx = startIdx + POSTS_PER_PAGE;
    return sortedBlogs.slice(startIdx, endIdx);
  }, [currentPage]);

  const totalPages = Math.ceil(BLOG_POSTS.length / POSTS_PER_PAGE);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-32 pb-16 px-6">
        {/* Gradient Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-red-50 to-orange-50" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-200 to-transparent opacity-40 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-200 to-transparent opacity-40 blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 px-4 py-2 bg-white/60 backdrop-blur-sm border border-gray-200 rounded-full mb-6"
          >
            <span className="text-2xl">📝</span>
            <span className="text-sm text-gray-700 font-medium">Insights & Industry Updates</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            Latest Articles &{' '}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Insights
            </span>
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Stay updated with the latest trends, strategies, and best practices in digital marketing and growth.
          </p>
        </motion.div>
      </div>

      {/* Blog Grid Section */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Grid of Blog Posts */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          >
            {paginatedBlogs.map((blog) => (
              <BlogCard
                key={blog.id}
                id={blog.id}
                title={blog.title}
                excerpt={blog.excerpt}
                thumbnail={blog.thumbnail}
                date={blog.date}
                category={blog.category}
              />
            ))}
          </motion.div>

          {/* Pagination */}
          <BlogPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </section>

      {/* Footer Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-red-500 to-orange-500 text-white py-16 px-6 mt-12"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to Read More?</h2>
          <p className="text-white/90 mb-8 text-lg">
            Subscribe to our newsletter to get the latest articles delivered to your inbox.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-red-500 font-bold rounded-full hover:shadow-lg transition-all duration-300"
          >
            Subscribe Now
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
}
