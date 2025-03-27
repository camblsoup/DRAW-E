interface Props{
    setIsCanvasOpen: (canvasState: Boolean) => Boolean;
}

export default function ExitCanvasBtn({setIsCanvasOpen}: Props){

    function handleClick(){
        setIsCanvasOpen(false);
    }
    
    return (<button onClick={handleClick} text-align> EXIT CANVAS </button>);
}