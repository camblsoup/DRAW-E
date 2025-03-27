import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import RenderCanvas from './canvas-components/RenderCanvas.tsx';

function initCanvas(){
  
  canvas.addEventListener("mousedown",startDraw);
  canvas.addEventListener("mousemove",drawing);
  canvas.addEventListener("mouseup", () => isDrawing=false);
}

export default function App() {
  const [isCanvasOpen, setIsCanvasOpen] = useState(false); // state hook
  return <>
    <div>
        <RenderCanvas isCanvasOpen = {isCanvasOpen} setIsCanvasOpen={setIsCanvasOpen}> </RenderCanvas>
      </div>
    </>

}

