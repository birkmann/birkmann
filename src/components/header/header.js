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
            <div className='nav-icon' onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div className='menu'>
          <div className='container'>
            <div className='col'>
              <nav className='main'>
                <a href=''>
                  <span>Projekte</span>
                </a>
                <a href=''>
                  <span>Agentur</span>
                </a>
                <a href=''>
                  <span>Leistungen</span>
                </a>
                <a href=''>
                  <span>Kontakt</span>
                </a>
              </nav>
            </div>
            <div className='col'>
              <div className='info'>
                <p>
                  <a href='mailto:mail@birkmann.design'>mail@birkmann.design</a>
                </p>
                <p>
                  <a href='tel:017643471769'>(+49)17643471769</a>
                </p>
                <p>Dekan-Ried-Straße 16</p>
                <p>87527 Sonthofen</p>
              </div>
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
