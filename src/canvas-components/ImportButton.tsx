import "./ImportButton.css";
import importBtn from "../assets/plus-button.svg";
import TooltipButton from "../ToolTip";

interface Props {
    canvasRef: React.RefObject<HTMLCanvasElement>;
    tooltipText?: string;
    onClick?: () => void;
}

export default function UploadButton({ canvasRef, tooltipText = "Import an Image" }: Props) {
    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (!file || !canvasRef.current) return;

        const reader = new FileReader();
        reader.onload = () => {
            const img = new Image();
            img.onload = () => {
                const ctx = canvasRef.current!.getContext('2d');
                if (ctx) {
                    ctx.clearRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);
                    ctx.drawImage(img, 0, 0, canvasRef.current!.width, canvasRef.current!.height);
                }
            };
            img.src = reader.result as string;
        };
        reader.readAsDataURL(file);
    }
    return (
        <div className="upload-button-container">
            <TooltipButton tooltip={tooltipText}>
                <label className="upload-label">
                    <img className="upload-button-icon" src={importBtn} alt="Upload" />
                    <input type="file" accept="image/*" onChange={handleFileChange} hidden />
                </label>
            </TooltipButton>
        </div>
    );
}