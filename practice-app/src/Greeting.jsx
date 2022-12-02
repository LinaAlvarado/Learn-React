export const Greeting = ({title}) => {
    console.log(title)
    //   const married = false;
    //   return married? <h1> Estas casado</h1> : <h1> No Estas casado</h1>
    //   return <h1> {married ? "Estas casado 😁" : "No estas casado 😑"}</h1>;
    
    // como se muestra un objeto en react?
    // const user = {
    //  name:'Lina',
    //  age:100,
    //  color:'blue'
    // }
    
    // return <h1> {JSON.stringify(user)}</h1>;
    // return(
    //     <div>
    //         <h1>Hola {user.name}!</h1>
    //         <p> tu color favorito es el {user.color}</p>
    //     </div>
    // )

    // como se cambian datos en un componente? para eso esta el concepto de props.
    return(
        <div>
            <h1>{title}</h1>
        </div>
    )
    };
    