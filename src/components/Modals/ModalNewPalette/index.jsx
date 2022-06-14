import "./style.css";
import { useState } from "react";
import { toast } from "react-hot-toast";

const ModalNewPalette = ({ closeModal,getPalettes }) => {
  const [flavor, setFlavor] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImage] = useState("");

  const handleCreatePalette = async () => {
    const newPalette = {
      flavor,
      price,
      description,
      img,
    };
    //o fetch se não for definido faz um GET, se não for get eu tenho que definir.
    const response = await fetch(
      "http://localhost:8080/palettes/createNewPalette", //url de criação
      {
        method: "POST", //defino o método
        headers: { "Content-Type": "application/json" }, //explico que será por JSON
        mode: "cors", //ativo o cors
        body: JSON.stringify(newPalette), //envio os dados em formato de string no json os dados que vem do newPalette
      }
    );

    if (response.status !== 201) {
      return toast.error("Falha na criação da paleta!");
    }

    setFlavor("");
    setDescription("");
    setImage("");
    setPrice("");
    closeModal();
    getPalettes();
    toast.success("Paleta criada com successo!");
  };

  return (
    <div className="Modal__overlay">
      <div className="Modal__container">
        <div className="Modal__header">
          <h3>Adicionar ao cardápio</h3>
          <button onClick={closeModal}>X</button>
        </div>
        <input
          value={flavor}
          onChange={(event) => setFlavor(event.target.value)}
          name="flavor"
          placeholder="Digite o sabor"
        />
        <input
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          type="number"
          name="price"
          placeholder="Digite o preço"
        />
        <input
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          name="description"
          placeholder="Digite a descrição"
        />
        <input
          value={img}
          onChange={(event) => setImage(event.target.value)}
          name="img"
          placeholder="Digite o endereço da imagem"
        />
        <button onClick={handleCreatePalette}>ADD</button>
      </div>
    </div>
  );
};

export default ModalNewPalette;
