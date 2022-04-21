import React, { useState, useEffect } from "react";
import NavBar from "./nav-bar";
import Footer from "./footer";
import Post from "./posts";

function App() {
  const [ data, setData ] = useState([]);

  useEffect(() => {
    fetch('https://api-for-blog.filipos01.repl.co/posts')
      .then(r => {
        if(r.ok){
          return r.json();
        }
        throw new Error(`Unable to get data: ${r.statusText}`)
      }).then(json => setData(json))
        .catch((err) => console.log(err))
  }, []);
  
  return (
    <div>
      <NavBar />
      <h1>Hello here you can watch all post</h1>
      <br />
      {data.map(posts => <Post post={posts} />)}
      <Footer />
    </div>
  );
}

export default App;