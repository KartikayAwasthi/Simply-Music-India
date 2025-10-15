"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Team() {
  const wrapperRef = useRef(null);
  const innerRef = useRef(null);
  const cardsRef = useRef([]);

  const teamMembers = [
    { name: "Rishi", role: "Founder", img: "/team/rishi.jpg" },
    { name: "Samrat", role: "Music Composer", img: "/team/dada.jpg" },
    { name: "Sid", role: "Composer", img: "/team/sid.jpeg" },
    { name: "Rahul", role: "Lyricist", img: "/team/rahul.jpg" },
    { name: "Divakar", role: "Lyricist", img: "/team/divakar.jpg" },
    { name: "Khush", role: "Music Producer", img: "/team/Khush.jpg" },
    { name: "Rawnak", role: "Music Producer", img: "/team/Rawnak.jpg" },
    { name: "Aditya", role: "Music Producer", img: "/team/Aditya.jpg" },
  ];

  const addCard = (el) =>
    el && !cardsRef.current.includes(el) && cardsRef.current.push(el);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current;
      if (!cards.length) return;

      const isMobile = window.innerWidth < 768;

      gsap.killTweensOf(cards);
      ScrollTrigger.getAll().forEach((t) => t.kill());

      // initial states
      gsap.set(cards, {
        xPercent: isMobile ? 0 : 100,
        opacity: isMobile ? 0 : 0,
        scale: 0.95,
        transformOrigin: "center center",
      });
      gsap.set(cards[0], { xPercent: 0, opacity: 1, scale: 1 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: `+=${cards.length * (isMobile ? 500 : 800) + 2500}`,
          scrub: 1.2,
          pin: innerRef.current,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // sequential reveal (same for mobile & desktop)
      cards.forEach((card, i) => {
        if (i < cards.length - 1) {
          tl.to(card, {
            xPercent: isMobile ? 0 : -(i + 1) * 40,
            opacity: isMobile ? 0 : 0.8,
            scale: isMobile ? 1 : 0.9,
            ease: "power3.inOut",
            duration: 1,
          });
          tl.to(
            cards[i + 1],
            {
              xPercent: 0,
              opacity: 1,
              scale: 1,
              ease: "power3.inOut",
              duration: 1,
            },
            "<0.4"
          );
        }
      });

      // ✅ Final step: show all artists together
      tl.addLabel("showAll");

      tl.to(
        cards,
        {
          opacity: 1,
          scale: isMobile ? 0.8 : 0.9,
          xPercent: 0,
          ease: "power2.out",
          duration: 1,
          onStart: () => {
            // For mobile, stack them nicely in a grid
            if (isMobile) {
              cards.forEach((card, i) => {
                gsap.to(card, {
                  x: (i % 2 === 0 ? -100 : 100),
                  y: Math.floor(i / 2) * 120 - 120, // rows
                  duration: 1.2,
                  scale: 0.9,
                });
              });
            } else {
              // For desktop, align them horizontally
              const n = cards.length;
              const vw = window.innerWidth;
              const gap = Math.min(48, Math.round(vw * 0.03));
              const cardW = Math.min(180, Math.floor((vw - gap * (n - 1)) / n));
              const totalWidth = n * cardW + (n - 1) * gap;
              const startLeft = (vw - totalWidth) / 2;
              const centerX = vw / 2;

              const targets = cards.map((_, i) => {
                const desiredCenter =
                  startLeft + cardW / 2 + i * (cardW + gap);
                return desiredCenter - centerX;
              });

              cards.forEach((card, i) => {
                gsap.to(card, {
                  x: targets[i],
                  y: 0,
                  scale: 0.9,
                  duration: 1.2,
                });
              });
            }
          },
        },
        "+=0.5"
      );

      // slight zoom out of container for full view
      tl.to(
        innerRef.current,
        {
          scale: isMobile ? 0.9 : 0.75,
          duration: 1.5,
          ease: "power2.out",
        },
        "showAll+=0.3"
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="team"
      ref={wrapperRef}
      className="relative min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-black text-white overflow-hidden"
    >
      <div
        ref={innerRef}
        className="relative h-screen flex items-center justify-center"
      >
        <h2 className="absolute top-10 z-40 text-4xl md:text-5xl font-extrabold text-accent tracking-wide pt-20">
          Our Creative Team
        </h2>

        {teamMembers.map((member, i) => (
          <div
            key={i}
            ref={addCard}
            className="absolute w-full h-full flex items-center justify-center"
            style={{ zIndex: teamMembers.length - i }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-accent shadow-[0_0_50px_rgba(249,200,14,0.3)]">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold">
                {member.name}
              </h3>
              <p className="text-accent uppercase tracking-widest mt-2 text-xs sm:text-sm md:text-base">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
