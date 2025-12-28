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
    const heroNode = heroRef.current;
    const aboutNode = aboutRef.current;
    const servicesNode = servicesRef.current;
    const contactNode = contactRef.current;

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
    if (heroNode) observer.observe(heroNode);
    if (aboutNode) observer.observe(aboutNode);
    if (servicesNode) observer.observe(servicesNode);
    if (contactNode) observer.observe(contactNode);

    return () => {
      // Cleanup: unobserve all sections when component unmounts
      if (heroNode) observer.unobserve(heroNode);
      if (aboutNode) observer.unobserve(aboutNode);
      if (servicesNode) observer.unobserve(servicesNode);
      if (contactNode) observer.unobserve(contactNode);
      observer.disconnect();
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
