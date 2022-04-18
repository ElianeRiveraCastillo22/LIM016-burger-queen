import { NavLink } from "react-router-dom";

const LogoQuickly = require("../../../../img/brand/quickly_logo.png");

function NavSalon() {
  return (
    <>
      <nav className="navSalon">
        <NavLink to="/">
          <img src={LogoQuickly} alt="Quickly" />
        </NavLink>
        <NavLink to="/cocina">
          <i className="fa-solid fa-utensils"/>
          <span>Para entregar</span>
        </NavLink>
        <NavLink to="/cocina/alert">
          <i className="fa-solid fa-bell" />
          <span>Para preparar</span>
        </NavLink>
        <NavLink to="/cocina/history">
          <i className="fa-solid fa-clock-rotate-left" />
          <span>Historial</span>
        </NavLink>

    </nav>
    </>
  );
}

export default NavSalon;
