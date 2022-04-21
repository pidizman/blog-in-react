import React, { useState } from 'react';
import { v4 as uuidv4} from 'uuid';
import NavBar from "../nav-bar";
import Footer from "../footer";
import "./new-post.css";

export default function NewPost() {
  const [ title, setTitle ] = useState("");
  const [ author, setAuthor ] = useState("");
  const [ text, setText ] = useState("");

  const onSubmitHandler = event => {
    event.preventDefault();

    const newPost = {
      title: title,
      author: author,
      text: text,
      id: uuidv4()
    }
    
    fetch('https://api-for-blog.filipos01.repl.co/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPost)
    }).catch(err => console.log(err))
      .finally(()=> {
        setTitle("");
        setAuthor("");
        setText("");
      })
    
    
  };
  
  return (
    <div>
      <NavBar />
      <h1>Here you can make new post!</h1>

      <form onSubmit={onSubmitHandler}>
        <input className="input" type="text" value={title} placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
        <input className="input" type="text" value={author} placeholder="Author" onChange={(e) => setAuthor(e.target.value)} /> 
        <input className="input" type="text" value={text} placeholder="Text" onChange={(e) => setText(e.target.value)} />
        <input type={"submit"} />
      </form>
      <Footer />
    </div>
  );
};