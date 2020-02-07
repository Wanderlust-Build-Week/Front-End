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
            setTourz([...res.data])
        })
        .catch(function(err) {
            console.log("error", err)
            // Code for handling errors
        });

    },[]);

    
    return (
        
        <div>
            <h1>Tours List</h1>
            {tourz.map(function(tour){
                return <TourCard tour={tour}/>
            })}
        </div>
    )
}
