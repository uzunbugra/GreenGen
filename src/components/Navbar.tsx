"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Çözüm", href: "#solution" },
    { name: "Teknoloji", href: "#tech" },
    { name: "Dashboard", href: "#dashboard" },
    { name: "Etki", href: "#impact" },
    { name: "Rapor", href: "#docs" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-mint/80 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-heading font-bold text-primary">GreenGen</span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-navy/70 hover:text-primary transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-primary/90 transition-all transform hover:scale-105 shadow-lg shadow-primary/20">
              Bilgi Al
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-primary">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-mint border-b border-primary/10 px-4 pt-2 pb-6 space-y-2"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-navy/70 hover:text-primary font-medium"
            >
              {link.name}
            </a>
          ))}
          <button className="w-full mt-4 bg-primary text-white px-6 py-3 rounded-full font-semibold shadow-lg">
            Bilgi Al
          </button>
        </motion.div>
      )}
    </nav>
  );
}
