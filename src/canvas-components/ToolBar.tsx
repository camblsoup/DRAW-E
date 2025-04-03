
import ToolBtn from "./ToolBtn";
import "./Tools.css";
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
        ['dropper'],
        ['colour-select'],
        ['undo'],
        ['redo']
    ];

    function expandTools(event) {
        const expansion = document.getElementById(`popover-${theTool[0]}`);

        expansion.style.display = "block";
        event.stopPropagation();

    }

    console.log(toolTypes);
    return (
        <div className="tools-bar">
            {/* TOOL ON THE TOOL BAR */}
            {toolTypes.map((theTool) => (
                <div key={theTool[0]} className="joe">
                    {/* TOOL ON THE TOOL BAR */}
                    <ToolBtn
                        isExpandable={true}
                        toolName={theTool[0]}
                        className="selected-tool"
                        setSelectedTool={setSelectedTool}
                    />

                    {/* HIDDEN PORTION */}
                    {theTool[1] ? (<div className="hidden-tools" id={`popover-${theTool[0]}`} >
                        < ExpandedTool popover="auto" setSelectedTool={setSelectedTool} subTypes={theTool[1]} />
                    </div>) :
                        null
                    }
                </div>
            ))}

        </div>
    );
}