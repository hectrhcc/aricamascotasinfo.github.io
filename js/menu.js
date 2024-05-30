document.addEventListener('DOMContentLoaded', () => { //agrear para solucionar el error

const navegar = document.querySelector('.navegar');
const menu = document.querySelector('.menu-navegacion');


navegar.addEventListener('click', ()=>{
	menu.classList.toggle("spread")
});

window.addEventListener('click', e=>{
	if(menu.classList.contains('spread') && e.target !=menu && e.target != navegar){
		menu.classList.toggle("spread")
	}

})

});
