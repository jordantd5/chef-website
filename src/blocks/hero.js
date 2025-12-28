import React from "react";
import hero from "../imgs/hero.jpeg"

function Hero() {
  return (
    <div className="hero">
      <img src={hero} alt="hero" className="hero-img" />
      <h1 className="hero-title">Chef Alexandra Pawelic</h1>
    </div>
  );
}

export default Hero;
