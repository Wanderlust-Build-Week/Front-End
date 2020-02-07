import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {Wrapper} from '../Styles/StyledWrapper';
import './isoSearch.css'

 function IsoSearch({placeholder, handleChange}) {
    const {id} = useParams();
    const [tours, setTours] = useState([]);
   
    const [search, setSearch] = useState('');
     const [query, setQuery] = useState('');

  
    let url= `https://wanderlust-shouts.herokuapp.com/api/tours/?location=${query}/?title=${query}`
    
      useEffect(() => {
        axios
          .get(url)
          .then(response => {
            console.log(response.data)
 
            setTours([...response.data])
            }
            )
            
            .catch(err => console.log(err));
        }, []);
  
        
  const updateSearch = e => {
    e.preventDefault();
    setQuery(e.target.value)
    console.log(query)
    const getTour = tours.filter(e =>
      e.location.toLowerCase().includes(query.toLowerCase())
      );
        setTours(getTour);
      }
  

  const getSearch = e => {
    e.preventDefault();
    setQuery(query)
    setSearch('');
    console.log(query)
  }

    return (
        <Wrapper>
        
            <form onSubmit={getSearch} className="iso-search" > 
            
                <input 
                className="searchBar" 
                type="text"
                text="Search" 
                value={query} 
                onChange={updateSearch}
                placeholder={placeholder}
                search={search}
                handleSubmit={getSearch}
                />
                
                <Link to={{
                  pathname: `/destinations/{query}`,
                  state: {
                    toursList: tours
                  }
                }}>
                   <i id="isoSearch" className="fas fa-caret-left"/><button type="submit"><i class="fas fa-search"></i></button>
                </Link>
            </form>  
        </Wrapper>
    )
            }

     export default IsoSearch