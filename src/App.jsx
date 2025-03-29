import React, { useState, useEffect } from "react";
import axios from "axios";
import DogCard from "./components/DogCard";
import BanList from "./components/BanList";
import "./App.css";

const API_URL = "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10";
const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

function App() {
  const [dog, setDog] = useState(null);
  const [banList, setBanList] = useState([]);

  useEffect(() => {
    fetchDog();
  }, []);  

  const headers = new Headers({
    "x-api-key": ACCESS_KEY
  });
  
  var requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
  };
  
  const fetchDog =  async () => {
    let index = Math.floor(Math.random() * 10);
    const response = await fetch(API_URL, requestOptions);
    const result = await response.json();

    console.log(result[index]);

    const dogData = result[0];

    setDog({
      imageUrl: dogData.url
    })
  };      

  return (
      <div className="app">
      <h1>dog discovery</h1>
      <h3>woof!</h3>
      <button onClick={fetchDog}>discover</button>

      {dog && <DogCard imageUrl={dog.imageUrl} />}
    </div>
  );
}

export default App;
