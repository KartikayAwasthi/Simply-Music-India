"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 80 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );
  }, []);

  return (
    <section className="h-screen flex flex-col justify-center items-center bg-primary">
      <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold text-accent">
        SimplyMusic India
      </h1>
      <p className="mt-6 text-lg text-gray-300 text-center max-w-xl">
        We craft soulful sound experiences — from beats to brands.
      </p>
    </section>
  );
}
