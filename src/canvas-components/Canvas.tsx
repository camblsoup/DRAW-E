import ExitCanvasBtn from "./ExitCanvasBtn";
import"./Canvas.css";
import { createContext } from "react";
import { useRef } from "react";

interface Props{
    setIsCanvasOpen: (canvasState: Boolean) => Boolean;
}

export default function Canvas({setIsCanvasOpen}: Props){
    
    const canvas = document.querySelector("canvas"),
    ctx = canvas?.getContext("2d");
    window.addEventListener( "load", ()=> {
        try{
            canvas ? canvas.width = canvas?.offsetWidth : console.log("canvas is null");
            canvas ? canvas.height=canvas?.offsetHeight : console.log("canvas is null");

        }catch(e){

            console.log(e);
        }
    });

    const drawing = (e) => {
        console.log("drawing request");
        ctx ? ctx.lineTo(e.offsetX,e.offsetY) : console.log("context is NULL (1)");
        ctx ? ctx.stroke() : console.log("context is NULL (2)");
     }
     
     canvas? canvas.addEventListener("mousemove",drawing) : console.log("Canvas is NULL @ add event listener");;

    return <>
        <div className= "container">
            <section className = "drawing-board">
                <canvas color="white"> </canvas>
            </section>
            <ExitCanvasBtn setIsCanvasOpen={setIsCanvasOpen}> </ExitCanvasBtn>
        </div>
    </>
}