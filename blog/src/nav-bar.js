import React from 'react';
import { Link } from 'react-router-dom'

export default function NavBar() {   
  return (     
    <div>          
      <nav style={{
        "padding-top": "0.5rem"
      }}>
        <Link to="/" style={{
      padding: "10px"
        }}>Home</Link>
        <Link to="/new-post">Make post</Link>
      </nav>
    </div>   
  ); 
};