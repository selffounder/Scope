"use client";

import { motion } from "framer-motion";

export const CallToAction = () => {
  return (
    <section className="relative py-56 bg-black overflow-hidden">
      
      <motion.div
        className="container max-w-screen-xl mx-auto text-center relative z-10 space-y-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-6xl font-bold tracking-tight leading-tight text-white">
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
            whileHover={{ scale: 1.05, backgroundColor: "#444", boxShadow: "0 0 15px rgba(255, 255, 255, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-700 text-white px-12 py-4 rounded-xl text-lg font-semibold transition-all"
          >
            Learn More
          </motion.button>
        </motion.div>

        <p className="text-sm text-gray-400 mt-8">
          No credit card required. Get started in minutes and cancel anytime.
        </p>
      </motion.div>
    </section>
  );
};
