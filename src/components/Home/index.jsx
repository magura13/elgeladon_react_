import "./style.css";
import Card from "../Cards";

const Home = ({list}) => {

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
