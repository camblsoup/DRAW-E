import OpenAI from "openai"
import {ImageGenerateParams} from "openai/resources/images";

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

export async  function generateImage() {
    const image = await openai.images.generate(prompt)

    return image.data.at(0);
}

export async function getImageDescription(imageUrl: string) {
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

//Likely impossible, need backend
/*export async function editImage(imageUrl: string, prompt: string) {
    const image = await openai.images.edit({
        model: "dall-e-2",
        prompt: prompt,
        image: imageUrl,
        n: 1,
        size: "256x256",
    })
*/
