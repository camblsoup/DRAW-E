import OpenAI from "openai"
import {ImageGenerateParams} from "openai/resources/images";

const apiUrl = "https://drawe-backend.onrender.com"

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPEN_API_KEY,
    dangerouslyAllowBrowser: true
});

//depreciated testing image
/*const prompt: ImageGenerateParams = {
    model: "dall-e-2",
    n: 1,
    size: "256x256",
    prompt: "A balloon"
}*/


//given a prompt, generate an image
//testing boolean, false will request from OpenAI, true will return default image
export async function generateImage(prompt: string, isTesting: boolean) {

    //check if testing, return default image
    if (isTesting) {
        console.log("Testing image generation with backend");
        const testResponse = { image: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Test_card.png" };
        console.log(testResponse);
        return testResponse;
    }

    //send request to backend that will make the request to OpenAi API
    try {
        //`${var}some text is like old school concat var + sometext
        const response = await fetch(`${apiUrl}/generate?prompt=${encodeURIComponent(prompt)}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
            },
        });

        //if the backend or OpenAi API returns an error, throw an error
        if (!response.ok) {
            const errorText = await response.text();
            console.error("generateImage error:", errorText);
            throw new Error(`Failed to generate image: ${response.statusText}`);
        }

        //receive the image url from the backend
        const data = await response.json();
        console.log("Image generated successfully:", data);
        return data;
    } catch (error) {
        console.error("generateImage fetch error:", error);
        throw error;
    }
}

//Send an image to be described, will return a text description
//Accepts a imageBlob and a isTesting Boolean
export async function getImageDescription(imageBlob: Blob, isTesting: boolean) {

    //check if testing, return default image
    if (isTesting) {
        console.log("Testing image describing with backend");
        return "describeImage testing complete";
    }

    console.log("Describing image with backend");
    
    //build the request form
    const formData = new FormData();
    formData.append("image", imageBlob, "image.png");

    //send request to backend that will make the request to OpenAi API
    try {
        const response = await fetch(`${apiUrl}/describe`, {
            method: "POST",
            body: formData,
        });

        //if the backend or OpenAi API returns an error, throw an error
        if (!response.ok) {
            const errorText = await response.text();
            console.error("describeImage error:", errorText);
            throw new Error(`Failed to describe image: ${response.statusText}`);
        }

        //receive the text description from the backend
        const data = await response.json();
        console.log("Image described successfully:", data);
        return data;
    } catch (error) {
        console.error("describeImage fetch error:", error);
        throw error;
    }
}

//sends an image and a prompt to be edited, will return an image
//isTesting boolean, false will request from OpenAI, true will return default image
export async function editImage(imageBlob: Blob, prompt: string, isTesting: boolean) {
    //check if testing, return default image
    if (isTesting) {
        console.log("Testing image editing with backend");
        return "editImage testing complete";
    }

    //build the request form
    const formData = new FormData();
    formData.append("image", imageBlob, "image.png");
    formData.append("prompt", prompt);

    //send request to backend that will make the request to OpenAi API
    try {
        const response = await fetch(`${apiUrl}/edit`, {
            method: "POST",
            body: formData,
        });

        //if the backend or OpenAi API returns an error, throw an error
        if (!response.ok) {
            const errorText = await response.text();
            console.error("editImage error:", errorText);
            throw new Error(`Failed to edit image: ${response.statusText}`);
        }

        //receive the image url from the backend
        const data = await response.json();
        console.log("Image edited successfully:", data);
        return data;
    } catch (error) {
        console.error("editImage fetch error:", error);
        throw error;
    }
}

//sends an image to be converted to speech, will return an audio file (.mp3)
//accepts an imageBlob and a isTesting boolean
export async function textToSpeech(text: string, isTesting: boolean) {
    if (isTesting) {
        console.log("Testing image editing with backend");
        return "editImage testing complete";
    }

    //build the request form    
    const formData = new FormData();
    formData.append("text", text);

    //send request to backend that will make the request to OpenAi API    
    try {
        const response = await fetch(`${apiUrl}/edit`, {
            method: "GET",
            body: formData,
        });

        //if the backend or OpenAi API returns an error, throw an error        
        if (!response.ok) {
            const errorText = await response.text();
            console.error("textToSpeech error:", errorText);
            throw new Error(`Failed to convert t: ${response.statusText}`);
        }
        //receive the mp3 from the backend
        const data = await response.json();
        console.log("Text to speech converted successfully:", data);
        return data;
    } catch (error) {
        console.error("editImage fetch error:", error);
        throw error;
    }
}

//experimental function, probably won't work right away
export async function imageToSpeech(imageBlob: Blob, isTesting: boolean) {
    if (isTesting) {
        console.log("Testing imageToSpeech");
        return "imageToSpeech testing complete";
    }
    //returns a text description of the image
    const text = await getImageDescription(imageBlob, isTesting);
    //converts the text description to speech and returns the mp3, hopefully?
    return await textToSpeech(text, isTesting);
}

