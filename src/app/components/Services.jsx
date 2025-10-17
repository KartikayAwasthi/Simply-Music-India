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

const ACCENT_COLOR = "#ffffff"; // Elegant soft golden-white tone

const services = [
  {
    title: "Music Composition",
    icon: <Music size={42} color={ACCENT_COLOR} />,
    desc: "Crafting melodies that capture emotion and bring stories to life with perfect rhythm and tone.",
  },
  {
    title: "Lyrics Writing",
    icon: <PenTool size={42} color={ACCENT_COLOR} />,
    desc: "Poetic and expressive lyrics that connect deeply with listeners and define your song’s soul.",
  },
  {
    title: "Music Production",
    icon: <Headphones size={42} color={ACCENT_COLOR} />,
    desc: "Modern production using world-class tools to achieve immersive and professional sound design.",
  },
  {
    title: "Song Recording",
    icon: <Mic size={42} color={ACCENT_COLOR} />,
    desc: "Studio-grade recording setup to capture vocals and instruments with exceptional clarity and tone.",
  },
  {
    title: "Jingle Production",
    icon: <Radio size={42} color={ACCENT_COLOR} />,
    desc: "Catchy, brand-defining jingles that make your identity stand out across every platform.",
  },
  {
    title: "Mixing & Mastering",
    icon: <Sliders size={42} color={ACCENT_COLOR} />,
    desc: "Delivering a polished, balanced, and radio-ready final track with professional mastering precision.",
  },
];

export default function ServiceSection() {
  return (
    <section
      id="services"
      className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black via-[#0a0a0a] to-black text-white overflow-hidden py-28 px-6"
    >
      {/* Ambient Light Glow */}
      <div className="absolute w-[900px] h-[900px] bg-[#fff5d91a] blur-[250px] rounded-full top-[20%] -left-[15%]" />
      <div className="absolute w-[600px] h-[600px] bg-[#fff5d90f] blur-[220px] rounded-full bottom-[10%] right-[10%]" />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-6xl md:text-7xl text-white font-extrabold text-center mb-20 bg-gradient-to-r from-[#FFF5D9] via-[#fff8e6] to-white bg-clip-text  drop-shadow-[0_0_35px_rgba(255,245,217,0.5)]"
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
            className="group relative p-8 rounded-3xl bg-[#111111] border border-[#fff5d91f] hover:border-[#FFF5D9]/60 shadow-[0_0_20px_rgba(255,245,217,0.1)] hover:shadow-[0_0_40px_rgba(255,245,217,0.25)] backdrop-blur-md transition-all duration-500 overflow-hidden"
          >
            {/* Glow Overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-[#fff5d91a] via-transparent to-[#fff5d91a] transition-opacity duration-500 rounded-3xl"></div>

            {/* Icon */}
            <div className="p-4 bg-[#fff5d915] rounded-2xl inline-block mb-5 group-hover:scale-110 transition-transform duration-500">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-[#FFF5D9] via-[#fff9e6] to-white bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,245,217,0.5)]">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-200 transition-colors duration-500">
              {service.desc}
            </p>

            {/* Hover Glow Line */}
            <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-transparent via-[#FFF5D9]/80 to-transparent transition-all duration-700 rounded-full"></div>
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
        <span className="bg-gradient-to-r from-[#FFF5D9] via-[#fff8e6] to-white bg-clip-text text-transparent font-semibold">
          Simply Music India
        </span>
        , we offer a complete spectrum of creative and technical sound services —  
        from the first note to the final master — blending{" "}
        <span className="text-[#FFF5D9] font-semibold">art</span>,{" "}
        <span className="text-[#FFF5D9] font-semibold">precision</span>, and{" "}
        <span className="text-[#FFF5D9] font-semibold">innovation</span>.
      </motion.p>
    </section>
  );
}
