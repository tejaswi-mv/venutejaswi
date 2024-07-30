import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar=()=>{
return(
    <div className ="n-wrapper" id = "Navbar">
        <div className="n-left">
            <div className="n-name">Venu tejaswi</div>
        </div>
        <div className="n-right">
            <div className="n-list">
            <ul style ={{listStyleType :"none"}}>
                <li >Home</li>
                <li>About</li>
                <li>Projects</li>
                
               
            </ul>
            </div>
          
            </div>
     
     
    
      </div>

   
)
}

export default Navbar;

