import React from "react";
import "./intro.scss";

function Intro() {
  return (
    <div>
      <div className='intro'>
        <div className='item fellliebe'>
          <a href='https://hundesalon-fellliebe.de/' target='_blank'>
            <div className='image'></div>
          </a>
        </div>
        <div className='item limitbikes'>
          <a href='http://shop.limit-bikes.de/' target='_blank'>
            <div className='image'></div>
          </a>
        </div>
        <div className='item feyerabend'>
          <div className='image'></div>
        </div>
      </div>
    </div>
  );
}
export default Intro;
