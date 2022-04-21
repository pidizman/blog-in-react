import React from 'react'; 
import './posts.css';

export default function post({ post }) {   
  return (     
    <div className={"div"}>          
      <p style={{
        padding: "0.7rem",
        "font-size": "25px"
      }}>{post.title}</p>
      <p style={{
        "padding-left": "0.7rem",
        "font-size": "20px"
      }}>Author: {post.author}</p>
      <p style={{
        padding: "0.7rem",
        "font-size": "15px"
      }}>{post.text}</p>
    </div>   
  ); 
};