import React from 'react'
import styled from 'styled-components'

export default function Tour(props) {
    console.log("TourProps", props)
    return (
        <Card>
            <img src="https://placekitten.com/200/300"/>
            <div className="details">
                <h1>{props.tour.title}</h1>
                <p>{props.tour.location}</p>
                <p>{props.tour.description}</p>
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
