import Map from "./Map";
function Textos() {
    const texto =[
        {
            id:"habitats",
            titulo : "Habitats",
            subtitulo :"¿Qué es un hábitat? y cuales son los habitats de selva?",
            contenido : "Un hábitat es el lugar o área donde reside una especie. Siendo el espacio que reúne las condiciones adecuadas para que una especie pueda vivir y reproducirse. y los habitats mas comunes en selva son"  
        },
        {
            id:"animales",
            titulo :"Animales",
            subtitulo :"los animales mas conocidos de la selva:",
            contenido : "" 
        },
        {
            id:"",
            titulo :"",
            subtitulo :"Tucán (Ramphastos toco)",
            contenido : "El tucán toco o tucán grande (Ramphastos toco) es el miembro más grande y conocido de la familia de los tucanes, su hábitat natural es América del Sur y es una especie que se encuentra habitualmente en los zoológicos de todo el mundo." 
        },
        {
            id:"",
            titulo :"",
            subtitulo :"Gorila (Gorillagorilla)",
            contenido : "Los gorilas (género Gorilla) son primates herbívoros que habitan los bosques de África central. Son los más grandes de los primates vivos. El género se compone de dos especies: el gorila occidental (Gorilla gorilla) y el oriental (Gorilla beringei), con dos subespecies cada una." 
        },
        {
            id:"",
            titulo :"",
            subtitulo :"Tigre (Panthera tigris)",
            contenido : "El tigre (Panthera tigris) es la especie de felino vivo más grande y miembro del género Panthera. Es más reconocible por sus rayas verticales oscuras en el pelaje naranja con la parte inferior blanca. Un depredador ápice, se alimenta principalmente de ungulados, como ciervos y jabalíes." 
        },
        {
            id:"",
            titulo :"",
            subtitulo :"Mono araña (Ateles paniscus)",
            contenido : "El mono araña negro, Ateles paniscus, en Surinam es común que se le diga Kwatta, es una especie del género Ateles localizada en el norte de Suramérica.​ · El mono araña negro habita el norte del río Amazonas, al este de los ríos Negro y Branco, en los estados brasileros de Amapá." 
        },
        {
            id:"extincion",
            titulo :"",
            subtitulo :"Animales en peligro de extincion",
            contenido : "¿por qué se cazan animales furtivamente? Los cazadores furtivos a veces matan o capturan animales para venderlos a escala local o para el comercio mundial de especies silvestres. El comercio de especies silvestres constituye un importante mercado negro que ha aumentado junto con el incremento de la riqueza en Asia -un gran consumidor de fauna silvestre-y la llegada del comercio electrónico y los sitios web de las redes sociales." 
        }
    ]
    return (
        <Map texto = {texto}/>
      );
}

export default Textos;