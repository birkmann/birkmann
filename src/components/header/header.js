import React from "react";
import "./header.scss";

function Header() {
  return (
    <div>
      <header className='main'>
        <div className='top'>
          <div className='container'>
            <a href='/' className='logo'>
              Birkmann
            </a>
            <div className='hamburger'>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <main>
          <div className='container'>
            <h2>
              Wir machen Design und Kommunikation für das digitale Heute.
              Willkommen!
            </h2>
          </div>
        </main>
      </header>
    </div>
  );
}
export default Header;
