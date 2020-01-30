import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import {BrowserRouter as Router} from "react-router-dom"
import Landing from './Components/Landing/Landing';

function App(props) {
  console.log("app props", props)

  return (
  
      <div className="App">
      
        <Landing />
      </div>
 
    
  );
}

export default App;
