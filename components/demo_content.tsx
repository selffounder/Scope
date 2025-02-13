"use client";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, staggerChildren: 0.2 } },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const Demo = () => {
  return (
    <motion.section
      className="relative container max-w-screen-xl mx-auto px-6 py-32 bg-gradient-to-b from-black to-gray-900 rounded-3xl overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-64 h-64 bg-blue-600 opacity-20 blur-3xl rounded-full absolute top-10 left-20 animate-pulse"></div>
        <div className="w-96 h-96 bg-purple-700 opacity-20 blur-2xl rounded-full absolute bottom-10 right-20 animate-pulse-slow"></div>
      </div>

      <motion.div
        className="bg-gradient-to-r from-[#1e1e2f] to-[#2a2a40] p-16 rounded-3xl shadow-2xl flex flex-col lg:flex-row items-center gap-16 relative z-10"
        variants={childVariants}
      >
        <motion.div className="lg:w-1/2 space-y-8 text-center lg:text-left" variants={childVariants}>
          <h1 className="text-6xl font-bold tracking-tight text-white leading-tight">
            Start Your Dream Career!
          </h1>
          <h2 className="text-3xl font-semibold text-gray-300">
            The most effective way to begin your journey
          </h2>
          <p className="text-lg text-gray-400 max-w-lg mx-auto lg:mx-0">
            Our AI-powered platform helps you get career guidance, build a standout CV, and apply for top jobs effortlessly.
          </p>
          <div className="flex justify-center lg:justify-start gap-6 mt-8">
            <motion.button
              whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(59, 130, 246, 0.7)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-12 py-4 rounded-xl text-lg font-semibold transition-all"
              onClick={() => window.open("/signup", "_blank")}
            >
              🚀 Request Demo
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#333" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-700 text-white px-10 py-4 rounded-xl text-lg font-medium transition-all"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>

        <motion.div className="lg:w-1/2 w-full overflow-hidden rounded-2xl shadow-2xl" variants={childVariants}>
          <div className="relative pb-[56.25%] h-0">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-2xl"
              src="https://www.youtube.com/embed/7hi5zwO75yc"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
