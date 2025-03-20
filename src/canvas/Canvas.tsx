import './Canvas.css'
import {Excalidraw} from "@excalidraw/excalidraw";


function Canvas({ id }: { id: string }) {
    function closeCanvas() {
        const canvas = document.getElementById('canvas');
        if (canvas)
            canvas.style.display = "none"
    }

    return (
        <>
            <div id={id}>
                <Excalidraw></Excalidraw>
                <div id='background' onClick={closeCanvas}></div>
            </div>
        </>
    )
}

export default Canvas