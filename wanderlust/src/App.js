import React, {useState} from 'react';
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
import Destinations from './components/Destinations'
import FormikNewTourForm from './components/NewTourForm';
import {UserDataProvider} from './components/context/userdataContext'
import Search from './components/Search/Search'

function App(props) {
  console.log("app props", props)
  const [userData, setUserData] = useState({})

  return (
  
      <div className="App">
        <UserDataProvider value={userData, setUserData}>
          <Route exact path="/" render={props =><Home1 {...props}/>}/>
          <Route path="/register" render={ props =><Register {...props}/>}/>
          <Route path="/login" render={ props =><Login {...props}/>}/>
          <Route path="/destinations" render={ props =><Destinations {...props}/>}/>
          <Route path="/destinations/:id" render={ props =><Destinations {...props}/>}/>
          <Route path="/tourguide/:id" component={TourGuide}/>
          <Route path="/tourguide/newTourForm" component={FormikNewTourForm}/>
          <Route path="/user" component={User}/>
          <Route path="/contact" render={ props =><MyForm {...props}/>}/>
          <Route exact path="/search/:location" component={Search} />
          <Route path="/about" component={() => { window.location.href = 'https://trusting-varahamihira-cb701c.netlify.com/about.html'; return null;}}/>

        </UserDataProvider>
      </div>
 
  );
}

export default App;