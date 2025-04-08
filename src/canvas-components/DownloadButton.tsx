import downloadBtn from "../assets/download_button.svg";
import TooltipButton from "../ToolTip";
import "./DownloadButton.css";

interface Props {
    onClick: () => void;
    tooltipText?: string;
}

export default function DownloadButton({ onClick, tooltipText = "Download your image" }: Props) {
    return (
        <div className="download-button-container">
            <TooltipButton onClick={onClick} tooltip={tooltipText}>
                <img className="download-button-icon" src={downloadBtn} alt="Download" />
            </TooltipButton>
        </div>
    );
}