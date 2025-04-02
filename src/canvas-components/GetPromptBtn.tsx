// https://stackoverflow.com/questions/923885/capture-html-canvas-as-gif-jpg-png-pdf
// https://stackoverflow.com/questions/41957490/send-canvas-image-data-uint8clampedarray-to-flask-server-via-ajax

import { createContext, RefObject, useRef } from "react";
import { editImage } from "./../GPT.tsx"


interface Props {
    canvas: HTMLCanvasElement;
    //canvasRef: typeof useRef;
}
let isClicked = false;
export default function GetPromptBtn({ canvas }: Props) {
    function handleClick() {
        //const ImageContext = createContext("image");
        var dataURL = canvas.toDataURL(); //TODO ERROR HANDLING
        console.log(editImage("Image stuff goes here","This is a test prompt", true))
        //console.log(editImage(dataURL,"Can you enhance this part please?",false))
        isClicked = true;

        //document.getElementById('AI-img').src = img;
        //var dataURL = canvas.toDataURL("image/png");

    }

    return <>
        <button onClick={handleClick}>
            generate image
        </button>
    </>

    // {isClicked?(
    //     <div>
    //         <img src = {canvas.toDataURL('image/png')}> </img>
    //     </div>
    //     ):(
    //         <div>
    //             <button onClick={handleClick}>
    //                 generate image
    //             </button>
    //         </div>
    //     )
    // }


}
