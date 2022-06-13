import "./style.css";
import { toast } from "react-hot-toast";

const Card = ({ list }) => {

//A função do toast pode ser criada diretamente no onCLick
// const errorMessage = () => {
// toast.error("Sessão em desenvolvimento")
// }

  return (
    <div className="Card__container">
      <div className="Card__img__price">
        <h3 className="Price">{`R$${list.price.toFixed(2)}`}</h3>
        <img
          className="Image"
          src={list.img}
          alt={`Palette flavor of ${list.flavor}`}
        />
      </div>
      <h3 className="Flavor">{list.flavor}</h3>
      <p className="Description">{list.description}</p>
      <button className="Button" onClick={() => toast.error("Sessão em desenvolvimento")}>ADD</button>
    </div>
  );
};

export default Card;
