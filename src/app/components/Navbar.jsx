"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const links = ["home", "services", "team", "projects", "contact"];

  // Scroll state
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll
  const handleClick = (link) => {
    const section = document.querySelector(`#${link}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActive(link);
      setMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-3 left-1/2 -translate-x-1/2 w-[88%] max-w-5xl z-[1000]
      transition-all duration-500 rounded-full shadow-[0_6px_25px_rgba(0,0,0,0.08)] border border-gray-200
      ${scrolled ? "scale-[0.97] bg-white/90 backdrop-blur-md" : "bg-gradient-to-r from-white via-[#f8f8f8] to-[#ededed]"}`}
    >
      <div className="flex items-center justify-between px-4 md:px-6 py-2 md:py-3">
        {/* Logo */}
        <div
          onClick={() => handleClick("home")}
          className="flex items-center gap-2 cursor-pointer select-none"
        >
          <img
            src="/logo/logo.png"
            alt="Simply Music Logo"
            className="w-20 h-20 md:w-12 md:h-12 object-contain"
          />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-[15px] font-bold tracking-wide text-black/70">
          {links.map((link) => (
            <li
              key={link}
              className="relative group cursor-pointer uppercase"
              onClick={() => handleClick(link)}
            >
              <span
                className={`transition-colors ${
                  active === link ? "text-black" : "group-hover:text-black/90"
                }`}
              >
                {link}
              </span>
              <span
                className={`absolute left-0 bottom-[-5px] h-[1.5px] rounded-full bg-black transition-all duration-500 ${
                  active === link ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-black/80 hover:text-black transition"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`absolute left-0 top-full w-full rounded-3xl overflow-hidden transition-all duration-500 ease-in-out shadow-[0_10px_25px_rgba(0,0,0,0.1)]
        ${menuOpen ? "max-h-[260px] opacity-100 bg-white/90 backdrop-blur-lg" : "max-h-0 opacity-0"}`}
      >
        <div className="flex flex-col items-center py-6 space-y-4 font-medium uppercase text-black/70 tracking-wide">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => handleClick(link)}
              className={`hover:text-black transition-colors ${
                active === link ? "text-black font-semibold" : ""
              }`}
            >
              {link}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
