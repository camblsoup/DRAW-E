import OpenAI from "openai"
import {ImageGenerateParams} from "openai/resources/images";
import $ from "jquery";

const apiUrl = "http://localhost:5000/"

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
        console.log("Testing image generation with backend")
        return {url:"https://upload.wikimedia.org/wikipedia/commons/b/bf/Test_card.png"}
    }
    return new Promise((resolve, reject) => {
        $.ajax({
            url: apiUrl + "/generate",
            type: "GET",
            data: {"prompt":prompt},
            dataType: "json",
            success: function(response) {
                console.log("success", response);
                resolve(response);
            },
            error: function(xhr, status, error){
                console.error("error", error);
                reject(error);
            }
        })
    })
}



//First input is the image url to be described
//Second is the testing boolean, True indicates testing
export async function getImageDescription(imageBlob: Blob, testing: boolean) {
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
}


/*
    //if no image given
    if (!imageBlob) {
        console.log("No image url provided")
        return "No image url provided"
    }
    //build the response
    const response = await openai.chat.completions.create({
        model: "gpt-40-mini",
        messages: [{
            role: "user",
            content: [
                { type: "text", text: "Can you describe this image in detail?"},
                {
                    type: "image_url",
                    image_url: {url: imageBlob,}
                },
            ],

        }],
    });  
    //return response.choices[0].message.content;
    return generateImage(response.choice[0].message.content, false)
}
*/


export async function editImage(imageBlob: Blob, prompt: string, testing: boolean) {
    if (testing) {
        console.log("Testing image editing with backend");
        return "editImage testing complete";
    }

    const formData = new FormData();
    formData.append("image", imageBlob, "image.png");
    formData.append("prompt", prompt);
    console.log(formData)
    return new Promise((resolve, reject) => {
        $.ajax({
            url: apiUrl + "/edit",
            type: "POST",
            data: formData,
            processData: false, // Important: Prevent jQuery from processing FormData
            contentType: false, // Important: Let the browser set the content type
            success: function(response) {
                console.log("Image edited successfully:", response);
                resolve(response);
            },
            error: function(xhr, status, error){
                console.error("editImage error:", error);
                reject(error);
            }
        });
    });
}

