import "./style.css";
// import palettes from "../../mock/palettes";
import { useState } from "react";
import Card from "../Cards";

const Home = () => {
  const [list, setList] = useState(palettes);

  return (
    <div className="Home__container">
      <h1 className="Subtitle">Lista de Paletas</h1>
      <div className="Cards">
        {list.map((element,index) => {
          return <Card key={index} list={element} />;
        })}
      </div>
    </div>
  );
};

export default Home;
