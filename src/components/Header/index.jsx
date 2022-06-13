import "./style.css";
import ModalNewPalette from "../Modals/ModalNewPalette";
import logo from "../../assets/icons/logo.svg";
import bagIcon from "../../assets/icons/bag.svg";
import cartIcon from "../../assets/icons/add-to-cart.png";
import { useState } from "react";
import { toast } from "react-hot-toast";

const Header = () => {
  const [showModalCreate, setShowModalCreate] = useState(false);

const handleShowModalCreate = () => {
  setShowModalCreate(!showModalCreate);
}

  return (
    <>
      <div className="Header__container">
        <div className="Header__subcontainer">
          <img className="Logo" src={logo} alt="Logo El Geladon" />
          <h1 className="Name">El Geladon</h1>
        </div>
        <div className="Header__clicks">
          <img
            onClick={handleShowModalCreate}
            className="CartIcon"
            src={cartIcon}
            alt="Cart Elgelad Icon"
          />
          <img
            onClick={() => toast.error("Sessão em desenvolvimento")}
            className="BagIcon"
            src={bagIcon}
            alt="Bag Elgelad Icon"
          />
        </div>
      </div>
      {showModalCreate && <ModalNewPalette closeModal={handleShowModalCreate}/>}
    </>
  );
};

export default Header;
