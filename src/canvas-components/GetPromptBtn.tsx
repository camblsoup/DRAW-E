// https://stackoverflow.com/questions/923885/capture-html-canvas-as-gif-jpg-png-pdf
// https://stackoverflow.com/questions/41957490/send-canvas-image-data-uint8clampedarray-to-flask-server-via-ajax

import { useContext, RefObject, useRef, useEffect, useState } from "react";
import { editImage } from "./../GPT.tsx"
import { ImageContext } from "./../ImageContext"

import up_arrow from '../assets/up_arrow2.svg'

import './GetPromptBtn.css'

interface Props {
    canvasRef: React.RefObject<HTMLCanvasElement>;
}

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
        }, "image/png");
    }

    return (
        <div className='generate-image-button-style' onClick={handleClick}>
            <img className='generate-image-button' src={up_arrow} />
        </div>
    );
}