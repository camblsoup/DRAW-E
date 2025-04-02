// js import() documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import
import GetImg from "./GetImg";
import ExpandedTool from "./ExpandedTool";


interface Props {
    toolName: String;
    setSelectedTool: (tool: String) => String;
}

export default function ToolBtn({ toolName, setSelectedTool }: Props) {
    const fileName =  toolName  + ".svg";
    const imgPath = "../assets/" + fileName;

    console.log(toolName)
    function handleClick() {
        setSelectedTool(toolName);
        console.log(toolName + " SET! ");
    }

    return <>
        <button onClick={handleClick} className={`tool-btn ${toolName}`}>
            <GetImg altText={toolName} />
        </button>
    </>
}