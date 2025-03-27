import ExitCanvasBtn from "./ExitCanvasBtn";
import"./Canvas.css";
import { createContext } from "react";
import { useRef } from "react";
// Source: https://www.youtube.com/watch?v=y84tBZo8GFo
// soruce: https://stackoverflow.com/questions/64625367/is-there-a-way-to-use-canvas-to-draw-something-on-the-click-of-a-button-with-rea
// Ref Documentation https://react.dev/reference/react/useRef
interface Props{
    setIsCanvasOpen: (canvasState: Boolean) => Boolean;
    canvasRef: typeof useRef;
}

export default function Canvas({setIsCanvasOpen}: Props){
    let isDrawing = false;

    const canvas = document.querySelector("canvas"),
    ctx = canvas?.getContext("2d");
    const canvasRef = useRef(null);
    
    window.addEventListener( "load", ()=> {
        try{
            canvas ? canvas.width = canvas?.offsetWidth : console.log("canvs is null");
            canvas ? canvas.height=canvas?.offsetHeight : console.log("canvas is null");

        }catch(e){
            console.log(e);
        }
    });

    const startDraw = () => {
        isDrawing = true;
    }

    const drawing = (e) => {
        if (!isDrawing){
            console.log("Mouse not clicked")
            return;
        }
        console.log("drawing request");
        ctx ? ctx.lineTo(e.offsetX,e.offsetY) : console.log("context is NULL (1)");
        ctx ? ctx.stroke() : console.log("context is NULL (2)");
     }

    return <>
        <div className= "container">
            <ExitCanvasBtn setIsCanvasOpen={setIsCanvasOpen}> </ExitCanvasBtn>
        </div>
    </>
}