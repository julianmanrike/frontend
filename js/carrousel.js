const imagenContenedor = document.getElementById("imagenes-contenedor")
const carrousel = document.querySelector(".imagenes-carrousel")
const botonSiguiente = document.getElementById("flechaDerecha")
const botonAnterior = document.getElementById("flechaIzquierda")

function siguiente(e){
    const carrouselWidth = carrousel.clientWidth;
    imagenContenedor.scrollLeft += carrouselWidth;

}

function anterior(e){
    const carrouselWidth = carrousel.clientWidth;
    imagenContenedor.scrollLeft -= carrouselWidth;

}

botonSiguiente.addEventListener("click", siguiente)
botonAnterior.addEventListener("click", anterior)