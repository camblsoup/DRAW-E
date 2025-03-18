import './Canvas.css'


function Canvas({ id }: { id: string }) {
    function closeCanvas() {
        let canvas = document.getElementById('canvas');
        if (canvas)
            canvas.style.display = "none"
    }

    return (
        <>
            <div id={id}>
                <div id='canvas-content'>
                    <p>This is a canvas</p>
                    <img src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg" alt="placeholder"></img>
                </div>
                <div id='background' onClick={closeCanvas}></div>
            </div>
        </>
    )
}

export default Canvas