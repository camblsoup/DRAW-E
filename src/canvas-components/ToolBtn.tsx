// js import() documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import
//popover documentation: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/popover
// toggle popover html: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/togglePopover

import GetImg from "./GetImg";
import ExpandedTool from "./ExpandedTool";
import { useRef, useEffect, useState } from "react"

interface Props {
    isExpandable: Boolean;
    toolName: String;
    setSelectedTool: (tool: String) => String;
}

export default function ToolBtn({isExpandable ,toolName, setSelectedTool }: Props) {
    const [isClicked, setIsClicked] = useState(false);
    let btnRef = useRef<HTMLButtonElement | null>(null);
    //button.hidePopover(); //helpppp
    //button?.classList.toggle(`popover-${toolName}`); //helpppp

    console.log(toolName)
    useEffect(() => {
        
            const button = btnRef.current;
            console.log("current Ref:" + button);
            if(isClicked){
            button?.classList.toggle(`popover-${toolName}`); //helpppp
        }
    }, [isClicked]);
    
    function handleClick(e: MouseEvent | HTMLButtonElement) {
        setIsClicked(true);
        setSelectedTool(toolName);
        console.log(toolName + " SET! ");

    }

    return <>
        <div className="hidden-tools-container">
            <button popoverTarget={`popover-${toolName}`}
                ref={btnRef}
                onClick={(e) => { handleClick(e); }}
                className={`tool-btn ${toolName}`}>
                <GetImg altText={toolName} />
            </button>
        </div>
        
    </>
}