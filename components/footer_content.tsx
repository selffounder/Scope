"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Twitter, Instagram, Linkedin  } from "lucide-react"; // Icon library

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16 sticky">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12"
      >
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">About Scope AI</h2>
          <p className="text-gray-400">
           Scope AI helps future specialists to discover new fields, craft strong resumes, and apply to job positions. We are on the mission to make career guidance affordable!
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Links</h2>
          <nav className="space-y-2">
            <a href="#" className="block text-gray-400 hover:text-white transition-colors">Home</a>
            <a href="#" className="block text-gray-400 hover:text-white transition-colors">Features</a>
            <a href="#" className="block text-gray-400 hover:text-white transition-colors">Pricing</a>
            <a href="#" className="block text-gray-400 hover:text-white transition-colors">Contact</a>
          </nav>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Connect with Us</h2>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
          <p className="text-sm text-gray-500">Email: webuildscope@icloud.com</p>
        </div>
      </motion.div>

      <div className="mt-12 border-t border-gray-800 pt-8 text-center">
        <p className="text-gray-500 text-sm">© 2025 Scope AI. All rights reserved.</p>
      </div>
    </footer>
  );
};
