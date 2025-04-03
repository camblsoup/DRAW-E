{/* STYLESHEET */ }
import './categories.css'

{/* IMAGES */ }
import expandArrow from '../assets/arrow.svg'
import BackgroundBeach from '../assets/backgrounds/beach.png'
import BackgroundDesert from '../assets/backgrounds/dessert.png'
import BackgroundUnderwater from '../assets/backgrounds/fish.png'
import BackgroundForest from '../assets/backgrounds/forest.png'
import BackgroundSavannah from '../assets/backgrounds/savannah.png'
import BackgroundSnow from '../assets/backgrounds/snow.png'

function Backgrounds() {
  function expandBackground() {
    const item = document.getElementById("background_content_ID");
    if (!item) return;
    if (item.style.display === "none") item.style.display = 'block';
    else item.style.display = "none";
  }

  return (
    <>
      <div className='tab-container'>
        <div className='tab' onClick={expandBackground}>
          Backgrounds
          <img id='expandBtn' src={expandArrow} />
        </div>
      </div>
      {/* BACKGROUND CONTENTS */}
      <div id="background_content_ID" className='tab-expanded-container'>
        <div className='tab-content'>
          <div className='item'><img className='background-image' src={BackgroundBeach} /> </div>
          <div className='item'><img className='background-image' src={BackgroundDesert} /></div>
          <div className='item'><img className='background-image' src={BackgroundUnderwater} /></div>
          <div className='item'><img className='background-image' src={BackgroundForest} /></div>
          <div className='item'><img className='background-image' src={BackgroundSnow} /></div>
          <div className='item'><img className='background-image' src={BackgroundSavannah} /></div>
        </div>
      </div>
    </>
  );
}

export default Backgrounds