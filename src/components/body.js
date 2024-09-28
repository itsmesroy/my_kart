import React, {useState} from 'react'
import './body.css'


export default function Bodyimg() {
    // State to track whether the image is enlarged
    const [isFullscreen, setIsFullscreen] = useState(false);
   

    // Function to toggle fullscreen on and off
    const toggleFullscreen = () => {
        setIsFullscreen(!isFullscreen);
    };

    return (
        <>
            <img
                src='/pexels-photo-2253643.jpeg' 
                alt='bakery'
                className='fullscreen-img'
                onClick={toggleFullscreen} // Toggle fullscreen on click
            />
        </>
    );
}