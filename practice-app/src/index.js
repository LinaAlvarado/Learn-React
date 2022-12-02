import React from "react";
import ReactDom from "react-dom/client"; //Para manejar el navegador
import { Greeting } from "./Greeting";

// const rootElement = document.getElementById('root')
const root = ReactDom.createRoot(document.getElementById("root")); //Elemento raiz

root.render(
  <>
    <Greeting title="hola Mundo" />
    <Greeting title="Buenos Días" />
    <Greeting title="Usando React" />
  </>
);
