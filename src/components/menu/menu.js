import React, { useState } from "react";
import "./menu.scss";

function Menu() {
  return (
    <div className='menu'>
      <div className='col'></div>
      <div className='col'></div>
      <div className='col'>
        <nav className='main'>
          <a href=''>Projekte</a>
          <a href=''>Agentur</a>
          <a href=''>Leistungen</a>
          <a href=''>Kontakt</a>
        </nav>
      </div>
    </div>
  );
}
export default Menu;
