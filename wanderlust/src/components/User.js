import React, { useEffect, useState } from "react"
import axios from 'axios'
import TourCard from './TourCard'



export default function User() {

    let [tourz, setTourz] = useState([])

    useEffect(() => {
        axios.get(`https://swapi.co/api/planets/3/`)
        .then(res => {
            // Code for handling API response
            console.log("smurfs", res.data)
            setTourz([res.data])
            
        })
        .catch(function(err) {
            console.log(err.error)
            // Code for handling errors
        });

    },[]);

    console.log("tourz", tourz)
    return (
        
        <div>
            {tourz.map(function(tour){
                return <TourCard tour={tour}/>
            })}
        </div>
    )
}
