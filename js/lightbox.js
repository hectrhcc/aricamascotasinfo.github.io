document.addEventListener('DOMContentLoaded', () => { 
const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-light')
const navegar1 = document.querySelector('.navegar');
const cerrar = document.querySelector('.close')

imagenes.forEach(imagen =>{
	imagen.addEventListener('click', ()=>{
		
		aparecerImagen(imagen.getAttribute('src'))
	})
})

contenedorLight.addEventListener('click',(e)=>{
	
	  if(e.target!==imagenesLight){
		contenedorLight.classList.toggle('show')
		imagenesLight.classList.toggle('showImage')
		navegar1.style.opacity = '1'
		}
})

const aparecerImagen = (imagen)=>{
		imagenesLight.src = imagen;
		contenedorLight.classList.toggle('show') 
		imagenesLight.classList.toggle('showImage') 
		navegar1.style.opacity = '0'
}


});