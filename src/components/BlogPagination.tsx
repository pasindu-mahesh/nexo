'use client';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function BlogPagination({
  currentPage,
  totalPages,
  onPageChange,
}: BlogPaginationProps) {
  if (totalPages <= 1) return null;

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage > 3) {
        pages.push('...');
      }

      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(totalPages - 1, currentPage + 1);
        i++
      ) {
        if (!pages.includes(i)) {
          pages.push(i);
        }
      }

      if (currentPage < totalPages - 2) {
        pages.push('...');
      }

      pages.push(totalPages);
    }

    return pages;
  };

  const pages = getPageNumbers();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center gap-2 mt-16 flex-wrap"
    >
      {/* Previous Button */}
      <motion.button
        whileHover={{ x: -4 }}
        whileTap={{ scale: 0.95 }}
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`p-2.5 rounded-full border-2 transition-all duration-300 ${
          currentPage === 1
            ? 'border-gray-300 text-gray-300 cursor-not-allowed'
            : 'border-red-500 text-red-500 hover:bg-red-50 hover:shadow-lg'
        }`}
      >
        <ChevronLeft size={20} />
      </motion.button>

      {/* Page Numbers */}
      <div className="flex items-center gap-2">
        {pages.map((page, idx) => (
          <motion.button
            key={idx}
            whileHover={page !== '...' && page !== currentPage ? { scale: 1.1 } : {}}
            whileTap={page !== '...' ? { scale: 0.95 } : {}}
            onClick={() => typeof page === 'number' && onPageChange(page)}
            disabled={page === '...'}
            className={`w-10 h-10 rounded-full font-semibold text-sm transition-all duration-300 border-2 ${
              page === currentPage
                ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white border-red-500 shadow-lg'
                : page === '...'
                ? 'cursor-default text-gray-400 border-transparent'
                : 'border-gray-300 text-gray-700 hover:border-red-500 hover:text-red-500 hover:bg-red-50'
            }`}
          >
            {page}
          </motion.button>
        ))}
      </div>

      {/* Next Button */}
      <motion.button
        whileHover={{ x: 4 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`p-2.5 rounded-full border-2 transition-all duration-300 ${
          currentPage === totalPages
            ? 'border-gray-300 text-gray-300 cursor-not-allowed'
            : 'border-red-500 text-red-500 hover:bg-red-50 hover:shadow-lg'
        }`}
      >
        <ChevronRight size={20} />
      </motion.button>

      {/* Page Info */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-600 text-sm ml-4"
      >
        Page {currentPage} of {totalPages}
      </motion.p>
    </motion.div>
  );
}
