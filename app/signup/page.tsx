"use client";

import { useState } from "react";
import { Mail, User, Building, Loader2 } from "lucide-react"; 

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    institution: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedbackMessage("");

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.message || "Failed to submit form.");
      }

      setFormData({ name: "", email: "", institution: "", phone: "" });
      setFeedbackMessage("✅ Form submitted successfully!");
    } catch (error: any) {
      console.error("Error:", error);
      setFeedbackMessage("❌ " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-200 py-10">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-lg w-full">
        <h1 className="text-3xl font-extrabold text-center mb-6">Sign Up</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <label className="block text-lg font-medium mb-1">Name</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <User className="text-gray-500 mr-2" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Enter your name"
                required
              />
            </div>
          </div>
          <div className="relative">
            <label className="block text-lg font-medium mb-1">Email</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <Mail className="text-gray-500 mr-2" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          <div className="relative">
            <label className="block text-lg font-medium mb-1">Institution/Company</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <Building className="text-gray-500 mr-2" />
              <input
                type="text"
                name="institution"
                value={formData.institution}
                onChange={handleChange}
                className="w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Enter your institution/company"
              />
            </div>
          </div>
          <div className="relative">
            <label className="block text-lg font-medium mb-1">Phone (Optional)</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Enter your phone number"
            />
          </div>
          <button
            type="submit"
            className={`w-full bg-black text-white py-3 rounded-lg text-lg font-medium transition-all ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-800"
            } flex items-center justify-center`}
            disabled={isSubmitting}
          >
            {isSubmitting ? <Loader2 className="animate-spin mr-2" /> : null}
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>

        {feedbackMessage && (
          <div
            className={`mt-6 p-4 rounded-lg text-center text-lg ${
              feedbackMessage.startsWith("✅") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            }`}
          >
            {feedbackMessage}
          </div>
        )}
      </div>
    </section>
  );
}
