"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, MapPin, Send } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ContactUs() {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-card", {
        opacity: 0,
        y: 80,
        duration: 1,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-black text-white overflow-hidden py-24 px-6 md:px-16"
    >
      {/* Header */}
      <h2 className="text-center text-5xl md:text-6xl font-extrabold text-accent mb-20 tracking-wide">
        Contact Us
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 contact-card">
        {/* Left: Info */}
        <div className="space-y-8 flex flex-col justify-center">
          <h3 className="text-4xl font-bold text-accent tracking-wide">
            Let’s Connect
          </h3>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Whether you’re an artist, filmmaker, or brand, Simply Music India is
            here to bring your ideas to life through sound, rhythm, and vision.
            Reach out to collaborate, record, or discuss your next project.
          </p>

          <div className="space-y-4 text-gray-300 text-lg">
            <p className="flex items-center gap-3">
              <Phone size={24} className="text-accent" /> +91 8056123297
            </p>
            <p className="flex items-center gap-3">
              <Mail size={24} className="text-accent" /> simplymusicindia@gmail.com
            </p>
            <p className="flex items-center gap-3">
              <MapPin size={24} className="text-accent" /> 14, Ground Floor, Janki Center,
Off Veera Desai Road, Andheri West,
Mumbai, Maharashtra - 400053
            </p>
          </div>
        </div>

        {/* Right: Form */}
        <form
          onSubmit={handleSubmit}
          className="contact-card bg-black/40 border border-accent/30 rounded-2xl p-10 backdrop-blur-sm shadow-[0_0_50px_rgba(249,200,14,0.15)]"
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-base text-gray-400 mb-2">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-[#111] border border-gray-700 rounded-lg px-5 py-4 text-lg text-white focus:outline-none focus:border-accent transition-all"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-base text-gray-400 mb-2">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-[#111] border border-gray-700 rounded-lg px-5 py-4 text-lg text-white focus:outline-none focus:border-accent transition-all"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-base text-gray-400 mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full bg-[#111] border border-gray-700 rounded-lg px-5 py-4 text-lg text-white focus:outline-none focus:border-accent transition-all resize-none"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-accent/20 text-accent border border-accent/50 rounded-full py-3 text-lg font-semibold hover:bg-accent hover:text-black transition-all duration-300"
          >
            <Send size={20} />
            {submitted ? "Message Sent ✅" : "Send Message"}
          </button>
        </form>
      </div>

      {/* Google Map Embed */}
      <div className="mt-24 max-w-6xl mx-auto contact-card">
        <h3 className="text-3xl font-bold text-accent mb-6 text-center md:text-left">
          Visit Our Studio
        </h3>

        {/* Clickable Map */}
        <div
          className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-accent/30 shadow-[0_0_50px_rgba(249,200,14,0.1)] cursor-pointer"
          onClick={() =>
            window.open(
              "https://www.google.com/maps/place/Janki+Centre/@19.1323012,72.8341047,19z/data=!3m1!5s0x3be7b623b477a7ef:0x517d727799516b2!4m14!1m7!3m6!1s0x3be7b71e718160cf:0x761686140bcd50f4!2sJanki+Centre!8m2!3d19.1322999!4d72.8347484!16s%2Fg%2F11j9cf3cjf!3m5!1s0x3be7b71e718160cf:0x761686140bcd50f4!8m2!3d19.1322999!4d72.8347484!16s%2Fg%2F11j9cf3cjf?entry=ttu&g_ep=EgoyMDI1MTAxMy4wIKXMDSoASAFQAw%3D%3D",
              "_blank"
            )
          }
        >
          <iframe
            title="Simply Music Studio Location"
            src="https://www.google.com/maps/place/Andheri+Industrial+Estate+Mumbai/@19.1323041,72.8325832,17z/data=!3m1!5s0x3be7c71367ddad41:0xfdec8d5ff2a26495!4m14!1m7!3m6!1s0x3be7b71e718160cf:0x761686140bcd50f4!2sJanki+Centre!8m2!3d19.1322999!4d72.8347484!16s%2Fg%2F11j9cf3cjf!3m5!1s0x3be7b6241b63f163:0x89311658f60a37ae!8m2!3d19.132877!4d72.835446!16s%2Fg%2F1tj7tvrd?entry=ttu&g_ep=EgoyMDI1MTAxMy4wIKXMDSoASAFQAw%3D%3D"
            className="absolute inset-0 w-full h-full"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-all duration-300"></div>
        </div>
      </div>

      {/* Accent Line Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-accent/30 blur-[1px]" />
    </section>
  );
}
