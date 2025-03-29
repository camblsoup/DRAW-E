import './Canvas.css'
import {MouseEvent} from "react";
import {useState} from "react";
import OpenCanvasBtn from './OpenCanvasBtn.tsx';
import Canvas from './Canvas.tsx';
import { useRef } from "react";
import ToolBar from './ToolBar.tsx';


interface Props{
    isCanvasOpen: Boolean;
    setIsCanvasOpen: (canvasState: Boolean) => Boolean;
    selectedTool: String;
    setSelectedTool: (tool: String) => String;
}

export default function RenderCanvas({isCanvasOpen, setIsCanvasOpen, selectedTool, setSelectedTool}: Props){

    const canvasRef = useRef(null);
    
    return <>
        <div>
        {isCanvasOpen ? (
            <>
            <section>
                <ToolBar setSelectedTool={setSelectedTool}>

                </ToolBar>
                
                <Canvas setIsCanvasOpen={setIsCanvasOpen} canvasRef={canvasRef} selectedTool={selectedTool}>
                
                </Canvas>
                
            </section>
            </>)
            : (
            <OpenCanvasBtn setIsCanvasOpen={setIsCanvasOpen}>
            </OpenCanvasBtn>)} 

        </div>    
    </>
    

}