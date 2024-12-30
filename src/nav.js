import React from "react";

function Nav() {
  function onClick(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="nav">
      <p onClick={() => onClick("hero")}>home</p>
      <p onClick={() => onClick("about")}>about</p>
      <p onClick={() => onClick("contact")}>contact</p>
    </div>
  );
}

export default Nav;
