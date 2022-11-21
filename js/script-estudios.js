
// Galeria

const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenidoLight = document.querySelector('.imagen-light')

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', () => {
        aparecerImagen(imagen.getAttribute('src'))
    })
})

contenidoLight.addEventListener('click', (e) => {
    if(e.target !== imagenesLight){
        contenidoLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')
    }
})

const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen;
    contenidoLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
}