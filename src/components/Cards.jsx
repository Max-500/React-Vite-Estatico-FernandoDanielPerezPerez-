import "../assets/styles/Cards.css"
import habitats from "../assets/img/habitats.jpg"
import animales from "../assets/img/animales.jpg"
import peligro from "../assets/img/peligro.jpg"

function Cards() {
    return (  
        <section className="team contenedor" id="equipo">
            <h3>Animales de Selva</h3>
            <p className="after">Conoce mas a los animales de selva</p>
            <div className="card">
                <div className="content-card"> 
                    <div className="people">
                        <img src={habitats}/>
                    </div>
                    <div className="texto-team">
                        <p>Habitats</p>
                    </div>
                </div>
                <div className="content-card">
                    <div className="people">
                        <img src={animales} />
                    </div>
                    <div className="texto-team">
                        <p>Animales</p>
                    </div>
                </div>
                <div className="content-card">
                    <div className="people">
                        <button></button>
                        <img src={peligro} />
                    </div>
                    <div className="texto-team">
                        <p>En peligro de extincion</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cards;
