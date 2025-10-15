"use client";
import { motion } from "framer-motion";
import {
  Instagram,
  Youtube,
  Facebook,
  Music2,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-white via-[#f7f7f7] to-[#eaeaea] text-black py-20 px-6 md:px-16 border-t border-gray-200">
      {/* Floating rounded container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto rounded-[2rem] bg-white/60 backdrop-blur-lg border border-gray-200 shadow-[0_8px_40px_rgba(0,0,0,0.08)] p-10 md:p-16"
      >
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
      src="/logo/SimplyMusic.webp"
      alt="Simply Music India Logo"
      className="w-20 h-20 md:w-16 md:h-16 object-contain"
    />
    {/* <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-black via-[#222] to-[#444] bg-clip-text text-transparent tracking-tight">
      Simply Music India
    </h2> */}
  </div>

  <p className="text-gray-600 text-base leading-relaxed max-w-xl">
    Simply Music India is where sound, art, and innovation converge.
    We create musical experiences that resonate — from recording studios
    to visual soundscapes.
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
            <Link
              href="#home"
              className="hover:text-black transition-colors text-gray-700"
            >
              Home
            </Link>
            <Link
              href="#projects"
              className="hover:text-black transition-colors text-gray-700"
            >
              Projects
            </Link>
            <Link
              href="#team"
              className="hover:text-black transition-colors text-gray-700"
            >
              Team
            </Link>
            <Link
              href="#contact"
              className="hover:text-black transition-colors text-gray-700"
            >
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
              <MapPin size={30} className="text-black/70" /> Office-14 Janki Centre,Veera Desai road Andheri West Mumbai
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
          className="flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm gap-3 text-center md:text-left"
        >
          <p>
            © {new Date().getFullYear()} Simply Music India. All rights
            reserved.
          </p>
          <p className="text-gray-500">
            Designed & Developed by{" "}
            <span className="text-black font-semibold hover:text-gray-800 transition-colors">
             ❤️ Kartikay Awasthi
            </span>
          </p>
        </motion.div>
      </motion.div>

      {/* Subtle Top Glow */}
      <div className="absolute top-0 left-0 w-full h-[100px] bg-gradient-to-b from-white/80 via-transparent to-transparent pointer-events-none" />
    </footer>
  );
}
