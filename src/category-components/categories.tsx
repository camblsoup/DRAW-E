{/* COMPONENTS */ }
import Filters from './filters.tsx'
import Backgrounds from './background.tsx'
import Assets from './assets.tsx'
import DragAndDrop from './dragndrop.tsx'

{/* STYLESHEET */ }
import './categories.css'

function categories() {
  return (
    <>
    <div className='categories-container'>
      <Filters />
      <Backgrounds />
      <Assets />
      <DragAndDrop />
    </div>
    </>
  );
}

export default categories