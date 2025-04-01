// https://stackoverflow.com/questions/923885/capture-html-canvas-as-gif-jpg-png-pdf


import { useRef } from "react";

interface Props {
    canvas: HTMLCanvasElement;
    //canvasRef: typeof useRef;
}
let isClicked = false;
export default function GetPromptBtn({canvas}:Props){
    let toolName = "send"
    isClicked=true;
    function handleClick(){
        const img = canvas.toDataURL('image/png');
        
       // document.getElementById('AI-img').src = img;
    //var dataURL = canvas.toDataURL("image/png");

    }
    
    return <>
        {isClicked?(
                <img src = {canvas.toDataURL('image/png')}> </img>
            ):(
                <button onClick={handleClick}>
                    generate image
                </button>
            )
        }

    </>
    
}
