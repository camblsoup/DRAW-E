import { useRef, useState } from "react";

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
import up_arrow from '../assets/up_arrow2.svg'


{/* IMAGES */ }
import importBtn from "../assets/plus-button.svg";
import downloadBtn from "../assets/download_button.svg";
import searchIcon from "../assets/magnifying_glass.svg";
import LandingPage from "../LandingPage.tsx";
import Sidebar from "../Sidebar.tsx";

interface RenderCanvasProps {
    setIsCanvasOpen: (isOpen: boolean) => void;
    isCanvasOpen: boolean;  // Add this if you need to use the state here
    
}

export default function RenderCanvas({ setIsCanvasOpen, isCanvasOpen }: RenderCanvasProps) {
    const [selectedTool, setSelectedTool] = useState("pencil"); // state hook
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    return <>
        <div>
            {setIsCanvasOpen ? (
                <>
                    <div className="opacity-fr" onClick={() => setIsCanvasOpen(false)}></div>
                    <div className="popup-container" onClick={(e) => e.stopPropagation()}>
                        <div className='tool-bar-container'>
                            <div className='tool-bar'>
                                <ToolBar setSelectedTool={setSelectedTool} />
                            </div>
                        </div>

                        {/* SECTION 2: CANVAS SECTION */}
                        <div className='middle-section-container'>
                            {/* THE CANVAS */}
                            <div className='canvas-container'>
                                <Canvas setIsCanvasOpen={setIsCanvasOpen} canvasRef={canvasRef} selectedTool={selectedTool} />
                            </div>
                            {/* PROMPT BOX SECTION */}
                            <div className='bottom-section-container'>
                                <div className='prompt-box-container-render'>
                                    <div import-button-container><img className='import-button' src={importBtn} /></div>
                                    <textarea className='prompt-box-text-render' placeholder="Ask anything" />
                                    <div><GetPromptBtn canvasRef={canvasRef} /></div>
                                </div>
                                {/* SAVE BUTTON */}
                                <div className='save-button-container'><img className='save-button' src={downloadBtn} /></div>
                            </div>
                        </div>
                        {/* SECTION 3: THE RIGHT SIDE STUFF */}
                        <div className="assets-tab"><div className='search-bar-container'>
                            <div className='search-bar-render'>
                                <img style={{ height: '20px', width: '20px', paddingRight: '10px' }} src={searchIcon} />
                                <textarea className='search-bar-text-render' placeholder="Search Categories"></textarea>
                            </div>
                        </div></div>
                    </div>
                </>)
                : (
                    // OPEN CANVAS BUTTON
                    <>
                        <Sidebar />
                        <LandingPage setIsCanvasOpen={setIsCanvasOpen} />
                    </>
                )}

        </div>
    </>
}