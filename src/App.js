//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
//import { createElement } from 'react';
import ListTugas from './component/ListTugas.jsx'
import Navbarku from './component/Navbarku.jsx';
//import LandingPage from './component/LandingPage.jsx';
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom" ;
//import { Navbar } from 'react-bootstrap';


function App() {
  
  return (
    <div className="App">
        <ListTugas/>
      
    </div>  
  );
  
  

}

export default App;
