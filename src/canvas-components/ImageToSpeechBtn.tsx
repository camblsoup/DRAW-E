import { imageToSpeech} from "../GPT.tsx"

import sound_icon from '../assets/ImageToSpeech.svg'

import './ImageToSpeechBtn.css'
import TooltipButton from "../ToolTip.tsx"

interface Props {
    canvasRef: React.RefObject<HTMLCanvasElement>;
}

export default function ImageToSpeechBtn({ canvasRef }: Props) {
async function handleClick() {
        //testing boolean, false will request from OpenAI, true will return default image
        const istesting = false;
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

            console.log("Sending PNG image to imageToSpeech");
            try {
                const response = await imageToSpeech(blob, istesting);
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
                console.error("textToSpeech Error:", error);
            }
            
        },);
    }
    return (
        <TooltipButton onClick={handleClick} tooltip="Click for audio description">
          <img className="image-to-speech-button" src={sound_icon} alt="Audio Description" />
        </TooltipButton>
      );
}