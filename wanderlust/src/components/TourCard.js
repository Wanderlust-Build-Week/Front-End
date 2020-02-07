import React from 'react'
import styled from 'styled-components'
import beach from "../images/beach.jpg"

export default function Tour({title, location, description, duration, guide}) {
    // console.log("TourProps", props)
    return (
        <Card>
            <img src={beach}/>
            <div className="details">
                <h1 className="titleText">{title}</h1>
                <p className="locText">Location: {location}</p>
                <p className="descText">{description}</p>
                <p className="durText">Duration: {duration}</p>
                <p className="guideText">{guide} Tour</p>
                <button>Contact Guide</button>
                            </div>
        </Card>
    )
}


const Card = styled.div`


    display: flex;
    align-items: center;
    border: .333px solid #666;
    width: 80%;
    height: auto;
    justify-content: center;
    margin-bottom: 25px;
   
    border-radius: 5px;
    box-shadow: 0 1px 1px rgba(0,0,0,0.12), 
    0 2px 2px rgba(0,0,0,0.12), 
    0 4px 4px rgba(0,0,0,0.12), 
    0 8px 8px rgba(0,0,0,0.12),
    0 16px 16px rgba(0,0,0,0.12);

    display: flex;
    .details{
        width: 80%;
    }
    img{
        width: 60%;
        height: auto;
        object-fit: cover;
    }
    
    .titleText{
        padding: 5%;
    }

.descText{
    text-align: justify;
    padding: 5%;
}

`
