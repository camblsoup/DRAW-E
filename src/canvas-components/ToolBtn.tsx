// js import() documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import
import GetImg from "./GetImg";
import ToolImg from "./GetImg";

interface Props{
    toolName: String;
    setSelectedTool: (tool: String) => String;
}

export default function ToolBtn({toolName, setSelectedTool} : Props){
    const fileName = {toolName}+".svg";
    const imgPath = "../assets/"+fileName;
    let icon = "";
    let theImg = "";
    try{
        const icon = require(imgPath);
        //icon.then((img) => theImg=img);
        console.log(toolName+" Icon:");
        console.log(icon);
        
    }catch(e){
        console.log("img path is not called");
    }
    
    
    function handleClick(){
        setSelectedTool(toolName);
        console.log(toolName);
    }

    return <>
        <button onClick={handleClick}> <GetImg altText={toolName}></GetImg></button>
    </> 

}