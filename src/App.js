import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import NavBar from "./components/NavBar";
import About from "./components/About";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import "./index.css"; // Import your global CSS file

function App() {
  // Initialize AOS (Animation on Scroll)
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Skill />
      <Contact />
    </div>
  );
}

export default App;
