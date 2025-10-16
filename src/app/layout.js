import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import WhatsAppButton from "./components/WhatsAppButton";
import ChatBot from "./components/ChatBot";

export const metadata = {
  title: "SimplyMusic India",
  description: "Creative music and production studio in India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll />
        <Navbar />
        {children}
        <Footer />
        <ChatBot />
        <WhatsAppButton />
      </body>
    </html>
  );
}
