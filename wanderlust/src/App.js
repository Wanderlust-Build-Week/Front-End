import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import {BrowserRouter as Router} from "react-router-dom"
import TourGuide from './Components/TourGuide'
import NewTourForm from './Components/NewTourForm'
import Login1 from './Components/Login1'
import Register1 from './Components/Register1'
import Home1 from './Components/Home1'

function App(props) {
  console.log("app props", props)

  return (
  
      <div className="App">
        <Route exact path="/" render={props =><Home1 {...props}/>}/>
        <Route path="/register" render={ props =><Register1 {...props}/>}/>
        <Route path="/login" render={ props =><Login1 {...props}/>}/>
        <Route path="/tourguide/:id" component={TourGuide}/>
        <Route path="/tourguide/newTourForm" component={NewTourForm}/>
      </div>
 
    
  );
}

export default App;
