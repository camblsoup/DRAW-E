import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import RenderCanvas from './canvas-components/RenderCanvas.tsx';


export default function App() {
  const [isCanvasOpen, setIsCanvasOpen] = useState(false); // state hook
  const [selectedTool, setSelectedTool] = useState("brush"); // state hook
  return <>
    <div>
        <img src="pencil.svg"></img>
        <RenderCanvas 
        isCanvasOpen = {isCanvasOpen} 
        setIsCanvasOpen={setIsCanvasOpen}
        selectedTool={selectedTool}
        setSelectedTool={setSelectedTool}> 

        </RenderCanvas>
      </div>
    </>

}

