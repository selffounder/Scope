"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    institution: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.message);

      setMessage("🎉 Registration successful! Please log in.");
      setFormData({ fullName: "", email: "", password: "", institution: "" });
    } catch (error: any) {
      setMessage(`❌ ${error.message}`);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-black">
      <motion.div
        className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold mb-6">Register</h1>
        <form onSubmit={handleRegister} className="space-y-6">
          <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none" required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none" required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none" required />
          <input type="text" name="institution" placeholder="Institution (Optional)" value={formData.institution} onChange={handleChange} className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none" />
          <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 py-3 rounded-lg font-semibold hover:scale-105 transition-all">
            Register
          </button>
        </form>
        {message && <p className="mt-4 text-center">{message}</p>}
      </motion.div>
    </section>
  );
}
