import "./style.css";
import { toast } from "react-hot-toast";
import deleteIcon from "../../assets/icons/delete.png";
import editIcon from "../../assets/icons/edit.png";
import ModalDeletePalette from "../Modals/ModalDeletePalette";
import { useState } from "react";

const Card = ({ list, getPalettes }) => {
  //A função do toast pode ser criada diretamente no onCLick
  // const errorMessage = () => {
  // toast.error("Sessão em desenvolvimento")
  // }
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleShowDeleteModal = () => {
    setShowDeleteModal(!showDeleteModal);
  };
  return (
    <>
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
        <div className="DeleteEdit__container">
          <img
            onClick={handleShowDeleteModal}
            src={deleteIcon}
            alt="Icone de remoção"
            title="Remover"
          />
          <img src={editIcon} alt="Icone de edição" title="Editar" />
        </div>
        <button
          className="Button"
          onClick={() => toast.error("Sessão em desenvolvimento")}
        >
          Adicionar ao carrinho
        </button>
      </div>
      {showDeleteModal && (
        <ModalDeletePalette
          closeModal={handleShowDeleteModal}
          list={list}
          getPalettes={getPalettes}
        />
      )}
    </>
  );
};

export default Card;
