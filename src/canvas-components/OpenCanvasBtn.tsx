interface Props{
    setIsCanvasOpen: (canvasState: Boolean) => Boolean;
}

export default function OpenCanvasBtn({setIsCanvasOpen}: Props){

    function handleClick(){
        setIsCanvasOpen(true);
    }

    return (<button onClick={handleClick}> NEW CANVAS </button>);
}

