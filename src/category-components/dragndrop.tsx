{/* STYLESHEET */ }
import './categories.css'

{/* IMAGES */ }
import expandArrow from '../assets/arrow.svg'

function DragAndDrop() {
  function expandDragAndDrop() {
    const filters = document.getElementById("draganddrop_ID");
    if (!filters) return;
    if (filters.style.display === "none") filters.style.display = 'block';
    else filters.style.display = "none";
  }
  return (
    <>
      <div className='tab-container'>
        <div className='tab' onClick={expandDragAndDrop}>
          Drag & Drop
          <img id='expandBtn' src={expandArrow} />
        </div>
      </div>
      <div id='draganddrop_ID'>
        You've found a category that's still under construction. Come back later!
      </div>
    </>
  );
}

export default DragAndDrop