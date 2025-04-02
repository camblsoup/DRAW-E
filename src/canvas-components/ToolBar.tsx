
import ToolBtn from "./ToolBtn";
import "./Tools.css";
import ExpandedTool from "./ExpandedTool";
import { useState } from "react";


interface Props{
    selectedTool: String;
    setSelectedTool: (tool: String) => String;
}

export default function ToolBar({selectedTool, setSelectedTool} : Props){
    
    const toolTypes = [
        ['pencil',[]],
        ['eraser',[]],
        ['laso',['circle-laso']],
        ['square',['circle','triangle']],
        ['dropper',[]],
        ['colour-select',[]],
        ['undo',[]],
        ['redo',[]]
    ];

    //const [isExpanded, setIsExpanded] = useState(false); // state hook
    console.log(toolTypes);
    return <div className="tools-bar">
            {toolTypes.map((selectedTool)=> (
                    <>
                     <div className="tool-expand"> 
                        <ToolBtn toolName={selectedTool[0]} setSelectedTool={setSelectedTool} key={selectedTool[0]}/> 
                        <div className="hidden-tools">
                            <ExpandedTool setSelectedTool={setSelectedTool} subTypes={selectedTool[1]}></ExpandedTool>
                        </div>
                    </div> 
                    </>
                ))}
            
        </div>

}