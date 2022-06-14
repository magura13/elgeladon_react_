import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";

const App = () => {

  const [list, setList] = useState([]);

  const getPalettes = async () => {
    const response = await fetch(
      "https://elgeladonapi.herokuapp.com/palettes/getAllPalettes"
    );
    const listPalettes = await response.json();

    setList(listPalettes);
  };
  //CICLO DE VIDA MONTAGEM (ARRAY VAZIO)
  useEffect(() => {
    getPalettes();
  }, []);

  return (
    <>
      <Toaster position="bottom-center" />
      <Header getPalettes={getPalettes}/>
      <Home list={list} getPalettes={getPalettes}/>
      <Footer />
    </>
  );
};

export default App;
