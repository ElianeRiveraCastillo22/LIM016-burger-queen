import { Link } from "react-router-dom";
const quicklyWhite = require("../img/brand/quickly_white.png");

function Login() {

    return (
      <div className="ContentLogin">
        <img src={quicklyWhite} alt=""/>
        <section className="SectionBtnLogin">
          <Link to="/salon" className="BoxButton">
            <button className="BtnLogin">
              Salón
            </button>

          </Link>
          <Link to="/cocina" className="BoxButton">
            <button className="BtnLogin" >Cocina</button>
          </Link>
        </section>
        <section className="capa"></section>
      </div>
    );
}

export default Login;
