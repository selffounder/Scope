"use client";
import { motion } from "framer-motion";
import { FaRocket, FaCogs, FaChartLine } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, staggerChildren: 0.2 } },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const Content1 = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black text-white">
      <motion.div
        className="container max-w-screen-xl mx-auto bg-[#1c1f26] text-gray-100 rounded-3xl shadow-2xl py-16 px-10 space-y-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div className="space-y-6 text-center lg:text-left" variants={childVariants}>
          <div className="inline-flex items-center border border-gray-600 px-6 py-2 rounded-full text-sm font-medium bg-gray-800 text-gray-300">
            🚀 Beta Version is here
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <h1 className="text-6xl font-bold tracking-tight leading-tight text-white">
              The AI Career{" "}
              <span className="text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Consultant
              </span>
            </h1>
          </motion.div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto lg:mx-0 tracking-tight mt-6">
            Scope AI is designed to help you achieve long-term success on your career journey. Let us take your career to
            the next level with our AI-powered platform.
          </p>
        </motion.div>

        <motion.div className="flex flex-col lg:flex-row justify-around mt-12 gap-12" variants={childVariants}>
          <Feature
            icon={<AnimatedIcon component={FaRocket} animation="pulse" color="text-blue-400" />}
            title="Fast Application"
            description="Submit your applications quickly with personalized CVs."
          />
          <Feature
            icon={<AnimatedIcon component={FaCogs} animation = "pulse" color="text-purple-400" />}
            title="AI-Powered Guidance"
            description="Get real-time AI suggestions to boost your career."
          />
          <Feature
            icon={<AnimatedIcon component={FaChartLine} animation="pulse" color="text-pink-400" />}
            title="Track Your Growth"
            description="Monitor your progress and stay on top of your career goals."
          />
        </motion.div>

        <motion.div className="flex flex-col lg:flex-row items-center justify-center gap-6 mt-12" variants={childVariants}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-12 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-2xl transition-all"
            onClick={() => window.open("/signup", "_blank")}
          >
            🚀 Get Started for Free
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-xl border border-gray-600 text-gray-300 px-8 py-4 font-medium hover:bg-gray-700 hover:text-white transition-all"
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

const Feature = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <motion.div
    className="flex flex-col items-center space-y-4 max-w-xs bg-[#1c1f26] p-8 rounded-2xl shadow-lg border border-gray-700 transition-transform hover:scale-105 hover:shadow-2xl"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="p-6 bg-gray-800 rounded-full">{icon}</div>
    <h3 className="text-2xl font-bold text-white">{title}</h3>
    <p className="text-gray-400 text-center">{description}</p>
  </motion.div>
);

const AnimatedIcon = ({
  component: Icon,
  animation,
  color,
}: {
  component: React.ComponentType<{ className: string }>;
  animation: "bounce" | "spin" | "pulse";
  color: string;
}) => {
  const animationClasses = {
    bounce: "animate-bounce",
    spin: "animate-spin-slow",
    pulse: "animate-pulse",
  };

  return <Icon className={`${color} text-6xl ${animationClasses[animation]}`} />;
};
