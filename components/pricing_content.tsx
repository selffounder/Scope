"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Pricing = () => {
  const [applications, setApplications] = useState<number>(10);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

  const costPerApplication = 2;
  const totalCost = applications * costPerApplication;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(10, Math.min(100, Number(e.target.value)));
    setApplications(value);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedbackMessage(null);

    try {
      const response = await fetch("/api/submitForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, applications, totalCost }),
      });

      if (!response.ok) throw new Error("Failed to submit. Please try again.");

      setFeedbackMessage("✅ Form submitted successfully!");
      setFormData({ name: "", email: "" });
      setApplications(10);
    } catch (error) {
            console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderBenefits = () => {
    return applications <= 49 ? (
      <ul className="text-left text-lg text-gray-700 space-y-2">
        <li>✅ 3 CVs</li>
        <li>✅ {applications} applications</li>
        <li>✅ Limitless career consulting</li>
      </ul>
    ) : (
      <ul className="text-left text-lg text-gray-700 space-y-2">
        <li>✅ 5 fully customized CVs</li>
        <li>✅ {applications} applications</li>
        <li>✅ Limitless career consulting</li>
        <li>✅ 2 free consultations with career experts</li>
      </ul>
    );
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-gray-200">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container max-w-screen-lg mx-auto text-center"
      >
        <h2 className="text-6xl font-extrabold text-black mb-8">Interactive Pricing Calculator</h2>
        <p className="text-xl text-gray-700 mb-16">
          Enter the number of applications below to calculate your cost and see the benefits you’ll receive.
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-2xl rounded-3xl p-12 mb-12"
        >
          <div className="mb-10">
            <label className="block text-2xl font-semibold text-black mb-6">
              Number of Applications (10 - 100)
            </label>
            <div className="flex items-center justify-center gap-6">
              <input
                type="number"
                min="10"
                max="100"
                value={applications}
                onChange={handleInputChange}
                className="w-32 px-4 py-3 border rounded-lg text-xl text-center focus:outline-none focus:ring-4 focus:ring-blue-500"
              />
              <input
                type="range"
                min="10"
                max="100"
                value={applications}
                onChange={handleInputChange}
                className="w-full h-2 bg-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-4 focus:ring-blue-500"
              />
            </div>
            <div className="flex justify-between text-sm text-gray-600 mt-4">
              <span>10 Applications</span>
              <span>100 Applications</span>
            </div>
          </div>

          <div className="text-4xl font-bold text-black mb-8">
            Total Cost: <span className="text-blue-600">${totalCost.toFixed(2)}</span>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-black mb-4">What You’ll Get:</h3>
            {renderBenefits()}
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-white shadow-xl rounded-2xl p-10 space-y-6"
        >
          <h3 className="text-3xl font-bold text-black mb-4">Sign Up</h3>
          <div>
            <label className="block text-lg font-medium text-black mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleFormChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-black mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleFormChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-full bg-black text-white py-4 rounded-lg text-xl font-medium transition-all ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-800"
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </motion.button>
        </motion.form>

        <AnimatePresence>
          {feedbackMessage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`mt-6 p-4 rounded-lg text-center text-lg ${
                feedbackMessage.startsWith("✅") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
              }`}
            >
              {feedbackMessage}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
