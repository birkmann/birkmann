import React, { useState } from 'react'
import './teaser.scss'

function Teaser() {
  return (
    <div className='intro'>
      <div className='item brutscher'>
        <a href='https://brutscher-maschinenbau.de/' target='_blank'>
          <div className='details'>
            <h3>Brutscher Maschinenbau</h3>
            <p>Innovation, Tradition und Leidenschaft</p>
          </div>
          <div className='image'></div>
        </a>
      </div>
      <div className='item limitbikes'>
        <a href='http://limit-bikes.de/' target='_blank'>
          <div className='details'>
            <h3>Limit Bikes</h3>
            <p>Fahrradgeschäft in Burgberg</p>
          </div>
          <div className='image'></div>
        </a>
      </div>
      <div className='item fellliebe'>
        <a href='https://www.hundesalon-fellliebe.de/' target='_blank'>
          <div className='details'>
            <h3>FellLiebe</h3>
            <p>Der mobile Hundefriseur</p>
          </div>
          <div className='image'></div>
        </a>
      </div>
      <div className='item car'>
        <a href='https://www.reifen-allgäu.de/' target='_blank'>
          <div className='details'>
            <h3>Reifen Allgäu</h3>
            <p>Reifenservice in Immenstadt</p>
          </div>
          <div className='image'></div>
        </a>
      </div>
    </div>
  )
}
export default Teaser
