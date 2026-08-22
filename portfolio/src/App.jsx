import Stairs from "./components/Stairs";
import Background from "./components/Background";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Background />
      <Stairs />
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <Stats />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
