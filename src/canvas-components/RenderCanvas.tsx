import './Canvas.css'
import { MouseEvent } from "react";
import { useState } from "react";
import OpenCanvasBtn from './OpenCanvasBtn.tsx';
import Canvas from './Canvas.tsx';
import { useRef } from "react";
import ToolBar from './ToolBar.tsx';

import ExitCanvasBtn from "./ExitCanvasBtn";

import './RenderCanvas.css'
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
                    {/* CANVAS POP-UP */}

                    <div className='container'>
                        {/* TOOLBAR SECTION */}
                        <div className='tool-bar-container'>
                            <ToolBar setSelectedTool={setSelectedTool} />
                        </div>

                        {/* CANVAS SECTION */}
                        <div className='middle-section-container'>
                            {/* THE CANVAS */}
                            <div>
                                <Canvas setIsCanvasOpen={setIsCanvasOpen} canvasRef={canvasRef} selectedTool={selectedTool} />
                            </div>
                            {/* PROMPT BOX SECTION */}
                            <div className='bottom-section-container'>
                                {/* PROMPT BOX */}
                                <div className='prompt-box-container'>
                                    <div>
                                    </div>
                                    <textarea className='prompt-box-text'/>
                                </div>
                                {/* SAVE BUTTON */}
                                <div className='save-button-container'>
                                    joe
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
                <ExitCanvasBtn setIsCanvasOpen={setIsCanvasOpen} />
            </div>
        </div>
    </>


}