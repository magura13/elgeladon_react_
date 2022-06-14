import "./style.css";
import Card from "../Cards";
import { useState } from "react";

const Home = ({ list, getPalettes }) => {
  const [filterInput, setFilterInput] = useState("");

  return (
    <div className="Home__container">
      <h1 className="Subtitle">Lista de Paletas</h1>
      <input
        onChange={(event) => setFilterInput(event.target.value)}
        placeholder="Filtrar por nome"
      />
      <div className="Cards">
        {filterInput !== ""
          ? list
              .filter((element) =>
                element.flavor.toLowerCase().includes(filterInput.toLowerCase())
              )
              .map((element) => {
                return (
                  <Card
                    getPalettes={getPalettes}
                    key={element._id}
                    list={element}
                  />
                );
              })
          : list.map((element) => {
              return (
                <Card
                  getPalettes={getPalettes}
                  key={element._id}
                  list={element}
                />
              );
            })}
      </div>
    </div>
  );
};

export default Home;

//condição ? se for verdadeiro : se for falso
//ternário
