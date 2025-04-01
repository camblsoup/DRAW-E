// https://stackoverflow.com/questions/923885/capture-html-canvas-as-gif-jpg-png-pdf
// https://stackoverflow.com/questions/41957490/send-canvas-image-data-uint8clampedarray-to-flask-server-via-ajax

import { RefObject, useRef } from "react";
import $ from 'jquery';
interface Props {
    canvas: RefObject<HTMLCanvasElement | null>;
    //canvasRef: typeof useRef;
}
let isClicked = false;
export default function GetPromptBtn({canvas}:Props){
    let toolName = "send"
    function handleClick(){
        var dataURL = canvas.current.toDataURL(); //TODO ERROR HANDLING
        $.ajax({
            type: "POST",
            url: "/generate",
            data:{
                imageBase64: dataURL
              }

        }).done(function() {
            console.log('sent');
          });

        isClicked=true;

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
