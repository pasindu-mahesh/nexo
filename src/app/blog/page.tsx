'use client';
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import BlogCard from '@/components/BlogCard';
import BlogPagination from '@/components/BlogPagination';

// Sample blog data - Replace with your actual blog data source
const SAMPLE_BLOGS = [
  {
    id: '1',
    title: 'How to Maximize Your Social Media ROI in 2024',
    excerpt:
      'Learn the latest strategies for measuring and improving your social media return on investment. We explore data-driven approaches, audience segmentation, and conversion optimization techniques that top brands are using right now.',
    thumbnail: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=500&q=80',
    date: 'Apr 15, 2024',
    category: 'Social Media',
  },
  {
    id: '2',
    title: 'The Complete Guide to SEO in 2024',
    excerpt:
      'Discover the most current SEO best practices and how search engine algorithms have evolved. This comprehensive guide covers technical SEO, content optimization, link building strategies, and tools you need to dominate search results.',
    thumbnail: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=500&q=80',
    date: 'Apr 14, 2024',
    category: 'SEO',
  },
  {
    id: '3',
    title: 'Building a High-Converting Landing Page',
    excerpt:
      'Master the art of landing page design and copywriting to boost your conversion rates. We dive into psychological triggers, A/B testing methodologies, and real-world case studies from successful campaigns.',
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&q=80',
    date: 'Apr 13, 2024',
    category: 'Design',
  },
  {
    id: '4',
    title: 'Content Marketing Strategies That Actually Work',
    excerpt:
      'Explore content distribution channels, content calendar planning, and audience engagement tactics that drive real business results. Learn from industry leaders and apply these proven methodologies to your content strategy.',
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&q=80',
    date: 'Apr 12, 2024',
    category: 'Content',
  },
  {
    id: '5',
    title: 'Email Marketing Automation for Growth',
    excerpt:
      'Unlock the power of email automation to nurture leads and increase customer lifetime value. This guide covers segmentation strategies, personalization techniques, and workflow automation best practices.',
    thumbnail: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=500&q=80',
    date: 'Apr 11, 2024',
    category: 'Email',
  },
  {
    id: '6',
    title: 'Understanding User Analytics and Behavior',
    excerpt:
      'Learn how to interpret user analytics data to make informed business decisions. This article covers key metrics, analytics tools, heatmaps, user behavior tracking, and actionable insights for optimization.',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-adf4e2a92c61?w=500&q=80',
    date: 'Apr 10, 2024',
    category: 'Analytics',
  },
  {
    id: '7',
    title: 'Video Marketing: The Future of Digital Advertising',
    excerpt:
      'Discover why video content dominates digital marketing and how to create compelling video campaigns. From YouTube strategies to TikTok trends, we cover platforms, best practices, and measurement techniques.',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c8248f4aa446?w=500&q=80',
    date: 'Apr 9, 2024',
    category: 'Video',
  },
  {
    id: '8',
    title: 'Influencer Marketing: Building Strategic Partnerships',
    excerpt:
      'Learn how to identify, vet, and collaborate with influencers who align with your brand values. This guide includes negotiation strategies, campaign measurement, and ROI tracking methodologies.',
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=80',
    date: 'Apr 8, 2024',
    category: 'Influencer',
  },
  {
    id: '9',
    title: 'Mobile Marketing Strategy for Modern Consumers',
    excerpt:
      'Understand how to optimize your marketing for mobile-first audiences. We cover app marketing, mobile-friendly design, SMS campaigns, push notifications, and mobile commerce best practices.',
    thumbnail: 'https://images.unsplash.com/photo-1512941691920-25bef266aad1?w=500&q=80',
    date: 'Apr 7, 2024',
    category: 'Mobile',
  },
  {
    id: '10',
    title: 'Conversion Rate Optimization Fundamentals',
    excerpt:
      'Master the science of turning visitors into customers through systematic CRO. Learn about split testing, user experience optimization, checkout flow improvements, and data-driven decision making.',
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=80',
    date: 'Apr 6, 2024',
    category: 'Growth',
  },
  {
    id: '11',
    title: 'Brand Identity and Logo Design Trends',
    excerpt:
      'Explore contemporary design trends and how to create a memorable brand identity. This article covers color psychology, typography, logo design principles, and visual consistency across platforms.',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&q=80',
    date: 'Apr 5, 2024',
    category: 'Branding',
  },
  {
    id: '12',
    title: 'PPC Advertising Strategies for Maximum ROI',
    excerpt:
      'Dominate paid advertising channels with expert PPC strategies. Learn keyword research, bid management, ad copy optimization, landing page alignment, and performance tracking across Google Ads and social platforms.',
    thumbnail: 'https://images.unsplash.com/photo-1553531889-e6cf89480f0b?w=500&q=80',
    date: 'Apr 4, 2024',
    category: 'Advertising',
  },
];

const POSTS_PER_PAGE = 9;

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);

  // Sort blogs by date (newest first) and paginate
  const paginatedBlogs = useMemo(() => {
    const sortedBlogs = [...SAMPLE_BLOGS].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    const startIdx = (currentPage - 1) * POSTS_PER_PAGE;
    const endIdx = startIdx + POSTS_PER_PAGE;
    return sortedBlogs.slice(startIdx, endIdx);
  }, [currentPage]);

  const totalPages = Math.ceil(SAMPLE_BLOGS.length / POSTS_PER_PAGE);

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
