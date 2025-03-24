import './App.css'
import {generateImage} from "./GPT/GPT.ts"

function App() {
    function getImage() {
        const image = document.getElementById("generated-image") as HTMLImageElement;

        if (!image)
            return;

        image.src = "/Loading_icon.gif";
        image.alt = "Generating image..."

        generateImage("A red balloon").then((value) => {
            if (value?.url) {
                image.src = value.url;
                image.alt = "User generated image";
            }
            else {
                throw new Error("Error generating image")
            }
        }).catch((error) => {
            console.error(error)
            image.src = "/error-image-generic.png"
            image.alt = "Could not generate image"
        })
    }

  return (
    <>
        <button onClick={getImage}>generate image</button>
        <img id={"generated-image"} alt={"Generated image placeholder"}/>
    </>
  )
}

export default App
