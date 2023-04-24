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


const selectSingles = document.querySelectorAll('.select');

if (selectSingles) {
	for (let i = 0; i < selectSingles.length; i++) {
		const selectSingle = selectSingles[i];
		const selectSingle_title = selectSingle.querySelector('.select-title');
		const selectSingle_labels = selectSingle.querySelectorAll('.select-content__label');

		// Toggle menu
		selectSingle_title.addEventListener('click', () => {
			if ('active' === selectSingle.getAttribute('data-state')) {
				//selectSingle.setAttribute('data-state', '');
			} else {
				selectSingle.setAttribute('data-state', 'active');
				if (selectSingle_title.classList.contains('__select__title-countries')) {

				}
			}
		});

		document.addEventListener( 'click', (e) => {
			let withinBoundaries = e.composedPath().includes(selectSingle_title);
			let withinBoundaries2 = e.composedPath().includes(selectSingle_labels);
			if ( ! withinBoundaries && ! withinBoundaries2) {
				selectSingle.setAttribute('data-state', '');
			}
			
		})

		// Close when click to option
		for (let i = 0; i < selectSingle_labels.length; i++) {
			let selectSingle_label = selectSingle_labels[i];
			selectSingle_labels[i].addEventListener('click', (evt) => {
				if (selectSingle_title.querySelector('input')) {
					selectSingle_title.querySelector('input').value = evt.target.textContent;
					//console.log(evt.target.textContent);
				}
				selectSingle.setAttribute('data-state', '');
			});
		}
	}
}

/*===========================================*/

const panels = document.querySelectorAll('.editing-content-sample-panel');

if (panels) {
	for (let i = 0; i < panels.length; i++) {
		let panel = panels[i];
		let panelButton = panel.querySelector('.editing-content-sample-panel__button');
		let panelWrapper = panel.querySelector('.editing-content-sample-panel__wrapper');

		panelButton.addEventListener("click", function (e) {
			panel.classList.toggle('_active');
		});
		document.addEventListener( 'click', (e) => {
			let withinBoundaries = e.composedPath().includes(panelButton);
			let withinBoundaries2 = e.composedPath().includes(panelWrapper);
			if ( ! withinBoundaries && ! withinBoundaries2) {
				panel.classList.remove('_active');
			}
			
		})
	}
}
