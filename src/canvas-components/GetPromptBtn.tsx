// https://stackoverflow.com/questions/923885/capture-html-canvas-as-gif-jpg-png-pdf
// https://stackoverflow.com/questions/41957490/send-canvas-image-data-uint8clampedarray-to-flask-server-via-ajax

import { useContext, RefObject, useRef } from "react";
import { editImage } from "./../GPT.tsx"
import { ImageContext } from "./../ImageContext"


interface Props {
    canvas: HTMLCanvasElement;
    //canvasRef: typeof useRef;
}

export default function GetPromptBtn({ canvas }: Props) {
    function handleClick() {
        if (!canvas) {
            console.error("Canvas element is missing");
            return;
        }
        
        canvas.toBlob((blob) => {
            if (!blob) {
                console.error("Failed to convert canvas to the \'Blob\'");
                return;
            }

            console.log("Sending PNG image to editImage");
            //replace second 
            editImage(blob, "Can you enhance this part please?", true)
                .then(response => console.log("editImage Response:", response))
                .catch(error => console.error("editImage Error:", error));
        }, "image/png");

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
