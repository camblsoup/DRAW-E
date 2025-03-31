import ToolBtn from "./ToolBtn";
import "./Tools.css";

interface Props{
    selectedTool: String;
    setSelectedTool: (tool: String) => String;
}

export default function ToolBar({selectedTool, setSelectedTool} : Props){

    const toolTypes = [
        'pencil',
        'eraser',
        'laso',
        'square',
        'dropper',
        'colour-select',
        'undo',
        'redo'
    ];
    
    return <>
        <div className="tools-bar">
            {toolTypes.map((selectedTool)=> (<ToolBtn toolName={selectedTool} setSelectedTool={setSelectedTool} key={selectedTool} /> ))}
        </div>
    </>

}