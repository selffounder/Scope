"use client";
import {Header} from "@/components/header_content";
import { useState } from "react";
import { Mail, User, Building, Loader2 } from "lucide-react";
import {Footer} from "@/components/footer_content"

interface FormData {
  name: string;
  email: string;
  institution: string;
  additionalInfo?: string;
}

export default function SignUp() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    institution: "",
    additionalInfo: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

      setFormData({ name: "", email: "", institution: "", additionalInfo: "" });
      setFeedbackMessage("✅ Form submitted successfully!");
    } catch (error: unknown) {
      console.error("Error:", error);
      if (error instanceof Error) {
        setFeedbackMessage(`❌ ${error.message}`);
      } else {
        setFeedbackMessage("❌ An unknown error occurred.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    <Header />
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 to-gray-300 py-16">
      <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-2xl w-full">
        <h1 className="text-4xl font-black text-center text-black mb-8">Sign Up</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <label className="block text-lg font-medium mb-2 text-black">Name</label>
            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
              <User className="text-gray-500 mr-2" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-300 text-black"
                placeholder="Enter your name"
                required
              />
            </div>
          </div>
          <div className="relative">
            <label className="block text-lg font-medium mb-2 text-black">Email</label>
            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
              <Mail className="text-gray-500 mr-2" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-300 text-black"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          <div className="relative">
            <label className="block text-lg font-medium mb-2 text-black">Institution/Company</label>
            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
              <Building className="text-gray-500 mr-2" />
              <input
                type="text"
                name="institution"
                value={formData.institution}
                onChange={handleChange}
                className="w-full bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-300 text-black"
                placeholder="Enter your institution/company"
              />
            </div>
          </div>
          <div className="relative">
            <label className="block text-lg font-medium mb-2 text-black">Additional Information (Optional)</label>
            <textarea
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              className="w-full h-32 border rounded-lg px-3 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300 text-black resize-none"
              placeholder="Add any additional information here..."
            />
          </div>
          <button
            type="submit"
            className={`w-full bg-black text-white py-3 rounded-lg text-lg font-medium transition-all ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-800"
            } flex items-center justify-center`}
            disabled={isSubmitting}
          >
            {isSubmitting && <Loader2 className="animate-spin mr-2" />}
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>

        {feedbackMessage && (
          <div
            className={`mt-6 p-4 rounded-lg text-center text-lg ${
              feedbackMessage.startsWith("✅")
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {feedbackMessage}
          </div>
        )}
      </div>
    </section>
    <Footer />
    </>
  );
}
