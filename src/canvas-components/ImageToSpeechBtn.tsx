import { getImageDescription, textToSpeech } from "../GPT.tsx"

import './ImageToSpeechBtn.css'

interface Props {
    canvasRef: React.RefObject<HTMLCanvasElement>;
}

export default function ImageToSpeechBtn({ canvasRef }: Props) {
async function handleClick() {
        //testing boolean, false will request from OpenAI, true will return default image
        const istesting = true;
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