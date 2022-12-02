import React from "react";
import ReactDom from "react-dom/client"; //Para manejar el navegador
import { Greeting } from "./Greeting";
import { UserCard } from "./Greeting";

// const rootElement = document.getElementById('root')
const root = ReactDom.createRoot(document.getElementById("root")); //Elemento raiz

root.render(
  <>
    <Greeting title="hola Mundo" />
    <Greeting title="Buenos Días" />
    <Greeting title="Usando React" />
    {/* Se pone llave siempre que no sea un string, para que interprete codigo */}
    <UserCard
      nameUser="Juli"
      amount={3000}
      married={true}
      points={[99, 33.3, 12]}
      addres={{ street: "123 main street",
                city:'NewYork' }}
      greet={function (){alert('Hello')}}
    />
  </>
);
