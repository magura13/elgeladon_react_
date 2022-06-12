import "./style.css";
import { useState } from "react";
import Card from "../Cards";

const Home = () => {
  const [list, setList] = useState([]);

  const getPalettes = async () => {
    const response = await fetch(
      "http://localhost:8080/palettes/getAllPalettes"
    );
    const listPalettes = await response.json();

    setList(listPalettes)
  };

  getPalettes();
  return (
    <div className="Home__container">
      <h1 className="Subtitle">Lista de Paletas</h1>
      <div className="Cards">
        {list.map((element) => {
          return <Card key={element._id} list={element} />;
        })}
      </div>
    </div>
  );
};

export default Home;
