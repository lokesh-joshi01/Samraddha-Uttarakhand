import { useState } from "react";
import {useState } from "react";


const data = ["https://img.freepik.com/premium-photo/random-best-photo_865967-89188.jpg",
"https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
"https://images.unsplash.com/photo-1610715936287-6c2ad208cdbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXR0YXJha2hhbmR8ZW58MHx8MHx8fDA%3D",
"https://plus.unsplash.com/premium_photo-1697730418469-c7458f720b92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXR0YXJha2hhbmR8ZW58MHx8MHx8fDA%3D",
"https://images.unsplash.com/photo-1547378809-db8f9515a63b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXR0YXJha2hhbmR8ZW58MHx8MHx8fDA%3D"]


const ImageSlider = () =>{

    const [activeImageIndex, setActiveImageIndex] = useState(0);
   
    const handleNextClick =()=>{ 
        setActiveImageIndex((activeImageIndex+1)%data.length);
    }
    const handlePerviousClick =()=>{
        if(activeImageIndex === 0) setActiveImageIndex(data.length-1);
        else setActiveImageIndex(activeImageIndex-1);
    }
    
//     const imageData = () =>{
//         setArrData("https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
// }
    return(
        <div className="imageSlider">
            <button className="previousButton" onClick={handlePerviousClick} >Previous</button>
        <img src={data[activeImageIndex]} alt="mountain" ></img>
            <button className="nextButton" onClick={handleNextClick} >Next</button>
        </div>
        
    )
};

export default ImageSlider;