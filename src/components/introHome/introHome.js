import React, { useState } from "react";
import arrow from "../../assets/images/right-arrow.svg";
import "./introHome.scss";

function IntroHome() {
  const [menu, setMenu] = useState("closed");
  return (
    <header className='sub'>
      <div className='deco'>
        <span>D</span>
      </div>
      <main>
        <div className='container'>
          <div className='text-box'>
            <h2>
              <span>
                <span>Design</span>
              </span>
              &nbsp;
              <span>
                <span>und</span>
              </span>
              &nbsp;
              <span>
                <span>Kommunikation</span>
              </span>
              &nbsp;
              <span>
                <span>für</span>
              </span>
              &nbsp;
              <span>
                <span>eine</span>
              </span>
              &nbsp;
              <span>
                <span>digitale</span>
              </span>
              &nbsp;
              <span>
                <span>Welt.</span>
              </span>
            </h2>
            <div className='sub'>
              <p>
                Wir sind ein Team aus kreativen Designern, Entwicklern und
                Marketing Experten aus dem Oberallgäu.
              </p>
              <a href='' className='btn'>
                <div className='icon'>
                  <img src={arrow} alt='Arrow' />
                </div>
                <div className='text'>Kontakt</div>
              </a>
            </div>
          </div>
        </div>
      </main>
    </header>
  );
}
export default IntroHome;
