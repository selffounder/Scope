"use client";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const Demo = () => {
  return (
    <motion.section
      className="container max-w-screen-xl mx-auto px-6 py-24"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="bg-gradient-to-r from-[#D2DCFF] via-white to-[#D2DCFF] p-16 rounded-3xl shadow-xl flex flex-col lg:flex-row items-center gap-16"
        variants={childVariants}
      >
        <motion.div className="lg:w-1/2 space-y-8 text-center lg:text-left" variants={childVariants}>
          <h1 className="text-6xl font-bold tracking-tight text-gray-900 leading-tight">
            Start Your Dream Career!
          </h1>
          <h2 className="text-3xl font-semibold text-gray-700">
            The most effective way to begin your journey
          </h2>
          <p className="text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
            Our AI-powered platform helps you get career guidance, build a standout CV, and apply for top jobs effortlessly.
          </p>
          <div className="flex justify-center lg:justify-start gap-6 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-all shadow-lg"
              onClick={() => window.open("/signup", "_blank")}
            >
              Request Demo
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-200 text-black px-10 py-4 rounded-xl text-lg font-medium hover:bg-gray-300 transition-transform"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>

        <motion.div className="lg:w-1/2 w-full overflow-hidden rounded-2xl shadow-lg" variants={childVariants}>
          <div className="relative pb-[56.25%] h-0">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-2xl"
              src="https://www.youtube.com/watch?v=7hi5zwO75yc&t=1957s"
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
