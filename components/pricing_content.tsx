"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export const Pricing = () => {
  const [applications, setApplications] = useState<number>(10);
  const costPerApplication = 2;
  const totalCost = applications * costPerApplication;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(10, Math.min(100, Number(e.target.value)));
    setApplications(value);
  };

  const renderBenefits = () => {
    return applications <= 49 ? (
      <ul className="text-left text-lg text-gray-300 space-y-2">
        <li>✅ 3 CVs</li>
        <li>✅ {applications} applications</li>
        <li>✅ Limitless career consulting</li>
      </ul>
    ) : (
      <ul className="text-left text-lg text-gray-300 space-y-2">
        <li>✅ 5 fully customized CVs</li>
        <li>✅ {applications} applications</li>
        <li>✅ Limitless career consulting</li>
        <li>✅ 2 free consultations with career experts</li>
      </ul>
    );
  };

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900 text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container max-w-screen-lg mx-auto text-center"
      >
        <h2 className="text-6xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-8">
          Interactive Pricing Calculator
        </h2>
        <p className="text-xl text-gray-400 mb-16">
          Enter the number of applications below to calculate your cost and see the benefits you’ll receive.
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800 shadow-2xl rounded-3xl p-12 mb-12"
        >
          <div className="mb-10">
            <label className="block text-2xl font-semibold text-white mb-6">
              Number of Applications (10 - 100)
            </label>
            <div className="flex items-center justify-center gap-6">
              <input
                type="number"
                min="10"
                max="100"
                value={applications}
                onChange={handleInputChange}
                className="w-32 px-4 py-3 border border-gray-700 rounded-lg text-xl text-center bg-gray-900 text-white focus:outline-none focus:ring-4 focus:ring-blue-500"
              />
              <input
                type="range"
                min="10"
                max="100"
                value={applications}
                onChange={handleInputChange}
                className="w-full h-2 bg-gray-600 rounded-lg appearance-none focus:outline-none focus:ring-4 focus:ring-blue-500"
              />
            </div>
            <div className="flex justify-between text-sm text-gray-500 mt-4">
              <span>10 Applications</span>
              <span>100 Applications</span>
            </div>
          </div>

          <div className="text-4xl font-bold text-white mb-8">
            Total Cost: <span className="text-blue-400">${totalCost.toFixed(2)}</span>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">What You’ll Get:</h3>
            {renderBenefits()}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
