import React, {useEffect, useState} from "react";

function Nav({activeSection}) {
  const [active, setActive] = useState(activeSection);

  const sections = ["hero", "about", "services", "contact"];

  function onClick(id) {
    setActive(id)
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  useEffect(() => {
    setActive(activeSection);
  }, [activeSection])

  return (
    <div className="nav">
      {sections.map(section => <p className={active === section ? 'active' : ''} key={`nav-${section}`} onClick={() => onClick(section)}>{section}</p>)}
    </div>
  );
}

export default Nav;
