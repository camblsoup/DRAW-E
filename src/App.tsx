import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import RenderCanvas from './canvas-components/RenderCanvas.tsx';


export default function App() {
  const [isCanvasOpen, setIsCanvasOpen] = useState(false); // state hook
  return <>
    <div>
        <RenderCanvas isCanvasOpen = {isCanvasOpen} setIsCanvasOpen={setIsCanvasOpen}> </RenderCanvas>
      </div>
    </>

}

