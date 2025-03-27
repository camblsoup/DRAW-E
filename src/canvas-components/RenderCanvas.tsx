import './Canvas.css'
import {MouseEvent} from "react";
import {useState} from "react";
import OpenCanvasBtn from './OpenCanvasBtn.tsx';
import Canvas from './Canvas.tsx';

interface Props{
    isCanvasOpen: Boolean;
    setIsCanvasOpen: (canvasState: Boolean) => Boolean;
}

export default function RenderCanvas({isCanvasOpen, setIsCanvasOpen}: Props){

    return <>
        <div>
        {isCanvasOpen ? (<Canvas setIsCanvasOpen={setIsCanvasOpen}></Canvas>) // if the canvas is open ==> render the canvas else ==> render button to open canvas
            : (<OpenCanvasBtn setIsCanvasOpen={setIsCanvasOpen}> </OpenCanvasBtn>)} 

        </div>    
    </>
    

}