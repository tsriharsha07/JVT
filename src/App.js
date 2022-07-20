import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
//import { useState } from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Login from "./components/Login";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Footwear from './components/Footwear'

import Women from "./components/Women";
import Men from "./components/Men";
import Cart from "./components/Cart";
// import data from "./data/Mens";


function App() {
  
  return (
    <>
    
    <Router>
    <Navbar/>
    
    
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="login" element={<Login/>} />
        <Route path="signup" element={<Signup/>} />
        <Route path="men" element={<Men />} />
        <Route path="women" element={<Women/>} />
        
        <Route path="footwear" element={<Footwear/>} />
        <Route path="cart" element={<Cart/>}/>
        
      </Routes> 
    </div>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
