import Textos from "../components/Textos";

function Map(props) {
    return (
    <>
        {props.texto.map((texto)=>{
            return(
                <Textos texto={texto} />
            )
        }
        
        )}
    </>
    );
}

export default Map;