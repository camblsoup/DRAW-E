import './App.css'
import Canvas from './canvas/Canvas'

function App() {

  function showCanvas() {
    let canvas = document.getElementById('canvas');
    if (canvas)
      canvas.style.display = "block";
  }

  return (
    <>
      <button onClick={showCanvas}>Open Canvas</button>
      <Canvas id={'canvas'}></Canvas>
    </>
  )
}

export default App
