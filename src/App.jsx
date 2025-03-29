import React, { useState, useEffect } from "react";
import axios from "axios";
import DogCard from "./components/DogCard";
import BanList from "./components/BanList";
import "./App.css";

const API_URL = "https://api.thecatapi.com/v1/images/0XYvRd7oD";
const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

function App() {
  const [dog, setDog] = useState(null);
  const [banList, setBanList] = useState([]);

  useEffect(() => {
    fetchDog();
  }, []);

  const fetchDog = async () => {
    try {
      const response = await axios.get(API_URL, {
        headers: { 'x-api-key': ACCESS_KEY }
      });

      const newDog = response.data[0];
  
      if (newDog && newDog.breeds && newDog.breeds.length > 0) {
        const breed = newDog.breeds[0].name;
        if (banList.includes(breed)) {
          fetchDog();
          return;
        }
      } else {
        setDog(newDog);
        return;
      }

      setDog(newDog);
    } catch (error) {
      console.error("Error fetching dog:", error);
    }
  };  


  const handleBan = (breed) => {
    setBanList([...banList, breed]);
  };

  const handleUnban = (breed) => {
    setBanList(banList.filter((b) => b !== breed));
  };

  return (
    <div className="app">
      <h1>Dog Discovery</h1>
      <button onClick={fetchDog}>Discover Another Dog</button>
      {dog && <DogCard dog={dog} addToBanList={handleBan} />}
      <BanList banList={banList} />
    </div>
  );
}

export default App;
