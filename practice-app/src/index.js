import React from "react";
import ReactDom from "react-dom/client"; //Para manejar el navegador

// const rootElement = document.getElementById('root')
const root = ReactDom.createRoot(document.getElementById("root")); //Elemento raiz

const Greeting = () => {
//   const married = false;
//   return married? <h1> Estas casado</h1> : <h1> No Estas casado</h1>
//   return <h1> {married ? "Estas casado 😁" : "No estas casado 😑"}</h1>;

// como se muestra un objeto en react?
const user = {
 name:'Lina',
 age:100,
 color:'blue'
}

// return <h1> {JSON.stringify(user)}</h1>;
return(
    <div>
        <h1>Hola {user.name}!</h1>
        <p> tu color favorito es el {user.color}</p>
    </div>
)
};

root.render(<Greeting />);
