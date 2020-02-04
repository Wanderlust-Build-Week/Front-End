import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import {BrowserRouter as Router} from "react-router-dom"
import TourGuide from './components/TourGuide'
import NewTourForm from './components/NewTourForm'
import Login1 from './components/Login1'
import Register1 from './components/Register1'
import Home1 from './components/Home1'
import FormikContactForm from './components/Contact'

function App(props) {
  console.log("app props", props)

  return (
  
      <div className="App">
        <Route exact path="/" render={props =><Home1 {...props}/>}/>
        <Route path="/register" render={ props =><Register1 {...props}/>}/>
        <Route path="/login" render={ props =><Login1 {...props}/>}/>
        <Route path="/tourguide/:id" component={TourGuide}/>
        <Route path="/tourguide/newTourForm" component={NewTourForm}/>
        <Route path="/contact" render={ props =><FormikContactForm {...props}/>}/>

      </div>
 
    
  );
}

export default App;
