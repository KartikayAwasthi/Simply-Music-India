import Hero from "./components/Hero";
import Services from "./components/Services";
import Team from "./components/Team";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Team />
      <Projects />
      <Gallery />
      <Contact />
    </main>
  );
}
