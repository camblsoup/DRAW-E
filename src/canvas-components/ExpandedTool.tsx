import ToolBtn from "./ToolBtn";


interface Props{
    setSelectedTool: (tool: String) => String;
    subTypes: []
}

export default function ExpandedTool({setSelectedTool, subTypes}: Props){
    
    if(subTypes){
        return<>
                {subTypes.map((subTool)=> (<ToolBtn isExpandable={true} toolName={subTool} setSelectedTool={setSelectedTool} key={subTool} /> ))}
        </>

    }else{
        return;
    }

}