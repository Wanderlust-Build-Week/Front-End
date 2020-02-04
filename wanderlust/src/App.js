import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import {BrowserRouter as Router} from "react-router-dom"
import TourGuide from './components/TourGuide'
import NewTourForm from './components/NewTourForm'
import Login1 from './components/Login1'
import Register1 from './components/Register1'
import Home1 from './components/Home1'
<<<<<<< HEAD
import FormikContactForm from './components/Contact'

=======
import User from './components/User'
>>>>>>> b6a0c8a6c6f9323770daa0a130efd51cc8bdae9e
function App(props) {
  console.log("app props", props)

  return (
  
      <div className="App">
        <Route exact path="/" render={props =><Home1 {...props}/>}/>
        <Route path="/register" render={ props =><Register1 {...props}/>}/>
        <Route path="/login" render={ props =><Login1 {...props}/>}/>
        <Route path="/tourguide/:id" component={TourGuide}/>
        <Route path="/tourguide/newTourForm" component={NewTourForm}/>
<<<<<<< HEAD
        <Route path="/contact" render={ props =><FormikContactForm {...props}/>}/>

=======
        <Route path="/user" component={User}/>
>>>>>>> b6a0c8a6c6f9323770daa0a130efd51cc8bdae9e
      </div>
 
    
  );
}

export default App;
