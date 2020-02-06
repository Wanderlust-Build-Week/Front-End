import React from 'react'
import styled from 'styled-components'
import beach from "../images/beach.jpg"

export default function Tour({title, location, description, duration, guide}) {
    // console.log("TourProps", props)
    return (
        <Card>
            <img src={beach}/>
            <div className="details">
                <h1>{title}</h1>
                <p>{location}</p>
                <p>{description}</p>
                <p>{duration}</p>
                <p>{guide}</p>
            </div>
        </Card>
    )
}


const Card = styled.div`
    border: .333px solid #666;
    width: 80%;
    height: auto;
    margin: 0 auto;
    margin-top: 10px;
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
        width: auto;
        height: 100%;
        object-fit: cover;
    }
`
