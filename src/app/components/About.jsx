"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen w-full bg-gradient-to-b from-black via-[#0a0a0a] to-black text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 gap-12 md:gap-20 overflow-hidden font-sans"
    >
      {/* Left Side - Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 text-gray-300 leading-relaxed tracking-wide space-y-6 pl-[50px]" // 👈 added left padding
      >
        {/* Heading */}
        <h2 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent font-[Poppins]">
          Hello, <br /> Rishi here!
        </h2>

        {/* Paragraphs */}
        <p className="text-lg font-light text-gray-300 font-[Inter]">
          Welcome to{" "}
          <span className="font-semibold text-white">Simply Music India</span> — 
          where your music finds its true sound. We believe every story deserves
          the right melody. That’s why we sit with you, listen closely, and
          understand exactly what you’re looking for before creating something
          that feels just right.
        </p>

        <p className="text-lg font-light text-gray-300 font-[Inter]">
          With a team of seasoned musicians, producers, lyricists, and
          composers, we don’t just deliver music — we craft experiences tailored
          to your vision, your style, and your budget.
        </p>

        <p className="text-lg font-light text-gray-300 font-[Inter]">
          When you choose us, you’re not just hiring professionals — you’re
          gaining partners who care about your project as much as you do.
        </p>

        {/* Motto */}
        <p className="text-lg italic font-semibold text-white font-[Inter] mt-4">
          Because for us, it’s simple: if it matters to you, it matters to us.
        </p>

        {/* Signature */}
        <div className="pt-6">
          <p className="text-5xl italic text-red-600 font-moon">Rishi</p>
          <br />
          <p className="text-gray-400 text-sm font-semibold tracking-wider">
            <span className="font-semibold text-white">Rishi Pathak</span>, Founder of Simply Music India
          </p>
        </div>
      </motion.div>

      {/* Right Side - Rishi Image */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 flex justify-center relative"
      >
        <motion.img
          src="/Rishi.png"
          alt="Rishi Pathak"
          className="w-[420px] sm:w-[480px] md:w-[550px] h-auto object-cover rounded-none drop-shadow-[0_0_60px_rgba(255,255,255,0.08)]"
        />

        {/* Subtle Glow Behind Image */}
        <div className="absolute bottom-0 w-[400px] h-[400px] bg-white/70 blur-[200px] rounded-full opacity-20 -z-10" />
      </motion.div>
    </section>
  );
}
