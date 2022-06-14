import "./style.css";
import { toast } from "react-hot-toast";

const ModalDeletePalette = ({ closeModal, list, getPalettes }) => {
  const handleDeletePalette = async () => {
    const response = await fetch(
      `https://elgeladonapi.herokuapp.com/palettes/deletePalette/${list._id}`,
      { method: "DELETE", mode: "cors" }
    );
    if (response.status !== 200) {
      return toast.error("Erro na exclusão");
    }
    closeModal();
    getPalettes();
    toast.sucess("Paleta excluida com sucesso!");
  };

  return (
    <div className="ModalDeletePalette__overlay">
      <div className="ModalDeletePalette">
        <h3>Deseja Excluir Paleta {list.flavor}?</h3>
        <div className="ModalDeletePalette__buttons">
          <button onClick={handleDeletePalette}>SIM</button>
          <button onClick={closeModal}>NÃO</button>
        </div>
      </div>
    </div>
  );
};

export default ModalDeletePalette;
