import "./style.css";
import logo from "../../assets/icons/logo.svg";
import bagIcon from "../../assets/icons/bag.svg";

const Header = () => {
  return (
    <div className="Header__container">
      <div>
        <img className="Logo" src={logo} alt="Logo El Geladon" />
        <h1>El Geladon</h1>
      </div>
      <img className="BagIcon" src={bagIcon} alt="Bag Elgelad Icon" />
    </div>
  );
};

export default Header;
