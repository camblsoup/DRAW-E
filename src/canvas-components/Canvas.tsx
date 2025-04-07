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
    canvasContent: ImageData | null;
    setCanvasContent: (canvasContent: ImageData | null) => void;
}

export default function Canvas({setIsCanvasOpen, selectedTool, canvasRef,imgContainerRef, canvasContent,setCanvasContent }: Props) {
    console.log("calling Canvas");
    //let isDrawing = false;
    const isDrawing = useRef(false);
    let prevMouseX : number; 
    let prevMouseY:number;
    //REQUIRED?!? WTF!
    console.log(canvasRef);
    let ctx = null;
    useEffect(() => {
        const canvas = canvasRef.current;
        
        if (!canvas){
            console.log("WARNING: Canvas is Null")
            return;
        }
        
        
        //CanvasRenderingContext2D Documentation: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
        var canvas_container = document.getElementById("canvas-wrapper") as HTMLDivElement;
        canvas.width = canvas_container.offsetWidth; // 70% of the screen width
        canvas.height = canvas_container.offsetHeight; // 70% f the screen height 
        if(!ctx){ 
            console.log("CREATING 2d ctx")
            ctx = canvas.getContext("2d");
        }
        if (!ctx){
            console.log("ERROR: 2d ctx IS NULL")
            return;
        }
        if(canvasContent){

            ctx.putImageData(canvasContent as ImageData ,0,0);
        }
        //an attempt to force the canvas to 1024x1024, might not be needed - Eli
        //ctx.fillStyle = "white";
        //ctx.fillRect(0, 0, 1024, 1024);
        ctx.lineWidth = 2;
        ctx.lineCap = "round"; // pen style 
        ctx.strokeStyle = "blue"; // 

        if(selectedTool=="undo") ctx.restore();

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
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(e.offsetX, e.offsetY);
        }

        const drawing = (e: MouseEvent) => {
            if (!isDrawing.current) {
                console.log("Mouse not clicked")
                return;
            }
            //console.log("drawing request");

            console.log(selectedTool);
            if (selectedTool == 'pencil') {
                ctx.lineTo(e.offsetX, e.offsetY); //: console.log("context is NULL (1)");
                ctx.stroke();// : console.log("context is NULL (2)");
                //console.log("pencil active");

            } else if (selectedTool == 'eraser'){
                //console.log("ERASER active");
                //console.log("clearReact()");
                ctx.clearRect(e.offsetX, e.offsetY, 1, 1);
                
            } else if (selectedTool == 'square'){
                let sqr_size = 1;
                //console.log("SQUARE  active");
                ctx.lineTo(e.offsetX, e.offsetY); //: console.log("context is NULL (1)");
                ctx.strokeRect(prevMouseX,prevMouseY,e.offsetX-prevMouseX,e.offsetY-prevMouseY);// : console.log("context is NULL (2)");
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
        window.Cache;
        setCanvasContent(ctx.getImageData(0, 0,canvas.height,canvas.width));
        //console.log("dataURL=" +ctx.canvas.toDataURL(1,1,canvas.height,canvas.width));
        ctx?.save();
        return () => {
            canvas.removeEventListener("mousedown", startDraw);
            canvas.removeEventListener("mousemove", drawing);
            canvas.removeEventListener("mouseup", stopDraw);
            canvas.removeEventListener("mouseout", stopDraw);
            
        }
    }, [isDrawing,selectedTool]);
    
    console.log("outsdie Effect ctxState=" +canvasContent);
    return <>
        <div id = "canvas-wrapper">
            <canvas ref={canvasRef} className="drawing-canvas" id="drawContainer"  value={null} /> 
        </div>
    </>
}