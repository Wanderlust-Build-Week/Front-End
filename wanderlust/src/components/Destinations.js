import React, {useState, useEffect} from 'react'
import NavBar from './NavBar/NavBar'
import Tour from './TourCard'
import Search from './Search/Search'

import {useParams} from 'react-router-dom';

export default function Destinations({tours, setTours}) {
    // const {id} = useParams();
    // const[dest, setDest] = useState({})

    // useEffect(() => {
    //     const actualTour = tours.filter((dest => {
    //         return dest.id == id
    //     }))
    //     setDest(actualTour[0])
    // })

    // if(!dest){
    //     return(<h1> Sorry, Tour not available!</h1>)
    // }

    return (
        <div>
        <NavBar />
        {/* <Search 
            placeholder="Where do you want to go?"/> */}


            <div>
            Destination cards go here
            <Tour 
            />
            </div>   
        </div>
    )
}
