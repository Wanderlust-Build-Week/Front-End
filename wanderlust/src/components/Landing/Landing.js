import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SimpleSlider from '../Carousel/SimpleSlider';
import './Landing.css';
import {useLocalStorage} from '../hooks/LocalStorageHook';
import TourCard from '../TourCard'
export const SearchContext = React.createContext();

export default function Landing({tour, setTour}) {


  // const [tour, setTour] = useLocalStorage('tour');
  const [search, setSearch] = useState('');

  const [input, setInput] = useState('')
  const [filtered, setFiltered] = useState([])


  let url= `https://wanderlust-shouts.herokuapp.com/api/tours/?location=${search}`
  
  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        console.log(response.data)
          const location = response.data.filter(e =>
            e.location.toLowerCase().includes(search.toLowerCase())
          );
          setFiltered(location);
        })
       
      .catch(err => console.log(err));
      }, []);

      const handleChange = e => {
        e.preventDefault();
        setSearch(e.target.value);
      };
  
      // const handleSubmit = e => {
      //   e.preventDefault();
      // };
  
      const submitHandler = e => {
        e.preventDefault();
        const fil = tour.filter(el => {
            return el.location.toLowerCase().includes(input.toLowerCase()) || el.title.toLowerCase().includes(input.toLowerCase()) 
        })
        setFiltered(fil)
    }
    
    
  // if (!tour) return <h2>Loading...</h2>
  
  return (
    <SearchContext.Provider value={[tour, setTour]}>
    <div className="wrapper">
    <SimpleSlider />   
   <form className="searchWrapper" onSubmit={(e) => submitHandler(e)}> 
           <input 
           onChange={(e) => setInput(e.target.value)}
           className="searchBar" 
           text="Search" 
           placeholder="Where do you want to go?"/>
           <i className="fas fa-caret-left"></i><button><i class="fas fa-search"></i></button>
          <div>
        
          </div>
       </form>   
       <p>Location{filtered.location}</p>
</div>
</SearchContext.Provider>
    )
}