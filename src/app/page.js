import Hero from "./components/Hero";
import Services from "./components/Services";
import Team from "./components/Team";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import About from "./components/About";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Team />
      <Projects />
      <Gallery />
      <About /> 
      <Contact />
    </main>
  );
}
