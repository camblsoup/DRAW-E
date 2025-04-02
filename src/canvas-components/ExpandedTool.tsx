import ToolBtn from "./ToolBtn";


interface Props{
    setSelectedTool: (tool: String) => String;
    subTypes: []
}

export default function ExpandedTool({setSelectedTool, subTypes}: Props){

    return<>
            {subTypes.map((subTool)=> (<ToolBtn toolName={subTool} setSelectedTool={setSelectedTool} key={subTool} /> ))}
    </>

}