"use client"

import { motion } from "framer-motion"; 

export const CallToAction = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 rounded-full opacity-30 blur-3xl transform -translate-x-1/3 -translate-y-1/3 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-300 rounded-full opacity-30 blur-3xl transform translate-x-1/4 translate-y-1/4 animate-pulse"></div>

      <div className="container max-w-screen-xl mx-auto text-center relative z-10 space-y-10">
        <h2 className="text-6xl font-bold tracking-tight leading-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text ">
          🚀 Take Your Career to the Next Level
        </h2>
        <p className="text-2xl text-gray-700 max-w-3xl mx-auto">
          Join thousands of professionals who trust us to help them grow and achieve their goals. Build your personal brand, connect with top companies, and unlock new opportunities.
        </p>
        <div className="flex justify-center gap-8 mt-12">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-all shadow-lg"
            onClick={() => window.open("/signup", "_blank")}
          >
            🚀 Get Started for Free
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-300 text-black px-12 py-4 rounded-lg text-lg font-semibold hover:bg-gray-400 transition-all shadow-lg"
          >
            Learn More
          </motion.button>
        </div>

        <p className="text-sm text-gray-500 mt-8">
          No credit card required. Get started in minutes and cancel anytime.
        </p>
      </div>
    </section>
  );
};
