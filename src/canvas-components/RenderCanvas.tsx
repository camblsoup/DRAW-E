import { useRef } from "react";

{/* STYLESHEETS */ }
import './Canvas.css'
import './RenderCanvas.css'


{/* COMPONENTS */ }
import OpenCanvasBtn from './OpenCanvasBtn.tsx';
import Canvas from './Canvas.tsx';
import ToolBar from './ToolBar.tsx';
import ExitCanvasBtn from "./ExitCanvasBtn";
import ToolBtn from './ToolBtn.tsx';
import GetPromptBtn from './GetPromptBtn.tsx';

{/* IMAGES */ }
import importBtn from "../assets/plus-button.svg";
import downloadBtn from "../assets/download_button.svg";
import searchIcon from "../assets/magnifying_glass.svg";

interface Props {
    isCanvasOpen: Boolean;
    setIsCanvasOpen: (canvasState: Boolean) => Boolean;
    selectedTool: String;
    setSelectedTool: (tool: String) => String;
}

export default function RenderCanvas({ isCanvasOpen, setIsCanvasOpen, selectedTool, setSelectedTool }: Props) {

    const canvasRef = useRef(null);

    return <>
        <div>
            {isCanvasOpen ? (
                <>
                    <div className="popup-container">
                        <div className='tool-bar-container'>
                            <div className='tool-bar'>
                                <ToolBar setSelectedTool={setSelectedTool} />
                            </div>
                        </div>

                        {/* SECTION 2: CANVAS SECTION */}
                        <div className='middle-section-container'>
                            {/* THE CANVAS */}
                            <div className='canvas'>
                                <Canvas setIsCanvasOpen={setIsCanvasOpen} canvasRef={canvasRef} selectedTool={selectedTool} />
                            </div>
                            {/* PROMPT BOX SECTION */}
                            <div className='bottom-section-container'>
                                {/* PROMPT BOX */}
                                <div className='prompt-box-container'>
                                    {/* IMPORT IMAGE BUTTON */}
                                    <div import-button-container>
                                        <img className='import-button' src={importBtn} />
                                    </div>
                                    <textarea className='prompt-box-text' placeholder="Ask anything" />
                                </div>
                                {/* SAVE BUTTON */}
                                <div className='save-button-container'>
                                    <img className='save-button' src={downloadBtn} />
                                </div>
                            </div>
                        </div>
                        {/* SECTION 3: THE RIGHT SIDE STUFF */}
                        <div className="assets-tab">
                            <div className='search-bar-container'>
                                <div className='search-bar'>
                                    <img style={{ height: '20px', width: '20px', paddingRight: '10px' }} src={searchIcon} />
                                    Search Categories

                                </div>
                            </div>
                        </div>
                    </div>
                </>)
                : (
                    // OPEN CANVAS BUTTON
                    <OpenCanvasBtn setIsCanvasOpen={setIsCanvasOpen} />
                )}
            {/* CLOSE CANVAS BUTTON */}
            <div className='exit-canvas-button'>
                <GetPromptBtn canvas={canvasRef.current} />
                <ExitCanvasBtn setIsCanvasOpen={setIsCanvasOpen} />
            </div>
        </div>
    </>


}