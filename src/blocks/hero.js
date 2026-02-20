import React from "react";
import hero from "../imgs/hero.jpeg"
import useTypewriter from '../helpers/useTypewriter'

function Hero() {
  const heroText = useTypewriter("Chef Alexandra Pawelic", 100);

  return (
    <div className="hero">
      <img src={hero} alt="hero" className="hero-img" />
      <h1 className="hero-title">{heroText}</h1>
    </div>
  );
}

export default Hero;
