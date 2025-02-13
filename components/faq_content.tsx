"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Info, Star } from "lucide-react";

const faqs = [
  {
    question: "How much do I pay?",
    answer: "You pay nothing right now:)",
    icon: <Star size={20} />,
  },
  {
    question: "What are the functions of Scope AI?",
    answer: "Our AI offers accurate career consultations, making a standout CV, and helping you with getting your dream acceptance.",
    icon: <Info size={20} />,
  },
  {
    question: "How can I help Scope AI?",
    answer: "You can assist development of the Scope AI by requesting our demo.",
    icon: <HelpCircle size={20} />,
  },
  {
    question: "I have another question",
    answer: "Feel free to contact Scope AI team!",
    icon: <HelpCircle size={20} />,
  },
];

export const FAQ_Section = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      <div className="container max-w-screen-lg mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-5xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4 animate-gradient"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <p className="text-lg text-gray-400">
            Discover answers to common questions and learn more about our platform.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <div
                className="flex justify-between items-center px-6 py-5 cursor-pointer hover:bg-gray-700 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center gap-3">
                  <span className="text-blue-400">{faq.icon}</span>
                  <h3 className="text-xl font-semibold">{faq.question}</h3>
                </div>
                <motion.div
                  className="transform"
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={24} />
                </motion.div>
              </div>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="px-6 pb-4 text-gray-300"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
