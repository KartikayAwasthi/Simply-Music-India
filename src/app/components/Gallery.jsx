"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const sectionRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  // 🖼️ Gallery Images
  const images = [
    "/gallery/Aisa-Waisa-Pyaar.jpg",
    "/gallery/Chand-jesa-yaar.jpg",
    "/gallery/Crusher-S3.jpg",
    "/gallery/Dil-Dosti-Dilemma.jpg",
    "/gallery/Contable-Ghorpade.jpg",
    "/gallery/Crusher-S4.jpg",
    "/gallery/Tujhpe-Main-Fida-2.jpg",
    "/gallery/Faasle.jpg",
    "/gallery/Ghar-Set-hai.jpg",
    "/gallery/Music-Album.jpg",
    "/gallery/Lily.jpg",
    "/gallery/Lost-&-Found.jpg",
    "/gallery/The-Girl-On-The-Highway.jpg",
    "/gallery/Please-Find-Attached.jpg",
    "/gallery/Salesman-of-the-year.jpg",
    "/gallery/Main-Aur-Tum.jpg",
    "/gallery/Dil-Logical.jpg",
    "/gallery/Zindagi-Thak-Gyi.jpg",
  ];

  // 🎢 GSAP Parallax Scroll Effect
  useEffect(() => {
    const section = sectionRef.current;
    const imageContainers = section.querySelectorAll(".gallery-item");

    imageContainers.forEach((container) => {
      const img = container.querySelector("img");
      gsap.fromTo(
        img,
        { y: gsap.utils.random(-60, 60) },
        {
          y: gsap.utils.random(60, -60),
          ease: "none",
          scrollTrigger: {
            trigger: container,
            scrub: true,
            start: "top bottom",
            end: "bottom top",
          },
        }
      );
    });
  }, []);

  // ❌ Close image viewer on ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="relative w-full bg-gradient-to-b from-black via-[#0a0a0a] to-black text-white py-24 overflow-hidden"
    >
      {/* ✨ Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-[30rem] h-[30rem] bg-white/10 blur-[180px] rounded-full opacity-20" />
        <div className="absolute bottom-[15%] right-[10%] w-[25rem] h-[25rem] bg-white/10 blur-[150px] rounded-full opacity-20" />
      </div>

      {/* 🏷️ Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-600 mb-16"
      >
        Gallery
      </motion.h2>

      {/* 🖼️ Grid of Images */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-20 z-10 items-start">
        {images.map((src, i) => (
          <motion.div
            key={i}
            className="gallery-item relative inline-block overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-[0_0_25px_rgba(255,255,255,0.05)] group cursor-pointer"
            whileHover={{ scale: 1.04 }}
            transition={{ type: 'spring', stiffness: 200 }}
            onClick={() => setSelectedImage(src)}
          >
            <img
              src={src}
              alt={`Gallery Work ${i + 1}`}
              loading="lazy"
              className="block w-full h-auto object-cover transition-all duration-700 group-hover:scale-110 brightness-90 group-hover:brightness-100"
            />

            {/* Overlay Text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6">
              <p className="text-white text-sm uppercase tracking-widest">
                Project {i + 1}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🪟 Fullscreen Image Viewer */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            key="viewer"
            className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-[2000] cursor-zoom-out"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Full view"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-[0_0_40px_rgba(255,255,255,0.15)]"
            />

            {/* ❌ Close Button */}
            <motion.button
              className="absolute top-6 right-6 text-white text-3xl font-light hover:text-gray-300 transition"
              onClick={() => setSelectedImage(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              ✕
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
