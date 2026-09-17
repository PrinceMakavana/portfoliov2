// import components
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Navbar from "./Layouts/Navbar";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Experience from "./components/Experience";
import Footer from "./Layouts/Footer";
import SectionGradient from "./components/SectionGradient";
const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
    });
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <SectionGradient from="#D5E3F1" to="#F5F9FD" />
      <Skills />
      <SectionGradient from="#F5F9FD" to="#B6CCF5" />
      <Projects />
      <SectionGradient from="#D5E3F1" to="#ffffff" />
      <Experience />
      <SectionGradient from="#ffffff" to="#B6CCF5" />
      <Testimonials />
      <SectionGradient from="#D5E3F1" to="#ffffff" />
      <Contact />
      <SectionGradient from="#ffffff" to="#B6CCF5" />
      <Footer />
    </div>
  );
};

export default App;
