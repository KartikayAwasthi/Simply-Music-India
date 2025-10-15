"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react"; // npm install lucide-react

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsShowcase() {
  const sectionRef = useRef(null);
  const [playingId, setPlayingId] = useState(null);

  const projects = [
    { id: 1, title: "Symphony Nights", desc: "Live orchestral recording and mixdown for the Mumbai Symphony.", video: "/media/jackline.mp4", ratio: "9/16" },
    { id: 2, title: "Urban Pulse", desc: "Hip-hop meets ambient: soundtrack design for street art documentary.", video: "/media/sid.mp4", ratio: "9/16" },
    { id: 3, title: "Echoes of Time", desc: "Minimalist piano & synth experiment for an indie short film.", video: "/media/echoes-of-time.mp4", ratio: "9/16" },
    { id: 4, title: "Rhythm Reborn", desc: "Revival of classical tabla & synth in a fusion single.", video: "/media/rhythm-reborn.mp4", ratio: "9/16" },
    { id: 5, title: "Skyline Dreams", desc: "Music video post-production with cinematic sound layering.", video: "/media/skyline-dreams.mp4", ratio: "16/9" },
    { id: 6, title: "Velvet Beats", desc: "Neo-soul inspired track blending vintage vinyl tones and analog synths.", video: "/media/velvet-beats.mp4", ratio: "16/9" },
    { id: 7, title: "Golden Strings", desc: "Live violin session recording for a heritage documentary.", video: "/media/golden-strings.mp4", ratio: "16/9" },
    { id: 8, title: "Electric Voyage", desc: "Electronic journey through retro synths and modern beats.", video: "/media/electric-voyage.mp4", ratio: "16/9" },
  ];

  // 🎬 GSAP Animations
  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll(".project-card");
    gsap.from(cards, {
      opacity: 0,
      y: 80,
      duration: 1.2,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
    });
  }, []);

  const handleVideoClick = (id) => setPlayingId((prev) => (prev === id ? null : id));

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative bg-gradient-to-b from-black via-[#0a0a0a] to-black text-white overflow-hidden touch-manipulation"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[40rem] h-[40rem] bg-white/10 blur-[200px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[45rem] h-[45rem] bg-white/10 blur-[200px] rounded-full animate-pulse" />
      </div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500 py-16"
      >
        Our Projects
      </motion.h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-6 md:px-16 pb-20">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            isPlaying={playingId === project.id}
            onClick={() => handleVideoClick(project.id)}
          />
        ))}
      </div>
    </section>
  );
}

// 🎧 Project Card (Tap-to-Play, Floating Sound Button)
function ProjectCard({ project, isPlaying, onClick }) {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  // Handle Play/Pause
  useEffect(() => {
    if (!videoRef.current) return;
    if (isPlaying) {
      document.querySelectorAll("video").forEach((v) => {
        if (v !== videoRef.current) v.pause();
      });
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  // Auto Pause when Offscreen
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (videoRef.current) {
            if (!entry.isIntersecting) videoRef.current.pause();
            else if (isPlaying) videoRef.current.play().catch(() => {});
          }
        });
      },
      { threshold: 0.5 }
    );
    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, [isPlaying]);

  // Mute Toggle
  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 120 }}
      className="project-card relative bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl overflow-hidden cursor-pointer group w-full mx-auto"
      style={{
        aspectRatio: project.ratio,
        maxWidth: project.ratio === "9/16" ? "350px" : "100%",
      }}
      onClick={onClick}
    >
      {/* 🎥 Video */}
      <video
        ref={videoRef}
        src={project.video}
        muted={isMuted}
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover transition-all duration-700"
      />

      {/* 🔊 Floating Sound Button */}
      {isPlaying && (
        <button
          onClick={toggleMute}
          className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/70 border border-white/30 rounded-full p-2 transition-all duration-300 backdrop-blur-sm"
        >
          {isMuted ? (
            <VolumeX size={20} className="text-white" />
          ) : (
            <Volume2 size={20} className="text-white" />
          )}
        </button>
      )}

      {/* Overlay with Title */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 p-5 flex flex-col justify-end">
        <h3 className="text-lg font-semibold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
          {project.title}
        </h3>
        <p className="text-gray-300 text-xs mt-1">{project.desc}</p>
      </div>
    </motion.div>
  );
}
