import React, { useState } from "react";
import "./introProjects.scss";

function IntroProjects() {
  const [menu, setMenu] = useState("closed");
  return (
    <header className='sub'>
      <div className='deco'>
        <span>P</span>
      </div>
      <main>
        <div className='container'>
          <div className='text-box'>
            <h2>
              <span>
                <span>Ein</span>
              </span>
              &nbsp;
              <span>
                <span>Auszug</span>
              </span>
              &nbsp;
              <span>
                <span>unserer</span>
              </span>
              &nbsp;
              <span>
                <span>Arbeiten:</span>
              </span>
              &nbsp;
            </h2>
            <div className='sub'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                nulla molestiae, explicabo dolorem officia totam tenetur
                adipisci incidunt quas exercitationem.
              </p>
            </div>
          </div>
        </div>
      </main>
    </header>
  );
}
export default IntroProjects;
