import pencil from "../assets/pencil.svg";
import colourSelect from "../assets/colour-select.svg";
import dropper from "../assets/dropper.svg";
import eraser from "../assets/eraser.svg";
import laso from "../assets/laso.svg";
import imgNotFound from "../assets/imgNotFound.svg";

interface Props{
    altText: String;
} 

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
        default:
            img=imgNotFound;

    }

    return <>
            <img src={img} alt={altText.toString()}></img>
    </>
}