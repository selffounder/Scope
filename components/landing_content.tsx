"use client";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, staggerChildren: 0.2 } },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const Content1 = () => {
  return (
    <motion.section
      className="container max-w-screen-xl mx-auto py-16 px-6 space-y-10 bg-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="space-y-6" variants={childVariants}>
        <div className="inline-flex items-center border border-[#222]/10 px-4 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-700">
          🚀 Beta Version is here
        </div>
        <h1 className="text-6xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-transparent leading-tight">
          A powerful career platform
        </h1>
        <p className="text-xl text-[#010D3E] tracking-tight mt-4">
          Scope AI is designed to help you achieve long-term success on your career journey.
          Start your career success today!
        </p>
      </motion.div>
      <motion.div className="flex items-center gap-4 mt-8" variants={childVariants}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-black text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-all shadow-lg"
          onClick={() => window.open("/signup", "_blank")}
        >
          🚀 Get Started for Free
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-lg border border-black text-black px-6 py-4 font-medium hover:bg-black hover:text-white transition-all"
        >
          Learn More
        </motion.button>
      </motion.div>
    </motion.section>
  );
};
