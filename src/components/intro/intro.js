import React from "react";
import "./intro.scss";

function Intro() {
  return (
    <div className='intro'>
      <div className='item fellliebe'>
        <a href='https://hundesalon-fellliebe.de/' target='_blank'>
          <div className='details'>
            <h3>Hundesalon FellLiebe</h3>
          </div>
          <div className='image'></div>
        </a>
      </div>
      <div className='item limitbikes'>
        <a href='http://shop.limit-bikes.de/' target='_blank'>
          <div className='details'>
            <h3>Limit Bikes Burgberg</h3>
          </div>
          <div className='image'></div>
        </a>
      </div>
      <div className='item car'>
        <a href=' https://reifen-pabst.de/' target='_blank'>
          <div className='details'>
            <h3>Reifen Allgäu</h3>
          </div>
          <div className='image'></div>
        </a>
      </div>
    </div>
  );
}
export default Intro;
