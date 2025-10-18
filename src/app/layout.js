import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ChatBot from "./components/ChatBot";
import LenisWrapper from "./components/LenisWrapper"; // ✅ new client wrapper

export const metadata = {
  title: "SimplyMusic India",
  description: "Creative music and production studio in India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-hidden bg-black text-white">
        <LenisWrapper>
          <Navbar />
          {children}
          <Footer />
          <ChatBot />
          <WhatsAppButton />
        </LenisWrapper>
      </body>
    </html>
  );
}
