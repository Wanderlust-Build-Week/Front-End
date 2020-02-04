import React from 'react'

export default function Tour(props) {
    console.log("TourProps", props)
    return (
        <div>
            <img src="https://placekeanu.com/200/150"/>
            <h1>{props.tour.name}</h1>
            <p>{props.tour.climate}</p>
        </div>
    )
}
