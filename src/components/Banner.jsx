import React from "react";
import aboutBackground from '../assets/kalen-emsley-Bkci_8qcdvQ-unsplash.png'
import homeBackground from '../assets/IMG.png'

function Banner({ page }) {
    return (
        <div className="banner">   
            {page !== 'about' ? 
            <div className= 'image-container'>
                <img src= {homeBackground} alt="banner" />
                <p>Chez vous, <br /> partout et ailleurs</p>
            </div>
            : 
            <div className= 'image-container'>
                <img src= {aboutBackground} alt="banner" />
            </div>}
        </div>
    );
}

export default Banner;