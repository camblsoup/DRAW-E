// https://stackoverflow.com/questions/923885/capture-html-canvas-as-gif-jpg-png-pdf
// https://stackoverflow.com/questions/41957490/send-canvas-image-data-uint8clampedarray-to-flask-server-via-ajax

import { useContext, RefObject, useRef, useEffect, useState } from "react";
import { editImage, getImageDescription } from "./../GPT.tsx"
import TextPromptBox from "./TextPromptBox.tsx";

import up_arrow from '../assets/up_arrow2.svg'

import './GetPromptBtn.css'

//TODO
//Get prompt text from user and add it to the imageblob

interface Props {
    canvasRef: React.RefObject<HTMLCanvasElement>;
    promptText: string;
    setIsImgGenerated: (imgState : Boolean) =>Boolean; 
}
export default function GetPromptBtn({ canvasRef, promptText, setIsImgGenerated }: Props) {

    async function handleClick() {
        //testing boolean, false will request from OpenAI, true will return default image
        const isTesting = false;

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
                const response = await editImage(blob, prompt, isTesting);
                console.log(response);
                //prints the image url to the console
                //console.log(response.image)
                if (response) {
                    const aiImg = document.getElementById("AI-img") as HTMLImageElement;
                    const aiImgPopover = document.getElementById("AI-img-wrapper") as HTMLDivElement;
                    if (aiImg) {
                        aiImg.src = response.image;
                        aiImgPopover.togglePopover();
                        setIsImgGenerated(true);
                        
                    }
                    
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
}