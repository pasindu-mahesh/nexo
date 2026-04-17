'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  thumbnail: string;
  date: string;
  category: string;
}

export default function BlogCard({ id, title, excerpt, thumbnail, date, category }: BlogCardProps) {
  // Truncate excerpt to approximately 4 lines (about 200 characters)
  const truncatedExcerpt = excerpt.length > 180 ? excerpt.substring(0, 180) + '...' : excerpt + '...';

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group h-full"
    >
      <div className="h-full rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
        {/* Image Container */}
        <div className="relative overflow-hidden h-56 bg-gradient-to-br from-red-100 to-orange-100">
          <motion.img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

          {/* Category Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="absolute top-4 left-4"
          >
            <span className="inline-block px-3 py-1 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-semibold rounded-full shadow-md">
              {category}
            </span>
          </motion.div>

          {/* Date Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="absolute top-4 right-4"
          >
            <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-medium rounded-full">
              {date}
            </span>
          </motion.div>
        </div>

        {/* Content Container */}
        <div className="p-6 flex flex-col h-[calc(100%-224px)]">
          {/* Title */}
          <motion.h3
            className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-red-500 transition-colors duration-300"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            {title}
          </motion.h3>

          {/* Excerpt */}
          <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow line-clamp-4">
            {truncatedExcerpt}
          </p>

          {/* Read More Button */}
          <motion.button
            whileHover={{ x: 6 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 text-red-500 font-semibold text-sm hover:text-red-600 transition-colors duration-300 group/btn"
          >
            Read More
            <motion.span
              className="inline-block"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight size={16} />
            </motion.span>
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}
