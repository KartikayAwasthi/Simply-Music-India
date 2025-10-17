"use client";
import { useEffect, useRef, Suspense } from "react";
import { gsap } from "gsap";
import { Canvas, useThree } from "@react-three/fiber";
import {
  useGLTF,
  Html,
  useProgress,
  OrbitControls,
  Environment,
} from "@react-three/drei";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

// ---------- Loader ----------
function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center text-center text-gray-300">
        <div className="w-12 h-12 border-4 border-gray-400 border-t-accent rounded-full animate-spin mb-3"></div>
        <p className="text-sm tracking-wide">{progress.toFixed(0)}% Loaded</p>
      </div>
    </Html>
  );
}

// ---------- 3D Model ----------
function DeskModel() {
  const { scene } = useGLTF("/models/Desk.glb");
  const { size } = useThree();

  // Responsive positioning fix — center the model on mobile
  const isMobile = size.width < 768;
  const position = isMobile ? [0, -0.8, 0] : [0.3, -0.8, 0];

  return <primitive object={scene} scale={1.2} position={position} />;
}

// ---------- Hero Component ----------
export default function Hero() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  // GSAP animation for text
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    ).fromTo(
      subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=0.6"
    );
  }, []);

  return (
    <section className="relative h-screen w-full flex flex-col md:flex-row items-center justify-center bg-primary overflow-hidden">
      {/* ---------- Left Side Text (25%) ---------- */}
      <div className="w-full md:w-[25%] flex flex-col justify-center items-start text-center md:text-left px-6 sm:px-10 md:px-12 lg:px-16 z-10">
        <h1
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-accent leading-tight"
        >
          SimplyMusic India
        </h1>
        <p
          ref={subtitleRef}
          className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-md mx-auto md:mx-0 leading-relaxed"
        >
          We craft soulful sound experiences — from beats to brands.
        </p>
      </div>

      {/* ---------- Right Side 3D Model (75%) ---------- */}
      <div className="w-full md:w-[75%] flex justify-center items-center h-[45vh] sm:h-[55vh] md:h-full mt-8 md:mt-0">
        <Canvas
          camera={{ position: [0, 1.5, 3.8], fov: 45 }}
          shadows
          style={{ width: "100%", height: "100%", maxWidth: "100vw" }}
        >
          {/* Lighting */}
          <ambientLight intensity={0.6} />
          <directionalLight
            position={[4, 6, 5]}
            intensity={1.2}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <Environment preset="studio" />

          {/* Model Loader */}
          <Suspense fallback={<Loader />}>
            <DeskModel />
          </Suspense>

          {/* Orbit Controls — Limited ±45° horizontally & vertically */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate={false}
            minAzimuthAngle={-Math.PI / 4} // -45°
            maxAzimuthAngle={Math.PI / 4} // +45°
            minPolarAngle={Math.PI / 2 - Math.PI / 8} // -45° up
            maxPolarAngle={Math.PI / 2 + Math.PI / 8} // +45° down
          />
        </Canvas>
      </div>

      {/* ---------- Cinematic Overlay ---------- */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-primary opacity-30 pointer-events-none"></div>

      {/* ---------- Scroll Down Indicator ---------- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400"
      >
        <ChevronDown size={32} className="text-accent mb-1" />
        <span className="text-sm uppercase tracking-widest text-gray-400">
          Scroll to explore
        </span>
      </motion.div>
    </section>
  );
}
