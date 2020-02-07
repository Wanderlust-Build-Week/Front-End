import React, {useState, useEffect} from 'react'
import NavBar from './NavBar/NavBar'
import TourCard from './TourCard'
import Search from './Search/Search'
import axios from 'axios'
import {useParams} from 'react-router-dom';
import { StyledDestinations } from '../Styles/StyledDestinations';


export default function Destinations(props) {
    const [tours, setTours] = useState([]);
    let url= `https://wanderlust-shouts.herokuapp.com/api/tours`
    console.log("dest",props)
    // console.log("destinations", props.location.state.toursList)

    useEffect(() => {
        axios
          .get(url)
          .then(response => {
            console.log(response.data)

            if(props.location.pathname === '/destinations'){
                setTours([...response.data])
            
             
            }else{
                 setTours([...props.location.state.toursList])
            }
            
            }
            )
            
            .catch(err => console.log(err));
    }, []);

    



    
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
        <StyledDestinations>
        <div className="dest-wrapper">
        <NavBar />
        <Search className="destSearch"
            placeholder="Where do you want to go?"/>


            <div>
                {tours.map(function(tour){
                   return  <TourCard tour={tour} className="dest-card"/>
                })}
            </div>   
        </div>
        </StyledDestinations>
    )
}
