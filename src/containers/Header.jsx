import logo from "../assets/img/14351507_5319163.svg";
import "../assets/styles/Header.css";

function Header() {
  return (
    <header>
        <nav id="nav" className="nav1">
            <div className="contenedor-nav">
                <div className="logo">
                    <img src={logo} />
                </div>
                <div className="enlaces" id="enlaces">
                    <a href="#habitats" className="btn-header">Habitats</a>
                    <a href="#animales" className="btn-header">Animales</a>
                    <a href="#extincion" className="btn-header">Extincion</a>
                </div>
                <div className="icono" id="open">
                    <span>&#9776;</span>
                </div>
            </div>
        </nav>
        <div className="textos">
            <p>Animals.Net</p>
            <p1>Sé el cambio que quieres ver en el mundo</p1>
        </div>
    </header>
  );
}

export default Header;
