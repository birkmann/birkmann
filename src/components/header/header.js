import React, { useState } from "react";
import "./header.scss";

function Header() {
  const [menu, setMenu] = useState("closed");
  const toggleMenu = () => {
    if (menu === "closed") {
      document.querySelector("body").classList.add("open");
      setMenu("open");
    } else {
      document.querySelector("body").classList.remove("open");
      setMenu("closed");
    }
  };
  return (
    <div>
      <header className='main'>
        <div className='top'>
          <div className='container'>
            <a href='/' className='logo'>
              Birkmann
            </a>
            <div className='burger' onClick={toggleMenu}>
              <span></span>
            </div>
          </div>
        </div>
        <main>
          <div className='container'>
            <h2>Design und Kommunikation für eine digitale Welt.</h2>
          </div>
        </main>
      </header>
    </div>
  );
}
export default Header;
