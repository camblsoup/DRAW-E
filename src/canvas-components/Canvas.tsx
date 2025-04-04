import ExitCanvasBtn from "./ExitCanvasBtn";
import GetPromptBtn from "./GetPromptBtn";
import "./Canvas.css";
import { createContext, useEffect, useState } from "react";
import { useRef, RefObject } from "react";
// Source: https://www.youtube.com/watch?v=y84tBZo8GFo
// soruce: https://stackoverflow.com/questions/64625367/is-there-a-way-to-use-canvas-to-draw-something-on-the-click-of-a-button-with-rea
// Ref Documentation https://react.dev/reference/react/useRef
// https://medium.com/@ksshravan667/14-days-of-react-day-5-react-hooks-usestate-useref-useeffect-usememo-usecallback-8599a14c4e2b
interface Props {
    setIsCanvasOpen: (canvasState: Boolean) => Boolean;
    selectedTool: String;
    canvasRef: RefObject<HTMLCanvasElement | null>;
    imgContainerRef: RefObject<HTMLCanvasElement | null>;
}

export default function Canvas({setIsCanvasOpen, selectedTool, canvasRef,imgContainerRef }: Props) {
    //let isDrawing = false;
    
    const isDrawing = useRef(false);
    let prevMouseX : number 
    let prevMouseY:number;
    //REQUIRED?!? WTF!
    console.log(canvasRef);

    useEffect(() => {
        const canvas = canvasRef.current;
        const imgCanvas = canvasRef.current;
        if (!canvas) return;
        //CanvasRenderingContext2D Documentation: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
        canvas.width = window.innerWidth * 0.7; // 70% of the screen width
        canvas.height = window.innerHeight * 0.7; // 70% f the screen height 
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        //an attempt to force the canvas to 1024x1024, might not be needed - Eli
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, 1024, 1024);
        ctx.lineWidth = 2;
        ctx.lineCap = "round"; // pen style 
        ctx.strokeStyle = "blue"; // 


        window.addEventListener("load", () => {
            try {
                canvas ? canvas.width = canvas?.offsetWidth : console.log("canvas is null");
                canvas ? canvas.height = canvas?.offsetHeight : console.log("canvas is null");

            } catch (e) {
                console.log(e);
            }
        });

        const startDraw = (e: MouseEvent) => {
            prevMouseX = e.offsetX
            prevMouseY = e.offsetY
            isDrawing.current = true;
            ctx.beginPath();
            ctx.moveTo(e.offsetX, e.offsetY);
        }

        const drawing = (e: MouseEvent) => {
            if (!isDrawing.current) {
                console.log("Mouse not clicked")
                return;
            }
            console.log("drawing request");

            console.log(selectedTool);
            if (selectedTool == 'pencil') {
                ctx.lineTo(e.offsetX, e.offsetY); //: console.log("context is NULL (1)");
                ctx.stroke();// : console.log("context is NULL (2)");
                console.log("pencil active");

            } else if (selectedTool == 'eraser'){
                console.log("ERASER active");
                console.log("clearReact()");
                ctx.clearRect(e.offsetX, e.offsetY, 1, 1);
            } else if (selectedTool == 'square'){
                let sqr_size = 1;
                console.log("SQUARE  active");
                ctx.lineTo(e.offsetX, e.offsetY); //: console.log("context is NULL (1)");
                ctx.strokeRect(e.offsetX,e.offsetY,e.offsetX-prevMouseX,e.offsetY-prevMouseY);// : console.log("context is NULL (2)");
            }
        }

        const stopDraw = () => {
            isDrawing.current = false;
            ctx.beginPath();
        }

        canvas.addEventListener("mousedown", startDraw);
        canvas.addEventListener("mousemove", drawing);
        canvas.addEventListener("mouseup", stopDraw);
        canvas.addEventListener("mouseout", stopDraw);

        return () => {
            canvas.removeEventListener("mousedown", startDraw);
            canvas.removeEventListener("mousemove", drawing);
            canvas.removeEventListener("mouseup", stopDraw);
            canvas.removeEventListener("mouseout", stopDraw);
        }
    }, [isDrawing,selectedTool]);

    return <>
        <div id = "canvas-wrapper">
            <canvas ref={canvasRef} className="drawing-canvas" id="drawContainer" />
            
        </div>
    </>
}