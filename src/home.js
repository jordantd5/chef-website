import React, {useEffect, useRef, useState} from "react";
import Nav from "./nav";
import Hero from "./blocks/hero";
import About from "./blocks/about";
import Contact from "./blocks/contact";
import Services from "./blocks/services";

function Home() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const [activeSection, setActiveSection] = useState(null);

  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    // Observe each section
    if (heroRef.current) observer.observe(heroRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (servicesRef.current) observer.observe(servicesRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    return () => {
      // Cleanup: unobserve all sections when component unmounts
      if (heroRef.current) observer.unobserve(heroRef.current);
      if (aboutRef.current) observer.unobserve(aboutRef.current);
      if (servicesRef.current) observer.unobserve(servicesRef.current);
      if (contactRef.current) observer.unobserve(contactRef.current);
    };
  }, []);

  return (
    <>
      <Nav activeSection={activeSection} />
      <div id="hero" ref={heroRef}>
        <Hero />
      </div>
      <div id="about" ref={aboutRef}>
        <About />
      </div>
      <div id="services" ref={servicesRef}>
        <Services />
      </div>
      {/* <Testimony /> */}
      <div id="contact" ref={contactRef}>
        <Contact />
      </div>
    </>
  );
}

export default Home;
