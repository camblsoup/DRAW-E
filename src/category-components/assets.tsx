{/* STYLESHEET */ }
import './categories.css'

{/* IMAGES */ }
import expandArrow from '../assets/arrow.svg'

function Assets() {
  function expandAssets() {
    const filters = document.getElementById("assets_ID");
    if (!filters) return;
    if (filters.style.display === "none") filters.style.display = 'block';
    else filters.style.display = "none";
  }
  return (
    <>
      <div className='tab-container'>
        <div className='tab' onClick={expandAssets}>
          Assets
          <img id='expandBtn' src={expandArrow} />
        </div>
      </div>
      <div id='assets_ID'>
        You've found a category that's still under construction. Come back later!
      </div>
    </>
  );
}

export default Assets