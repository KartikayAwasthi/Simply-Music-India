"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Music2 } from "lucide-react";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [displayedText, setDisplayedText] = useState("");
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // 🧠 Chatbot Q&A
  const messages = [
    {
      question: "🎶 What is Simply Music India?",
      answer:
        "Simply Music India is a creative studio that transforms emotions into immersive soundtracks. We blend modern production with soulful storytelling to craft unique audio experiences.",
    },
    {
      question: "👨‍🎤 Who are the artists associated with Simply Music?",
      answer:
        "We’ve worked with Rishi Pathak, Arijit Singh (in session projects), and several emerging indie musicians defining India’s new-age sound culture.",
    },
    {
      question: "🏆 What are some famous works by Simply Music?",
      answer:
        "Our popular projects include 'Tujhpe Main Fida', 'Please Find Attached', 'Dil Dosti Dilemma', and 'Salesman of the Year' — blending powerful visuals with deep soundscapes.",
    },
    {
      question: "🎧 What services do you offer?",
      answer:
        "We provide music composition, sound design, podcast production, mixing, mastering, and full-scale sound branding — from concept to final track delivery.",
    },
    {
      question: "📍 Where is Simply Music India based?",
      answer:
        "We are based in Mumbai — the creative capital of India’s film and music industry, collaborating with artists worldwide.",
    },
  ];

  // 💬 Typing effect for answers
  useEffect(() => {
    if (activeQuestion === null) return;
    const text = messages[activeQuestion].answer;
    let i = 0;
    setDisplayedText("");
    const typing = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(i));
      i++;
      if (i >= text.length) clearInterval(typing);
    }, 20);
    return () => clearInterval(typing);
  }, [activeQuestion]);

  // 🖱️ Capture scroll only when hovered over chatbot
  useEffect(() => {
    const handleWheel = (e) => {
      if (isHovered && scrollRef.current) {
        e.stopPropagation();
        scrollRef.current.scrollTop += e.deltaY;
      }
    };
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [isHovered]);

  return (
    <>
      {/* 💬 Floating Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-6 z-[2000] w-14 h-14 rounded-full bg-gradient-to-br from-white via-gray-200 to-gray-400 text-black shadow-[0_4px_20px_rgba(255,255,255,0.3)] flex items-center justify-center hover:scale-110 transition-transform duration-300"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ rotate: 8 }}
      >
        {isOpen ? <X size={26} /> : <MessageCircle size={28} />}
      </motion.button>

      {/* 🧠 Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chatbox"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed bottom-[110px] right-6 w-[340px] sm:w-[360px] 
                       bg-gradient-to-b from-[#000000]/95 via-[#0a0a0a]/95 to-[#1a1a1a]/95 
                       border border-white/10 rounded-2xl 
                       shadow-[0_0_40px_rgba(200,200,200,0.3)]  /* ✅ grey glow instead of blue */
                       backdrop-blur-xl overflow-hidden z-[2001]"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-white/10 via-gray-300/10 to-white/10 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Music2 className="text-white" size={22} />
                <h3 className="font-semibold text-white text-sm tracking-wide">
                  Simply Music India Chatbot
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition"
              >
                <X size={18} />
              </button>
            </div>

            {/* Scrollable Body */}
            <div
              ref={scrollRef}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="max-h-[340px] overflow-y-auto px-4 py-4 space-y-4 custom-scrollbar"
              style={{ overscrollBehavior: "contain" }}
            >
              {messages.map((msg, i) => (
                <div key={i}>
                  {/* Question */}
                  <button
                    onClick={() => setActiveQuestion(i)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium tracking-wide transition border ${
                      activeQuestion === i
                        ? "bg-white/20 text-white border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.15)]"
                        : "bg-gradient-to-r from-white/5 to-gray-800 text-gray-200 border-white/10 hover:bg-white/10"
                    }`}
                  >
                    {msg.question}
                  </button>

                  {/* Typing Answer */}
                  <AnimatePresence>
                    {activeQuestion === i && (
                      <motion.div
                        key={`answer-${i}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="mt-2 ml-3 mr-1 bg-gradient-to-br from-white/5 via-gray-900/40 to-black/60 text-gray-300 px-3 py-2 rounded-lg text-sm leading-relaxed border border-white/10 shadow-[inset_0_0_10px_rgba(255,255,255,0.08)]"
                      >
                        {displayedText}
                        <span className="animate-pulse text-white">▌</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="px-4 py-2 text-xs text-gray-400 border-t border-white/10 text-center bg-black/20">
              💬 Powered by Simply Music India
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
