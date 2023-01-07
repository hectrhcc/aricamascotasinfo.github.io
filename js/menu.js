document.addEventListener('DOMContentLoaded', () => { //agrear para solucionar el error
  //“cannot read property ‘addEventListener’ of null” 
const navegar = document.querySelector('.navegar');
const menu = document.querySelector('.menu-navegacion');

//console.log(menu)
//console.log(navegar)

navegar.addEventListener('click', ()=>{
	menu.classList.toggle("spread")
});

window.addEventListener('click', e=>{
	//console.log(e.target) para ver a que cosas le doy clic
	if(menu.classList.contains('spread') && e.target !=menu && e.target != navegar){
		menu.classList.toggle("spread")
	}

})

});
