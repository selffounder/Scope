"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "@/assets/Scopee.png";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 bg-black text-white shadow-lg z-50">
      
      <div className="flex justify-center items-center py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-sm font-medium">
        <p className="flex items-center gap-2">
          <a href="/signup" className="hover:underline">🚀 Sign up for beta testing!</a>
          <motion.svg
            className="h-4 w-4 animate-bounce"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2L10.59 3.41 17.17 10H2v2h15.17l-6.58 6.59L12 22l10-10z" />
          </motion.svg>
        </p>
      </div>

      
      <div className="py-4">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex items-center justify-between">
            
            <a href="#">
              <Image src={Logo} alt="Scope AI Logo" height={60} width={60} className="rounded-full" />
            </a>

            
            <nav className="hidden md:flex gap-8 items-center">
              {["About", "Features", "Pricing", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-5 py-2 rounded-lg font-medium transition-all shadow-md hover:shadow-lg"
                onClick={() => window.open("/signup", "_blank")}
              >
                Get Started
              </motion.button>
            </nav>

            <button className="md:hidden flex items-center focus:outline-none" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-300" />
              ) : (
                <Menu className="h-6 w-6 text-gray-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isMobileMenuOpen ? "auto" : 0 }}
        className={`md:hidden overflow-hidden bg-black transition-all`}
      >
        <nav className="px-6 pb-4 space-y-4">
          {["About", "Features", "Pricing", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="block text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
          <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-5 py-3 rounded-lg font-medium">
            Get Started
          </button>
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;
