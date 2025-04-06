import ExitCanvasBtn from "./ExitCanvasBtn";
import GetPromptBtn from "./GetPromptBtn";
import "./Canvas.css";
import searchIcon from "../assets/imgNotFound.svg";
import { createContext, useEffect, useState } from "react";
import { useRef, RefObject } from "react";
// Source: https://www.youtube.com/watch?v=y84tBZo8GFo
// soruce: https://stackoverflow.com/questions/64625367/is-there-a-way-to-use-canvas-to-draw-something-on-the-click-of-a-button-with-rea
// Ref Documentation https://react.dev/reference/react/useRef
// https://medium.com/@ksshravan667/14-days-of-react-day-5-react-hooks-usestate-useref-useeffect-usememo-usecallback-8599a14c4e2b
interface Props {
    setIsImgGenerated: (canvasState: Boolean) => Boolean;
    isImgGenerated: Boolean;
    aiImgRef: RefObject<HTMLImageElement | null>;
}

export default function ImgAICanvas({setIsImgGenerated, isImgGenerated, aiImgRef }: Props) {
    //let isDrawing = false;    
    //REQUIRED?!? WTF!
    console.log(aiImgRef);

    useEffect(() => {
        //const img = aiImgRef.current;

        
        //if (!img) return;
        //CanvasRenderingContext2D Documentation: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
    


        // put AI img in the canvas
        //ctx.drawImage(img, 0, 0);

    }, [isImgGenerated]);

    return <>
        <div id= "AI-img-wrapper" popover="auto">
            <img src={searchIcon} ref={aiImgRef}  id="AI-img" />
        </div>
    </>
}