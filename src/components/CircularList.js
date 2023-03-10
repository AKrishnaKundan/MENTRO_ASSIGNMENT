import "./CircularList.css"
import {useState, useEffect} from "react";

const CircularList = ({rotateLeft, rotateRight, handleRotateLeft, handleRotateRight})=>{
    const [photos, setPhotos] = useState(["Keshav Bathla.png", "Ankita.png", "Prankur Gupta.png", "Saurav Pal.png", "Saumya Singh.png"]);

    const shiftRight = ()=>{
        const images = photos;
        let last = images[4];
        for (let i=3; i>=0; i--){
            images[i+1] = images[i];
        }
        images[0] = last;
        setPhotos(images);
    }

    const shiftLeft = ()=>{
        const images = photos;
        let first = images[0];
        for (let i=0; i<4; i++){
            images[i] = images[i+1];
        }
        images[4] = first;
        setPhotos(images);
    }

    useEffect(()=>{
        if (rotateRight === true){
            shiftRight();  
            handleRotateRight(false);        
        }
        if (rotateLeft === true){
            shiftLeft();
            handleRotateLeft(false);
        }
       
    });

    return (
        
            <div className="dotted-circle">
                <img src={photos[0]} alt={photos[0]} className="circle" key={photos[0]}/> 
                <img src={photos[1]} alt={photos[1]} className="circle" key={photos[1]}/>
                <img src={photos[2]} alt={photos[2]} className="circle" key={photos[2]}/>
                <img src={photos[3]} alt={photos[3]} className="circle" key={photos[3]}/>
                <img src={photos[4]} alt={photos[4]} className="circle" key={photos[4]}/>
                <img src={photos[2]} alt={photos[2]} className="center-image" key={photos[2]+"center"} />
            </div>

    );
}

export default CircularList;
