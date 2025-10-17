"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Instagram,
  Youtube,
  Facebook,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

  // Close popup if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <footer className="relative bg-gradient-to-b from-white via-[#f7f7f7] to-[#eaeaea] text-black py-20 px-6 md:px-16 border-t border-gray-200">
      {/* Floating rounded container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto rounded-[2rem] bg-white/60 backdrop-blur-lg border border-gray-200 shadow-[0_8px_40px_rgba(0,0,0,0.08)] p-10 md:p-16"
      >
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo + About */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center gap-4">
              <img
                src="/logo/logo.png"
                alt="Simply Music India Logo"
                className="w-20 h-20 md:w-16 md:h-16 object-contain"
              />
            </div>
            <p className="text-gray-600 text-base leading-relaxed max-w-xl">
              Simply Music India is where sound, art, and innovation converge.
              We create musical experiences that resonate — from recording
              studios to visual soundscapes.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-3"
          >
            <h3 className="text-lg font-semibold text-black/80 mb-3">
              Quick Links
            </h3>
            <Link href="#home" className="hover:text-black text-gray-700">
              Home
            </Link>
            <Link href="#projects" className="hover:text-black text-gray-700">
              Projects
            </Link>
            <Link href="#team" className="hover:text-black text-gray-700">
              Team
            </Link>
            <Link href="#contact" className="hover:text-black text-gray-700">
              Contact
            </Link>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col gap-3"
          >
            <h3 className="text-lg font-semibold text-black/80 mb-3">
              Contact Info
            </h3>
            <p className="flex items-center gap-2 text-gray-700">
              <Phone size={18} className="text-black/70" /> +91 8056123297
            </p>
            <p className="flex items-center gap-2 text-gray-700">
              <Mail size={18} className="text-black/70" />{" "}
              simplymusicindia@gmail.com
            </p>
            <p className="flex items-center gap-2 text-gray-700">
              <MapPin size={30} className="text-black/70" /> Office-14 Janki
              Centre, Veera Desai Road, Andheri West, Mumbai
            </p>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-4"
          >
            <h3 className="text-lg font-semibold text-black/80 mb-2">
              Follow Us
            </h3>
            <div className="flex items-center gap-5 mt-1">
              <a
                href="https://www.instagram.com/simplymusicindia?igsh=azVlOTVrOXA4cGwz"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-200 hover:bg-black hover:text-white transition-all"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-200 hover:bg-black hover:text-white transition-all"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-200 hover:bg-black hover:text-white transition-all"
              >
                <Facebook size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider Line */}
        <div className="my-12 border-t border-gray-200"></div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm gap-3 text-center md:text-left"
        >
          <p>© {new Date().getFullYear()} Simply Music India. All rights reserved.</p>

          <div className="relative" ref={popupRef}>
            <p className="text-gray-500">
              Designed & Developed by{" "}
              <span
                onClick={() => setShowPopup(!showPopup)}
                className="text-black font-semibold hover:text-gray-800 transition-colors cursor-pointer"
              >
                ❤️ Kartikay Awasthi
              </span>
            </p>

            <AnimatePresence>
              {showPopup && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-8 right-0 bg-white border border-gray-200 shadow-lg rounded-xl px-4 py-3 flex items-center gap-4 z-50"
                >
                  <a
                    href="https://www.linkedin.com/in/kartikayawasthi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                    title="LinkedIn"
                  >
                    <i className="fab fa-linkedin">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.25 8.98h4.5v14.52h-4.5V8.98zM8.89 8.98h4.31v1.99h.06c.6-1.13 2.06-2.31 4.24-2.31 4.54 0 5.38 2.99 5.38 6.87v8.97h-4.5v-7.94c0-1.89-.03-4.32-2.64-4.32-2.65 0-3.06 2.06-3.06 4.18v8.08h-4.5V8.98z" />
                      </svg>
                    </i>
                  </a>

                  <a
                    href="https://www.instagram.com/kartikay_awasthi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-pink-500 transition-colors"
                    title="Instagram"
                  >
                    <Instagram size={22} />
                  </a>

                  <a
                    href="https://wa.me/918181862121"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-green-500 transition-colors"
                    title="WhatsApp"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16.6 13.2c-.3-.1-1.8-.9-2.1-1s-.5-.1-.7.1-.8 1-.9 1.1-.3.1-.5 0c-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.6-1.4-1.9s0-.4.1-.5c.1-.1.3-.3.4-.4.1-.1.2-.3.3-.5.1-.1 0-.3 0-.4-.1-.1-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1 2.9 1.2 3.1c.2.2 1.9 2.9 4.6 4 2.7 1.1 2.7.8 3.2.8.5 0 1.6-.6 1.8-1.2.2-.6.2-1.1.2-1.2 0-.1-.2-.1-.5-.2zM12 2a10 10 0 0 0-8.8 14.8L2 22l5.4-1.5A10 10 0 1 0 12 2z" />
                    </svg>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>

      {/* Subtle Top Glow */}
      <div className="absolute top-0 left-0 w-full h-[100px] bg-gradient-to-b from-white/80 via-transparent to-transparent pointer-events-none" />
    </footer>
  );
}
