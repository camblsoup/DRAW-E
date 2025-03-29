import ToolBtn from "./ToolBtn";

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
        'colour-select'
    ];
    

    return <>
        <section className="tools-bar">
            {toolTypes.map((tool)=> (<ToolBtn toolName={tool} setSelectedTool={setSelectedTool} key={tool}> </ToolBtn>))}
        </section>
    </>

}