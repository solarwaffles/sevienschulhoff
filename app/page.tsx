import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Research from "./components/Research";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Research />
        <Experience />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </>
  );
}
