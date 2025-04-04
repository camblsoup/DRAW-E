import { getImageDescription, textToSpeech } from "../GPT.tsx"

import './ImageToSpeechBtn.css'

interface Props {
    canvasRef: React.RefObject<HTMLCanvasElement>;
}