"use client";

import { motion } from "framer-motion";

export const CallToAction = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full opacity-30 blur-3xl transform -translate-x-1/3 -translate-y-1/3 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600 rounded-full opacity-30 blur-3xl transform translate-x-1/4 translate-y-1/4 animate-pulse-slow"></div>

      <motion.div
        className="container max-w-screen-xl mx-auto text-center relative z-10 space-y-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-white text-6xl font-bold tracking-tight leading-tight bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text">
          🚀 Take Your Career to the Next Level
        </h2>
        <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
          Join thousands of professionals who trust us to help them grow and achieve their goals. Build your personal brand, connect with top companies, and unlock new opportunities.
        </p>

        <motion.div className="flex justify-center gap-8 mt-12">
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(59, 130, 246, 0.7)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-12 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg hover:shadow-2xl"
            onClick={() => window.open("/signup", "_blank")}
          >
            🚀 Get Started for Free
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#333", boxShadow: "0 0 10px rgba(255, 255, 255, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-800 text-white px-12 py-4 rounded-xl text-lg font-semibold transition-all"
          >
            Learn More
          </motion.button>
        </motion.div>

        <p className="text-sm text-gray-500 mt-8">
          No credit card required. Get started in minutes and cancel anytime.
        </p>
      </motion.div>
    </section>
  );
};
