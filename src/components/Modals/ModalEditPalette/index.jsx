import "./style.css";
import { useState } from "react";
import toast from "react-hot-toast";

const ModalEditPalette = ({ closeModal, list, getPalettes }) => {
  const [flavor, setFlavor] = useState(list.flavor);
  const [price, setPrice] = useState(list.price);
  const [description, setDescription] = useState(list.description);
  const [img, setImage] = useState(list.img);

  const handleEditPalette = async () => {
    const editedPalette = {
      flavor,
      price,
      description,
      img,
    };

    const response = await fetch(
      `https://elgeladonapi.herokuapp.com/palettes/updatePalette/${list._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify(editedPalette),
      }
    );

    if (response.status !== 200) {
      return toast.error("A atualização falhou");
    }

    closeModal();
    getPalettes();
    toast.success("Paleta atualizada com sucesso");
  };

  return (
    <div className="ModalUpdatePalette__overlay">
      <div className="ModalUpdatePalette">
        <div>
          <h3>Editar paleta</h3>
          <button onClick={closeModal}>X</button>
        </div>
        <input
          value={flavor}
          placeholder="Digite o flavor"
          onChange={(event) => setFlavor(event.target.value)}
          name="flavor"
        />
        <input
          value={price}
          placeholder="Digite o preço"
          onChange={(event) => setPrice(event.target.value)}
          name="price"
          type="number"
        />
        <input
          value={description}
          placeholder="Digite a descrição"
          onChange={(event) => setDescription(event.target.value)}
          name="description"
        />
        <input
          value={img}
          placeholder="Digite o caminho da img"
          onChange={(event) => setImage(event.target.value)}
          name="img"
        />
        <button onClick={handleEditPalette}>Editar</button>
      </div>
    </div>
  );
};

export default ModalEditPalette;