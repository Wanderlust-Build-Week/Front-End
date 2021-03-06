import React from 'react'
import styled from 'styled-components'
import beach from "../images/beach.jpg"
import {Link} from 'react-router-dom'


export default function Tour({title, location, description, duration, guide}) {
    // console.log("TourProps", props)
    return (
        <Card className="tours">
            <img src={beach}/>
            <div className="details">
                <h1 className="titleText">{title}</h1>
                <p className="locText">Location: {location}</p>
                <p className="descText">{description}</p>
                <p className="durText">Duration: {duration}</p>
                <p className="guideText">{guide} Tour</p>
                <Link to="/contact"> <button>Contact Guide</button></Link>
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
    margin: 25px auto;
    
   
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

button {
    width: 150px;
    margin: 2%;
    color:white;
    background-color:  #3878b2;
    border: 1px solid #e9ecef;

    &:hover {
        background-color: #4682b9;
        color: white;
    }
}

::nth-child(3){
    height: 300px;
}
.tours{
    margin: auto;
}


`
