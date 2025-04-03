{/* LIBRARY */ }
import { useState } from 'react'

{/* STYLESHEET */ }
import './categories.css'

{/* IMAGES */ }
import expandArrow from '../assets/arrow.svg'
import BirdOriginal from '../assets/birdfilters/birdoriginal.png'
import BirdMonochromatic from '../assets/birdfilters/birdmono.png'
import BirdWarm from '../assets/birdfilters/birdwarm.png'
import BirdCold from '../assets/birdfilters/birdcold.png'
import BirdOldSchool from '../assets/birdfilters/birdoldschool.png'
import BirdHighContrast from '../assets/birdfilters/birdhighcontrast.png'


function Filters() {
  function expandFilters() {
    const filters = document.getElementById("filters_content_ID");
    if (!filters) return;
    if (filters.style.display === "none") filters.style.display = 'block';
    else filters.style.display = "none";
  }

  return (
    <>
      <div className='tab-container'>
        <div className='tab' onClick={expandFilters}>
          Filters
          <img id='expandBtn' src={expandArrow} />
        </div>
      </div>
      {/* FILTER CONTENTS */}
      <div id="filters_content_ID" className='tab-expanded-container'>
        <div className='tab-content'>
          <div className='item'><img className='bird-image' src={BirdOriginal} />Original</div>
          <div className='item'><img className='bird-image' src={BirdMonochromatic} />Monochromatic</div>
          <div className='item'><img className='bird-image' src={BirdWarm} />Warm</div>
          <div className='item'><img className='bird-image' src={BirdCold} />Cold</div>
          <div className='item'><img className='bird-image' src={BirdOldSchool} />Old School</div>
          <div className='item'><img className='bird-image' src={BirdHighContrast} />High Contrast</div>
        </div>
      </div>
    </>
  );
}

export default Filters