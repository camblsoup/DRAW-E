// https://stackoverflow.com/questions/923885/capture-html-canvas-as-gif-jpg-png-pdf
// https://stackoverflow.com/questions/41957490/send-canvas-image-data-uint8clampedarray-to-flask-server-via-ajax

import { useContext, RefObject, useRef, useEffect, useState } from "react";
import { editImage, getImageDescription } from "./../GPT.tsx"
import TextPromptBox from "./TextPromptBox.tsx";
import { ImageContext } from "./../ImageContext"

import up_arrow from '../assets/up_arrow2.svg'

import './GetPromptBtn.css'

interface Props {
    canvasRef: React.RefObject<HTMLCanvasElement>;
    promptText: string;
}
export default function GetPromptBtn({ canvasRef, promptText }: Props) {

    async function handleClick() {
        //testing boolean, false will request from OpenAI, true will return default image
        const istesting = false;
        
        const promptTextElement = document.querySelector('.prompt-box-text-render') as HTMLTextAreaElement;
        const prompt = promptTextElement?.value || "Do your best to make this image look like a painting";
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        if (!ctx){
            console.error("Canvas context is missing");
            return;
        }
        console.log("prompt:", prompt);
        canvas.toBlob(async (blob) => {
            if (!blob) {
                console.error("Failed to convert canvas to 'Blob'");
                return;
            }

            console.log("Sending PNG image to editImage");
            try {
                const response = await editImage(blob, prompt, istesting);
                console.log(response);
                //prints the image url to the console
                //console.log(response.image)
                if (response) {
                    const aiImg = document.getElementById("AI-img") as HTMLImageElement;
                    if (aiImg) aiImg.src = response.image;
                    
                } else {
                    console.error("No URL received from the server");
                }
            } catch (error) {
                console.error("editImage Error:", error);
            }
        }, "image/png");
    }

    return (
        <div className='generate-image-button-style' onClick={handleClick}>
            <img className='generate-image-button' src={up_arrow} />
        </div>
    );


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
/*
export default function GetPromptBtn({ canvasRef }: Props) {
    function handleClick() {
        const canvas = canvasRef.current;
        if (!canvas) {
            console.error("Canvas element is missing");
            return;
        }
        canvas.toBlob((blob) => {
            if (!blob) {
                console.error("Failed to convert canvas to Blob");
                return;
            }
            console.log("Sending PNG image to editImage");
            editImage(blob, "Can you enhance this part please?", true)
                .then(response => console.log("editImage Response:", response))
                .catch(error => console.error("editImage Error:", error));
>>>>>>> origin/popup
        }, "image/png");
    }

    return (
<<<<<<< HEAD
        <button onClick={handleClick} disabled={isClicked}>
            Generate Image
        </button>
    );


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
=======
        <div className='generate-image-button-style' onClick={handleClick}>
            <img className='generate-image-button' src={up_arrow} />
        </div>
    );
}*/