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