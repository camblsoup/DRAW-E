import OpenAI from "openai"
import {ImageGenerateParams} from "openai/resources/images";

const apiUrl = "https://drawe-backend.onrender.com"

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPEN_API_KEY,
    dangerouslyAllowBrowser: true
});

const prompt: ImageGenerateParams = {
    model: "dall-e-2",
    n: 1,
    size: "256x256",
    prompt: "A balloon"
}



export async function generateImage(prompt: string, testing: boolean) {
    if (testing) {
        console.log("Testing image generation with backend");
        const testResponse = { image: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Test_card.png" };
        console.log(testResponse);
        return testResponse;
    }

    try {
        const response = await fetch(`${apiUrl}/generate?prompt=${encodeURIComponent(prompt)}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
            },
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("generateImage error:", errorText);
            throw new Error(`Failed to generate image: ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Image generated successfully:", data);
        return data;
    } catch (error) {
        console.error("generateImage fetch error:", error);
        throw error;
    }
}



//First input is the image url to be described
//Second is the testing boolean, True indicates testing
/*export async function getImageDescription(imageBlob: Blob, testing: boolean) {
    // testing mode
    if (testing) {
        console.log("Testing image describing with backend");
        return "describeImage testing complete";
    }
    console.log("Describing image with backend")
    const formData = new FormData();
    formData.append("image", imageBlob, "image.png");
    console.log(formData)
    return new Promise((resolve, reject) => {
        $.ajax({
            url: apiUrl + "/describe",
            type: "POST",
            data: formData,
            processData: false, // Important: Prevent jQuery from processing FormData
            contentType: false, // Important: Let the browser set the content type
            success: function(response) {
                console.log("Image described successfully:", response);
                resolve(response);
            },
            error: function(xhr, status, error){
                console.error("describedImage error:", error);
                reject(error);
            }
        });
    });
}*/

export async function getImageDescription(imageBlob: Blob, testing: boolean) {
    if (testing) {
        console.log("Testing image describing with backend");
        return "describeImage testing complete";
    }

    console.log("Describing image with backend");

    const formData = new FormData();
    formData.append("image", imageBlob, "image.png");

    try {
        const response = await fetch(`${apiUrl}/describe`, {
            method: "POST",
            body: formData,
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("describeImage error:", errorText);
            throw new Error(`Failed to describe image: ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Image described successfully:", data);
        return data;
    } catch (error) {
        console.error("describeImage fetch error:", error);
        throw error;
    }
}


export async function editImage(imageBlob: Blob, prompt: string, testing: boolean) {
    if (testing) {
        console.log("Testing image editing with backend");
        return "editImage testing complete";
    }

    const formData = new FormData();
    formData.append("image", imageBlob, "image.png");
    formData.append("prompt", prompt);

    try {
        const response = await fetch(`${apiUrl}/edit`, {
            method: "POST",
            body: formData,
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("editImage error:", errorText);
            throw new Error(`Failed to edit image: ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Image edited successfully:", data);
        return data;
    } catch (error) {
        console.error("editImage fetch error:", error);
        throw error;
    }
}

