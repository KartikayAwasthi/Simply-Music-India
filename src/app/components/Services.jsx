"use client";

import { motion } from "framer-motion";
import {
  Music,
  PenTool,
  Headphones,
  Mic,
  Radio,
  Sliders,
} from "lucide-react";

const services = [
  {
    title: "Music Composition",
    icon: <Music size={42} color="#1DB954" />,
    desc: "Crafting melodies that capture emotion and bring stories to life with perfect rhythm and tone.",
  },
  {
    title: "Lyrics Writing",
    icon: <PenTool size={42} color="#E63946" />,
    desc: "Poetic and expressive lyrics that connect deeply with listeners and define your song’s soul.",
  },
  {
    title: "Music Production",
    icon: <Headphones size={42} color="#007BFF" />,
    desc: "Modern production using world-class tools to achieve immersive and professional sound design.",
  },
  {
    title: "Song Recording",
    icon: <Mic size={42} color="#FFD60A" />,
    desc: "Studio-grade recording setup to capture vocals and instruments with exceptional clarity and tone.",
  },
  {
    title: "Jingle Production",
    icon: <Radio size={42} color="#FF6B6B" />,
    desc: "Catchy, brand-defining jingles that make your identity stand out across every platform.",
  },
  {
    title: "Mixing & Mastering",
    icon: <Sliders size={42} color="#8B5CF6" />,
    desc: "Delivering a polished, balanced, and radio-ready final track with professional mastering precision.",
  },
];

export default function ServiceSection() {
  return (
    <section
      id="services"
      className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black via-[#0a0a0a] to-black text-white overflow-hidden py-28 px-6"
    >
      {/* Background Glow */}
      <div className="absolute w-[1000px] h-[1000px] bg-white/10 blur-[220px] rounded-full top-[20%] -left-[20%]" />
      <div className="absolute w-[700px] h-[700px] bg-white/5 blur-[180px] rounded-full bottom-[10%] right-[10%]" />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-6xl md:text-7xl font-extrabold text-center mb-20 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(255,255,255,0.6)]"
      >
        Our Services
      </motion.h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl w-full z-10">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="group relative p-8 rounded-3xl bg-[#111] border border-white/10 hover:border-white/25 shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] backdrop-blur-md transition-all duration-500 overflow-hidden"
          >
            {/* Glow Overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-white/10 via-transparent to-white/10 transition-opacity duration-500 rounded-3xl"></div>

            {/* Icon */}
            <div className="p-4 bg-white/5 rounded-2xl inline-block mb-5 group-hover:scale-110 transition-transform duration-500">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors duration-500">
              {service.desc}
            </p>

            {/* Glow Line */}
            <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-transparent via-white/70 to-transparent transition-all duration-700 rounded-full"></div>
          </motion.div>
        ))}
      </div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        viewport={{ once: true }}
        className="mt-20 text-gray-400 text-center max-w-3xl leading-relaxed text-sm md:text-base z-10"
      >
        At{" "}
        <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent font-semibold">
          Simply Music India
        </span>
        , we offer a complete spectrum of creative and technical sound services —  
        from the first note to the final master — blending art, precision, and innovation.
      </motion.p>
    </section>
  );
}
