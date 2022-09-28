import "../assets/styles/Content.css"
function Textos(props) {
  return (
    <div id={props.texto.id} className="Content">
        <h1>{props.texto.titulo}</h1>
        <h2>{props.texto.subtitulo }</h2>
        <h3>{props.texto.contenido}</h3>
    </div>
  );
}

export default Textos;