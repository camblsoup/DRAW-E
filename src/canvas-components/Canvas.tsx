import ExitCanvasBtn from "./ExitCanvasBtn";
import"./Canvas.css";
import { createContext, useEffect, useState } from "react";
import { useRef } from "react";
// Source: https://www.youtube.com/watch?v=y84tBZo8GFo
// soruce: https://stackoverflow.com/questions/64625367/is-there-a-way-to-use-canvas-to-draw-something-on-the-click-of-a-button-with-rea
// Ref Documentation https://react.dev/reference/react/useRef
interface Props{
    setIsCanvasOpen: (canvasState: Boolean) => Boolean;
    selectedTool: String;
    //canvasRef: typeof useRef;
}

export default function Canvas({setIsCanvasOpen, selectedTool}: Props){
    //let isDrawing = false;

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const isDrawing  = useRef(false);
    //REQUIRED?!? WTF!
    console.log(canvasRef);
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        ctx.lineWidth = 2;
        ctx.lineCap = "round"; // pen style 
        ctx.strokeStyle = "blue"; // 

        window.addEventListener( "load", ()=> {
            try{
            canvas ? canvas.width = canvas?.offsetWidth : console.log("canvs is null");
                canvas ? canvas.height=canvas?.offsetHeight : console.log("canvas is null");

            }catch(e){
                console.log(e);
            }
        });

        const startDraw = (e: MouseEvent) => {
            isDrawing.current = true;
            ctx.beginPath();
            ctx.moveTo(e.offsetX,e.offsetY);
        }

        const drawing = (e: MouseEvent) => {
            if (!isDrawing.current){
                console.log("Mouse not clicked")
                return;
            }
            console.log("drawing request");
            ctx.lineTo(e.offsetX,e.offsetY); //: console.log("context is NULL (1)");
            ctx.stroke();// : console.log("context is NULL (2)");
        }

        const stopDraw = () => {
            isDrawing.current = false;
            ctx.beginPath();
        }

        canvas.addEventListener("mousedown",startDraw);
        canvas.addEventListener("mousemove",drawing);
        canvas.addEventListener("mouseup", stopDraw);
        canvas.addEventListener("mouseout", stopDraw);

        return () => {
            canvas.removeEventListener("mousedown",startDraw);
            canvas.removeEventListener("mousemove",drawing);
            canvas.removeEventListener("mouseup", stopDraw);
            canvas.removeEventListener("mouseout", stopDraw);
        }
    }, [isDrawing]);

    return <>
        <section className= "container">
            
            <canvas ref={canvasRef} className="drawing-canvas"></canvas>
            <ExitCanvasBtn setIsCanvasOpen={setIsCanvasOpen}> </ExitCanvasBtn>
        </section>
    </>
}