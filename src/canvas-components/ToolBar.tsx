
import ToolBtn from "./ToolBtn";
import "./Tools.css";
import "./style/hiddenTools.css";

import ExpandedTool from "./ExpandedTool";
import { useState } from "react";


interface Props {
    selectedTool: String;
    setSelectedTool: (tool: String) => String;
}

export default function ToolBar({ selectedTool, setSelectedTool }: Props) {

    const [activeTool, setActiveTool] = useState<string | null>(null);
    const [hiddenTools, setHiddenTools] = useState(false);

    // [main tool type [tools, in, expanded, menu]] 
    // NOTE: THE NAMES MUST MATCH THE .svg FILE NAME
    const toolTypes = [
        ['pencil', ['brush']],
        ['eraser'],
        ['laso', ['circle-laso']],
        ['square', ['circle', 'triangle']],
        ["fill"],
        ['dropper'],
        ['colour-select',['red','orange','yellow','green','blue','pink','purple','black','grey','white']],
        ['undo'],
        ['redo']
    ];


    console.log(toolTypes);
    return( <>
        {/* TOOL ON THE TOOL BAR */}
        <div className='tool-bar'>
            <div className="tools-bar">
                {toolTypes.map((theTool) => (
                    <div className="tools-bar">
                        <div key={theTool[0]} className="joe">
                            {/* TOOL ON THE TOOL BAR */}
                            <ToolBtn
                                isExpandable={true}
                                toolName={theTool[0]}
                                className="selected-tool"
                                setSelectedTool={setSelectedTool}
                                />
                        </div>
                    </div>
                    ))}
                <div>
            </div>

            {toolTypes.map((theTool) => (
                
                <>
                    {/* HIDDEN PORTION */}
                    {theTool[1] ? (
                        <div className="tools-expand" id={`popover-${theTool[0]}`} popover="auto">
                            < ExpandedTool  className = "tools-expand" setSelectedTool={setSelectedTool} subTypes={theTool[1]} />
                        </div>
                    ) :
                    null
                }
                </>
            ))}
            </div>
        </div>
    </>
    );
}