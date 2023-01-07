document.addEventListener('DOMContentLoaded', () => { //para que funcionen los alert
const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-light') //clase imagen-light
const navegar1 = document.querySelector('.navegar');


const cerrar = document.querySelector('.close')
//console.log(imagenes)
//console.log(imagenesLight)
//console.log(contenedorLight)

imagenes.forEach(imagen =>{
	imagen.addEventListener('click', ()=>{
		//alert("click en la imagen!")
		//console.log(imagen.getAttribute('src')) mostrar atributos de imagen seleccionada
		aparecerImagen(imagen.getAttribute('src'))
	})
})

contenedorLight.addEventListener('click',(e)=>{
	//console.log(e.target) muestra a lo que le hice clic
	//if(e.target==cerrar) {// no funciona tan bien, se cierra con la x pero si quiero otra imagen no se cierra
	  if(e.target!==imagenesLight){//funciona mejor, se cierra con la x y si quiero otra imagen se cierra
		contenedorLight.classList.toggle('show')
		imagenesLight.classList.toggle('showImage')
		navegar1.style.opacity = '1'
		}
})

const aparecerImagen = (imagen)=>{
		imagenesLight.src = imagen;
		contenedorLight.classList.toggle('show') //le agrega la clase show
		imagenesLight.classList.toggle('showImage') //le agrega la clase showImage
		navegar1.style.opacity = '0'
}

});