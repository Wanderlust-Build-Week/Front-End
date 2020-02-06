import React from 'react';
import './App.css';
import * as Yup from "yup";
import {Route} from 'react-router-dom'
import {BrowserRouter as Router} from "react-router-dom"
import TourGuide from './components/TourGuide'
import Login from './components/Login'
import Register from './components/Register'
import Home1 from './components/Home1'
import User from './components/User'
import MyForm from './components/Contact'
import FormikNewTourForm from './components/NewTourForm';

function App(props) {
  console.log("app props", props)

  return (
  
      <div className="App">
        <Route exact path="/" render={props =><Home1 {...props}/>}/>
        <Route path="/register" render={ props =><Register {...props}/>}/>
        <Route path="/login" render={ props =><Login {...props}/>}/>
        <Route path="/tourguide/:id" component={TourGuide}/>
        <Route path="/tourguide/newTourForm" render={props =><FormikNewTourForm {...props}/>}/>
        <Route path="/user" component={User}/>
        <Route path="/contact" render={ props =><MyForm {...props}/>}/>
        
      </div>
 
  );
}

export default App;
