import React, {useState, useEffect} from 'react'
import Tour from '../TourCard'
import axios from 'axios'


export default function Search({placeholder, handleChange}) {

    const [tours, setTours] = useState([]);
    const [search, setSearch] = useState('');
     const [query, setQuery] = useState('');

  
    let url= `https://wanderlust-shouts.herokuapp.com/api/tours/?location=${query}/?title=${query}`
    
      useEffect(() => {
        axios
          .get(url)
          .then(response => {
            console.log(response.data)
            const getTour = response.data.filter(e =>
            e.location.toLowerCase().includes(query.toLowerCase())
            );
              setTours(getTour);
            })
            
            .catch(err => console.log(err));
        }, []);
  
        
  const updateSearch = e => {
    setQuery(e.target.value)
    console.log(query)
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(query)
    setSearch('');
    console.log(query)
  }

    return (
        <div>
            <form onSubmit={getSearch} className="searchWrapper" > 
                <input 
                className="searchBar" 
                type="text"
                text="Search" 
                value={query} 
                onChange={updateSearch}
                placeholder={placeholder}
                search={search}
                />
                

                <i className="fas fa-caret-left"></i><button type="submit"><i class="fas fa-search"></i></button>
                <div>
                </div>
            </form>  
            <div className="recipes">
                
      {tours.map(tour => (
        <Tour 
       
          key={tour.id}
          title={tour.title} 
          location={tour.location}
          duration={tour.duration}
          guide={tour.guide}
          description={tour.description}

        />
      ))}
      </div>
        </div>
    )
}
