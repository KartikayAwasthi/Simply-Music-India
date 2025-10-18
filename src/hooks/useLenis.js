"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function useLenis() {
  useEffect(() => {
    // 🎥 Create a Lenis instance with cinematic smoothness
    const lenis = new Lenis({
      duration: 2.4, // 🕐 longer = smoother (default ~1.2)
      easing: (t) => 1 - Math.pow(2, -15 * t), // 💫 ultra-soft easing curve
      smooth: true,
      smoothTouch: true, // 🖐 keep it smooth on touch devices too
      touchMultiplier: 1.5, // slight boost for mobile responsiveness
      direction: "vertical",
      gestureDirection: "vertical",
      lerp: 0.08, // fine-tune inertia for buttery motion
    });

    // 🌀 Animation frame loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 🧹 Cleanup on unmount
    return () => lenis.destroy();
  }, []);
}
