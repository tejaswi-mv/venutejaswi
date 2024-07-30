import React from 'react';
import './App.css'
import Navbar from './components/Navbar/navbar';
import Intro from './components/Intro/intro';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projs from './components/Works/projectCon';
import Resume from './components/Resume/resume';
import About from './components/About/about'
import Yellowm from './img/yellow-bg.png';
import { Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Contact from './components/Contact.jsx/Contact';
import social from './components/Contact.jsx/social';
import Projects from './components/Works/projects';
function App() {
 

  return (
   
    <div>
    <section style={{marginBottom:'20px'}}>
    <div className='yellowback'>
    <Navbar/>
    <Intro/>
    </div>
    </section>
    <section style={{marginBottom:'20px'}}>
      <About></About>
    </section>
    <section style={{marginBottom:'0px'}}>
    
    <Projs/>
    </section>
    <Contact/>
    <social/>
   <section style={{marginBottom:'20px'}}>
   
   </section>
    
   </div>
   
   
    
   
      
        
  )
}

export default App
