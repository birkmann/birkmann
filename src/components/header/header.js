import React, { useState } from "react";
import arrow from "../../assets/images/right-arrow.svg";
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
        <div className='deco'>
          <span>D</span>
        </div>
        <div className='top'>
          <div className='container'>
            <a href='/' className='logo'>
              Birkmann
            </a>
            <div className='right'>
              <span className='lang'>
                <a href=''>EN</a>
              </span>
              <div className='nav-icon' onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
              </div>
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
                <span className='contact-links'>
                  <p>
                    <a href='mailto:mail@birkmann.design'>
                      mail@birkmann.design
                    </a>
                  </p>
                  <p>
                    <a href='tel:017643471769'>(+49)17643471769</a>
                  </p>
                </span>
                <span className='address'>
                  <p>Dekan-Ried-Straße 16</p>
                  <p>87527 Sonthofen</p>
                </span>
                <ul className='sm-links'>
                  <li>
                    <a href=''>
                      <svg width='19' height='19'>
                        <path d='M13.76-.007H5.24A5.258 5.258 0 0 0-.01 5.24v8.52a5.258 5.258 0 0 0 5.25 5.247h8.52a5.258 5.258 0 0 0 5.25-5.247V5.24a5.258 5.258 0 0 0-5.25-5.247zM17 14a2.683 2.683 0 0 1-3 3H5a2.683 2.683 0 0 1-3-3V5a2.683 2.683 0 0 1 3-3h9a2.683 2.683 0 0 1 3 3v9zM9.5 4.6a4.9 4.9 0 1 0 4.9 4.9 4.906 4.906 0 0 0-4.9-4.9zm0 8.111a3.212 3.212 0 1 1 3.21-3.212 3.215 3.215 0 0 1-3.21 3.213zm5.1-9.542a1.233 1.233 0 1 0 .88.362 1.245 1.245 0 0 0-.88-.361z'></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href='https://www.facebook.com/'>
                      <svg width='9' height='17' theme='black'>
                        <path d='M6 6V4a.942.942 0 0 1 1-1h1L7.88.012H5.63C3.76.012 2 1.242 2 3v3H0v3h2v8h4V9h2l1.01-3.153z'></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href='https://www.twitter.com/'>
                      <svg width='18' height='15' theme='black'>
                        <path d='M17.5.277a7.241 7.241 0 0 1-2.34.92 3.664 3.664 0 0 0-2.7-1.2 3.739 3.739 0 0 0-3.69 3.787 4.082 4.082 0 0 0 .09.863A10.427 10.427 0 0 1 1.25.689a3.921 3.921 0 0 0-.5 1.9A3.819 3.819 0 0 0 2.4 5.741a3.642 3.642 0 0 1-1.68-.475v.048a3.776 3.776 0 0 0 2.97 3.714 3.71 3.71 0 0 1-.98.133 3.587 3.587 0 0 1-.69-.069 3.71 3.71 0 0 0 3.45 2.631 7.32 7.32 0 0 1-4.59 1.62 7.732 7.732 0 0 1-.88-.051 10.252 10.252 0 0 0 5.66 1.7c6.79 0 10.51-5.772 10.51-10.777l-.02-.49A7.384 7.384 0 0 0 18 1.767a7.178 7.178 0 0 1-2.12.6A3.769 3.769 0 0 0 17.5.277z'></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href='https://www.linkedin.com/'>
                      <svg width='17' height='16'>
                        <path
                          data-name='LinkedIn'
                          d='M17.01 9.826v6.165H13.4v-5.755c0-1.447-.52-2.43-1.82-2.43a1.969 1.969 0 0 0-1.85 1.307 2.325 2.325 0 0 0-.13.872v6H6s.04-9.743 0-10.752h3.6v1.524a.072.072 0 0 1-.02.037h.02v-.037a3.6 3.6 0 0 1 3.26-1.776c2.37.005 4.15 1.541 4.15 4.845zM1.99.009a1.99 1.99 0 1 1 .05 3.978h-.02A1.99 1.99 0 1 1 1.99.009zM4.02 15.99H-.01v-11h4.03v11z'
                        ></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
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
                  <div className='text'>Hallo sagen! :)</div>
                </a>
              </div>
            </div>
          </div>
        </main>
      </header>
    </div>
  );
}
export default Header;
