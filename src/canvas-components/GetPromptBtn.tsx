// https://stackoverflow.com/questions/923885/capture-html-canvas-as-gif-jpg-png-pdf
// https://stackoverflow.com/questions/41957490/send-canvas-image-data-uint8clampedarray-to-flask-server-via-ajax

import { useContext, RefObject, useRef, useEffect, useState } from "react";
import { editImage, getImageDescription } from "./../GPT.tsx"
import { ImageContext } from "./../ImageContext"


interface Props {
    canvasRef: RefObject<HTMLCanvasElement | null>;
    //canvasRef: typeof useRef;
}
export default function GetPromptBtn({ canvasRef }: Props) {
    const [isClicked, setIsClicked] = useState(false);

    async function handleClick() {
        if(!canvasRef.current){
            console.error("Canvas element is missing");
            return;
        }
        setIsClicked(true);
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d")

        if (!ctx){
            console.error("Canvas context is missing");
            return;
        }

        canvas.toBlob(async (blob) => {
            if (!blob) {
                console.error("Failed to convert canvas to 'Blob'");
                return;
            }

            console.log("Sending PNG image to editImage");
            try {
                const response = await editImage(blob, "Do your best to make this image look like a painting", false);
                console.log(response);
                //prints the image url to the console
                console.log(response.image)
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
}