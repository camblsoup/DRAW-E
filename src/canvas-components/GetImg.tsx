import pencil from "../assets/pencil.svg";
import colourSelect from "../assets/colour-select.svg";
import dropper from "../assets/dropper.svg";
import eraser from "../assets/eraser.svg";
import laso from "../assets/laso.svg";
import square from "../assets/square.svg";
import brush from "../assets/brush.svg";
import circleLaso from "../assets/circle-laso.svg";
import hexagon from "../assets/hexagon.svg";
import pen from "../assets/pen.svg";
import redo from "../assets/undo.svg";
import undo from "../assets/redo.svg";
import triangle from "../assets/triangle.svg";
import circle from "../assets/circle.svg";
import download from "../assets/download.svg";
import fill from "../assets/fill.svg";
import red from "../assets/red.svg";
import orange from "../assets/orange.svg";
import yellow from "../assets/yellow.svg";
import green from "../assets/green.svg";
import blue from "../assets/blue.svg";
import pink from "../assets/pink.svg";
import purple from "../assets/purple.svg";
import black from "../assets/black.svg";
import white from "../assets/white.svg";
import grey from "../assets/grey.svg";
import imgNotFound from "../assets/imgNotFound.svg";

interface Props{ 
    altText: String;
} 
// ALT TEXT INPUT MUST MATCH THE FILE NAME AND BE IMPORTED!!!!
export default function GetImg({altText}: Props){
    let img = imgNotFound; 
    switch(altText){
        case "pencil":
            img=pencil;
            break;
        case "eraser":
            img=eraser;
            break;
        case "dropper":
            img=dropper;
            break;
        case "colour-select":
            img=colourSelect;
            break;
        case "laso":
            img = laso;
            break;
        case "square":
            img = square;
            break;
        case "brush":
            img = brush;
            break;
        case "circle-laso":
            img = circleLaso;
            break;
        case "hexagon":
            img = hexagon;
            break;
        case "pen":
            img = pen;
            break;
        case "redo":
            img = redo;
            break;
        case "undo":
            img = undo;
            break;
        case "triangle":
            img = triangle;
            break;
        case "circle":
                img = circle;
                break;
        case "red":
                img = red;
                break;
        case "orange":
                img = orange;
                break;
        case "yellow":
                img = yellow;
                break;
        case "green":
                img = green;
                break;
        case "blue":
                img = blue;
                break;
        case "purple":
                img = purple;
                break;
        case "pink":
                img = pink;
                break;
        case "black":
                img = black;
                break;
        case "grey":
                img = grey;
                break;
        case "white":
                img = white;
                break;
        case "fill":
            img = fill;
            break;
        case "download":
            img = download;
            break;
        default:
            img=imgNotFound;

    }

    return <>
            <img src={img} alt={altText.toString()}></img>
    </>
}