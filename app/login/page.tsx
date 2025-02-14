"use client";

{/* eslint-disable react/no-unescaped-entities */}

import { useState } from "react";
import { motion } from "framer-motion";
import {Header} from "@/components/header_content";
import {Footer} from "@/components/footer_content"

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = res.status !== 204 ? await res.json() : {};  // Handle empty responses

      if (!res.ok) throw new Error(result.error || "Login failed.");

      setMessage("🎉 Login successful!");
    }catch (error) {
        if (error instanceof Error) {
          setMessage(`❌ ${error.message}`);
        } else {
          setMessage("❌ An unexpected error occurred.");
        }
      }
    }

  return (
    <>
    <Header />
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black">
      <motion.div
        className="bg-gray-800 p-10 rounded-xl shadow-lg max-w-lg w-full text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <a href="/register" className="hover:underline">If you don't have an account, register!</a>
        <h1 className="text-4xl font-bold mb-6">Login</h1>
        <form onSubmit={handleLogin} className="space-y-6">
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none" required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none" required />
          <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 py-3 rounded-lg font-semibold hover:scale-105 transition-all">
            Login
          </button>
        </form>
        {message && <p className="mt-4 text-center">{message}</p>}
      </motion.div>
    </section>
    <Footer />
    </>
  );
}
