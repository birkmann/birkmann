import React, { useState } from "react";
import "./teaser.scss";

function Teaser() {
  const showWork01 = () => {};
  return (
    <div className='intro'>
      <div className='item limitbikes'>
        <a href='#' onClick={showWork01}>
          <div className='details'>
            <h3>Limit Bikes</h3>
            <p>Fahrradgeschäft in Burgberg</p>
          </div>
          <div className='image'></div>
        </a>
      </div>
      <div className='item fellliebe'>
        <a href='https://hundesalon-fellliebe.de/' target='_blank'>
          <div className='details'>
            <h3>FellLiebe</h3>
            <p>Der mobile Hundefriseur</p>
          </div>
          <div className='image'></div>
        </a>
      </div>
      <div className='item test'>
        <a href='#'>
          <div className='details'>
            <h3>Kingpin Skateshop</h3>
            <p>Online Skateshop</p>
          </div>
          <div className='image'></div>
        </a>
      </div>
      <div className='item car'>
        <a href='https://reifen-pabst.de/' target='_blank'>
          <div className='details'>
            <h3>Reifen Allgäu</h3>
            <p>Reifenservice in Immenstadt</p>
          </div>
          <div className='image'></div>
        </a>
      </div>
    </div>
  );
}
export default Teaser;
