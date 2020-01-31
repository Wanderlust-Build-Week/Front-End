import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Landing from './Components/Landing/Landing';
import NavBar from './Components/NavBar/NavBar'
function App(props) {
  console.log("app props", props)

  return (
  
      <div className="App">
        <NavBar />
      
        <Landing />
      </div>
 
    
  );
}

export default App;
