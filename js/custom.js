"use strict"
//==================================================================================================================================================
//Бэграунд картинок - "Начало"
//==================================================================================================================================================
function ibg(){
	let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}
ibg();
//==================================================================================================================================================
//Бэграунд картинок - "Конец"
//==================================================================================================================================================

//Бургер ==============================================
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');

		menuSerch.classList.remove('_active');
	});
}
//======================================================

// ==============================================
const buttonSerch = document.querySelector('.header-buttons__button-form');
const menuSerch = document.querySelector('.header-form');
if (buttonSerch) {
	buttonSerch.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		menuSerch.classList.toggle('_active');
	});
}
document.addEventListener( 'click', (e) => {
	let withinBoundaries = e.composedPath().includes(buttonSerch);
	let withinBoundaries2 = e.composedPath().includes(menuSerch);

	if ( ! withinBoundaries && ! withinBoundaries2) {
		menuSerch.classList.remove('_active');
	}
})
//======================================================

