# DRAW-E
---
DRAW-E is a program inspired by ChatGPT's DALL-E function. It builds off the image generation functionality, and gives artists and designers the ability to manipulate the drawing in a user-friendly canvas.

# TO RUN DRAW-E
---
Prerequisites:
Navigate to https://github.com/camblsoup/DRAW-E and clone the DRAW-E repo
See git clone documentation for any issues: https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository

Step 1: Ensure the following dependancies are installed on your machine:
- `npm install`
- `npm install openai`

Step 2: Run the following in the terminal:
`npm run dev`

Step 3: After the enviroment is intialiazed, open a browser by typing the following in the terminal:
`o`

You should now have the DRAW-E webpage opened in your default browser.

**Note**: *If Step 3 fails, open a new browser and type the following into your web bar*:
localhost:5173

# USER MANUAL
---
### Home page:

There is limited functionality on the home page. You may write a prompt in the box and click the up arrow button
to have DRAW-E generate an image in the traditional chatGPT/DALL-E interface.

**** The first call to the DRAW-E backend will be slow, please be patient. We're using free hosting that spins  ****
**** down the backend of our project when not used. It will be markedly faster after the first call             ****
A back button is generated below the chat to provide a way back to the main page.

You may also click on one of the two "New Canvas" buttons to bring up a drawable canvas.

### Drawable Canvas:

##### Fully functional:
    - Pencil Tool
        * Allows user to draw on the canvvas
    - Eraser Tool
        * Allows the user to erase parts of
    - Import Button (+)
        * Allows user to upload a png file to the page
    - Prompt Box
        * Allows the user to direct DALLE on how they'd lik
    - Generate Button (↑)
        * Generates an image using the drawing on the canvas and the prompt box.
        * Default prompt : "Do your best to make this image look like a painting"
    - Descriptive Audio Button
        * Generates a voice that describes the image on the canvas
        
##### Limited functionality:
    - Shape Tool (Rectangle only)
        * Currently draws lots of empty boxes as a fill
    - Fill Tool (Fills whole canvas)
        * Warning: Will cover everything, you will lose whatever is on the canvas
    - Colour Select Tool
        * Must select the drawing option (Pencil or Rectangle ) after selecting colour
    - Right sidebar (opens but doesn't interact with the canvas)
    - Save button
        * Only saves user drawing, importing AI image "taints" the canvas

##### To be implemented later:
    - Undo/Redo buttons
        * We were unable to come up with a solution after several attemps.
    - Drag and drop filters and assets
    - Project histort and organization
    - Mask
        * Requiress another canvas "laye

# Walkthrough
---
#### Task 1: Sketch an image using the drawable canvas and generate the sketch as an image.

1) Starting in the "Home Page", click on the "NEW CANVAS" button. You should now see a drawable canvas pop over the home page.

2) The Pencil tool will be set to the colour "black" by default. To draw on the canvas, left click and drag within the blank rectangle provided. You should now have a black line following the path your mouse tool. Releasing the left button will stop the drawing process. Do your best to draw a stick figure.

3) Click inside the prompt box near the bottom. Type "Can you finish my drawing? I want to see a cool dude wearing sunglasses walking away from an explosion"

4) Once you have completed the prompt, click the circular up arrow button. Wait a minute or two as the image generates. The canvas should not change from your sketch until the image is generated. After a minute or two you should see the resulting generated image in the canvas.

**Note** : *If you need to check for image generation progress right click on the canvas and select "inspect". Then, navigate to the "console" tab in the dev tools menu. You should see the following messages in the console*:
- `Sending PNG image to editImage`
- `Image edited successfully`

#### Task 2: Sketch a picture of an animal in the canvas and have the AI explain the image to you.

1) Ensure you have your sound enabled and up

2) Starting in the "Home Page", click on the "NEW CANVAS" button. You should now see a drawable canvas pop over the home page.

3) The Pencil tool will be set to the colour "black" by default. To draw on the canvas, left click and drag within the blank rectangle provided. You should now have a black line following the path your mouse tool. Releasing the left button will stop the drawing process. Do your best to draw a simple **animal of your choice**.

4) Once you are satisfied with your drawing, navigate to the bottom of the pop and search for the "〣" symbol. Wait a moment for the AI to think... 

**Note**: *Refrain from clicking the image-to-speech button several times. If you do not hear the text-to-speech, ensure your sound is enabled and turned up.*
