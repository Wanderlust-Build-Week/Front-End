import React, { useEffect, useState } from "react"
import axios from 'axios'
import TourCard from './TourCard'



export default function User() {

    let [tourz, setTourz] = useState([])

    useEffect(() => {
        axios.get(`https://wanderlust-shouts.herokuapp.com/api/tours`)
        .then(res => {
            // Code for handling API response
            console.log("res", res.data)
            setTourz(res.data)
        })
        .catch(function(err) {
            console.log(err.error)
            // Code for handling errors
        });

    },[]);

    
    return (
        
        <div>
            {tourz.map(function(tour){
                return <TourCard tour={tour}/>
            })}
        </div>
    )
}
