import { useState } from "react";
import "./App.css";

function App() {
  const [image , setImage] = useState("") ;
  async function fetchfacts() {
    fetch("https://api.thecatapi.com/v1/images/search")
    .then(res=>res.json())
    .then(data=>setImage(data[0].url))
    
  }
  
  return (

    <div className="App">
      <div className="content">
      <h1>Cats Facts</h1>
      <button onClick={fetchfacts}>Search1</button>
      </div>
      <img src={image} alt="cat" />
      
    </div>
  );
}

export default App;
