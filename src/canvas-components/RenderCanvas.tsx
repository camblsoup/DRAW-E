import './Canvas.css'
import {MouseEvent} from "react";
import {useState} from "react";
import OpenCanvasBtn from './OpenCanvasBtn.tsx';
import Canvas from './Canvas.tsx';
import { useRef } from "react";


interface Props{
    isCanvasOpen: Boolean;
    setIsCanvasOpen: (canvasState: Boolean) => Boolean;
}

export default function RenderCanvas({isCanvasOpen, setIsCanvasOpen}: Props){

    const canvasRef = useRef(null);
    
    return <>
        <div>
        {isCanvasOpen ? (
            <>
            <section className = "drawing-board">
            <canvas color="white" ref={canvasRef}> 

            </canvas>
            <Canvas setIsCanvasOpen={setIsCanvasOpen} canvasRef={canvasRef}>

            </Canvas>
            </section>
            </>)
            : (
            <OpenCanvasBtn setIsCanvasOpen={setIsCanvasOpen}>
            </OpenCanvasBtn>)} 

        </div>    
    </>
    

}