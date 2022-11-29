import { Link, Outlet } from "react-router-dom";
const Layout =()=>{
    return(
        <>
        <nav style={{ display: "flex", justifyContent: "space-around" }}>
          <Link to="/home">Home</Link>
          <Link to="/pets">Pets</Link>
        </nav>
        <Outlet /> 
        {/* Outlet => Este componente solamente renderiza en el componente padre la siguiente coincidencia en las rutas. */}
      </>
    )
}

export default Layout;