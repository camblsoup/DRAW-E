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
export async function getImageDescription(imageUrl: string, testing: boolean) {
    if (testing) {
        console.log("Testing image description")
        return "This is a test image description"
    }
    if (!imageUrl) {
        console.log("No image url provided")
        return "No image url provided"
    }
    const response = await openai.chat.completions.create({
        model: "gpt-40-mini",
        messages: [{
            role: "user",
            content: [
                { type: "text", text: "Can you describe this image in detail?"},
                {
                    type: "image_url",
                    image_url: {url: imageUrl,}
                },
            ],

        }],
    });  
    return response.choices[0].message.content;
}



export async function editImage(imageUrl: string, prompt: string, testing: boolean) {

    return "editImage function called"
}

