
import ToolBtn from "./ToolBtn";
import "./Tools.css";
import ExpandedTool from "./ExpandedTool";
import { useState } from "react";


interface Props {
    selectedTool: String;
    setSelectedTool: (tool: String) => String;
}

export default function ToolBar({ selectedTool, setSelectedTool }: Props) {

    // [main tool type [tools, in, expanded, menu]] 
    // NOTE: THE NAMES MUST MATCH THE .svg FILE NAME
    const toolTypes = [
        ['pencil', ['brush']],
        ['eraser'],
        ['laso', ['circle-laso']],
        ['square', ['circle', 'triangle']],
        ['dropper'],
        ['colour-select'],
        ['undo'],
        ['redo']
    ];

    //const [isExpanded, setIsExpanded] = useState(false); // state hook
    console.log(toolTypes);
    return <div className="tools-bar">
        {toolTypes.map((theTool) => (
            <>
                <div className="tool-expand">
                    <ToolBtn toolName={theTool[0]} setSelectedTool={setSelectedTool} key={theTool[0]} />
                    {theTool[1] ? (<div className="hidden-tools" id={`popover-${theTool[0]}`} popover="auto">
                        <ExpandedTool setSelectedTool={setSelectedTool} subTypes={theTool[1]} />
                    </div>) :
                        <>
                        </>
                    }
                </div>
            </>
        ))}

    </div>

}