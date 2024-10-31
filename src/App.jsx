import Home from './pages/Home.jsx';
import Navbar from './pages/Navbar.jsx';
import About from './pages/About.jsx';
import { FaArrowUpLong } from "react-icons/fa6";
import { useState, useEffect } from "react";
import Path from './pages/Path.jsx';
import Skills from './pages/Skills.jsx';
import Project from './pages/Projects.jsx';
import Contacts from './pages/Contacts.jsx';
import Experience from './pages/Experience.jsx'
import Footer from './pages/Footer.jsx'

const App = () => {
  const [showScrollUp, setShowScrollUp] = useState(false);

  const handleScroll = () => {
    setShowScrollUp(window.scrollY > 100); // Tampilkan tombol arrow up setelah posisi 100px
  };

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="poppins-medium">
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <Path />
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Project />
      </div>
      <Experience />
      <Contacts />
      <Footer />

      {/* Button Arrow Up */}
      {showScrollUp && (
        <button
          className="fixed bottom-5 right-5 lg:bottom-7 lg:right-7 outline-none text-sky-600 transition"
          onClick={() => scrollToElement("home")}
        >
          <FaArrowUpLong className="text-3xl lg:text-5xl" />
        </button>
      )}
    </div>
  );
};

export default App;
