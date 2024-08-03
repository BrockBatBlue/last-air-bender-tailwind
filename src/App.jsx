import { useState, useEffect } from "react";
import axios from "axios";
import CardsContainer from "./components/CardsContainer";
import Title from "./components/Title";

function App() {
  const apiUrl =
    "https://last-airbender-api.fly.dev/api/v1/characters/random?count=20";

  //store fetched data in a useState
  const [characters, setCharacters] = useState([]);

  //fetch data using Axios
  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl);
      setCharacters(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  //call fetched data on component
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Title />
      <CardsContainer characters={characters} />
    </div>
  );
}

export default App;
