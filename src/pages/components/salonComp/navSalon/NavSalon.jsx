import { NavLink } from "react-router-dom";

const LogoQuickly=require("../../../../img/brand/quickly_logo.png");

function NavSalon(){
    return (
      <>
        <nav className="navSalon">
            <NavLink to="/">
              <img src={LogoQuickly} alt="Quickly" />
            </NavLink>
            <NavLink to="/salon">
              <i className="fa-solid fa-pen-to-square"/>
              <span>Menú</span>              
            </NavLink>
            <NavLink to="/salon/alert">
              <i className="fa-solid fa-bell" />
              <span>Pedido por entregar</span>
            </NavLink>
            <NavLink to="/salon/history">
              <i className="fa-solid fa-clock-rotate-left" />
              <span>Historial</span>
            </NavLink>
  
        </nav>
      </>
    );
}

export default NavSalon;
