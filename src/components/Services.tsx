'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    title: "Social Media Marketing",
    desc: "Amplify your brand voice and drive conversions through data-powered social media management",
    img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=200&q=80",
  },
  {
    title: "Website Design & Development",
    desc: "Build a highly converting website that serves as a 24 x 7 sales person for your company",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=200&q=80",
  },
  {
    title: "Search Engine Optimization",
    desc: "Drive high intent traffic to your website and substantially increase web conversions",
    img: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=200&q=80",
  },
  {
    title: "Branding",
    desc: "Craft a captivating brand identity and build lasting connections through strategic storytelling",
    img: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=200&q=80",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 px-6" style={{ background: "linear-gradient(135deg, #1a0000 0%, #6b1010 60%, #3d0000 100%)" }}>
      <motion.div 
        className="max-w-5xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
        <p className="text-gray-300 max-w-xl mx-auto text-sm leading-relaxed">
          At Ladder Global, we provide end to end branding and digital marketing solutions to help businesses build a strong brand identity, highly effective digital platforms, grow their presence online and generate high quality leads.
        </p>
        <button className="mt-6 px-8 py-3 rounded-full text-white font-semibold text-sm" style={{ background: "#e8453c" }}>
          Explore Services
        </button>
      </motion.div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((s, i) => (
          <motion.div 
            key={s.title} 
            className="flex bg-white rounded-2xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <img src={s.img} alt={s.title} className="w-36 object-cover flex-shrink-0" />
            <div className="p-6 flex flex-col justify-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{s.desc}</p>
              <a href="#" className="text-sm font-semibold text-gray-800 flex items-center gap-1 hover:gap-2 transition-all">
                Learn More <span>→</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
