import React from 'react'
import SimpleSlider from '../Carousel/SimpleSlider';
import './Landing.css';

export default function Landing() {
    return (
        <div className="wrapper">
            <div className="searchWrapper">
                    <input className="searchBar" text="Search" placeholder="Where do you want to go?"/><button><i class="fas fa-search"></i></button>
                
                </div>   
            <SimpleSlider />         
        </div>
    )
}
