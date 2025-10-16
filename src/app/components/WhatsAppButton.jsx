"use client";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa"; // npm install react-icons

export default function WhatsAppButton() {
  const whatsappNumber = "918056123297"; // ✅ Without '+' for URL

  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[2000] flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_4px_15px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform duration-300 ease-in-out"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ rotate: 10 }}
    >
      <FaWhatsapp size={30} />
    </motion.a>
  );
}
