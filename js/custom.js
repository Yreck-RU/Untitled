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
	document.addEventListener( 'click', (e) => {
		let withinBoundaries = e.composedPath().includes(buttonSerch);
		let withinBoundaries2 = e.composedPath().includes(menuSerch);

		if ( ! withinBoundaries && ! withinBoundaries2) {
			menuSerch.classList.remove('_active');
		}
	})
}
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

/*==============================================*/


const PanelBurger = document.querySelector('.panel-link-button');

if (PanelBurger) {
	let panelBurgerWrapper = document.querySelector('.panel-link__burger');
	PanelBurger.addEventListener("click", function (e) {
		PanelBurger.classList.toggle('_active');
		panelBurgerWrapper.classList.toggle('_active');
	});
	document.addEventListener( 'click', (e) => {
		let withinBoundaries = e.composedPath().includes(PanelBurger);
		let withinBoundaries2 = e.composedPath().includes(panelBurgerWrapper);
		if ( ! withinBoundaries && ! withinBoundaries2) {
			PanelBurger.classList.remove('_active');
			panelBurgerWrapper.classList.remove('_active');
		}
		
	})
}



/*================================================*/





const inputPasvords = document.querySelectorAll('.form-input-pasvord');

if (inputPasvords) {
	for (let i = 0; i < inputPasvords.length; i++) {
		let inputPasvord = inputPasvords[i];
		let inputPasvordButton = inputPasvord.querySelector('.form-input-pasvord__button');
		let inputPasvordWrapper = inputPasvord.querySelector('.form-input-pasvord__input');

		inputPasvordButton.addEventListener("click", function (e) {
			inputPasvord.classList.toggle('_active');

			if (inputPasvord.classList.contains('_active')) {
				inputPasvordWrapper.setAttribute('type', 'text');
			} else {
				inputPasvordWrapper.setAttribute('type', 'password');
			}
			let timerinAniItemWrapper = setTimeout(function tick() {
				inputPasvordWrapper.setAttribute('type', 'password');
				inputPasvord.classList.remove('_active');
			}, 15000);
		});
	}
}


/*==========================================*/





document.addEventListener("DOMContentLoaded", function () {
    var phoneInputs = document.querySelectorAll('input[data-tel-input]');

    var getInputNumbersValue = function (input) {
        // Return stripped input value — just numbers
        return input.value.replace(/\D/g, '');
    }

    var onPhonePaste = function (e) {
        var input = e.target,
            inputNumbersValue = getInputNumbersValue(input);
        var pasted = e.clipboardData || window.clipboardData;
        if (pasted) {
            var pastedText = pasted.getData('Text');
            if (/\D/g.test(pastedText)) {
                // Attempt to paste non-numeric symbol — remove all non-numeric symbols,
                // formatting will be in onPhoneInput handler
                input.value = inputNumbersValue;
                return;
            }
        }
    }

    var onPhoneInput = function (e) {
        var input = e.target,
            inputNumbersValue = getInputNumbersValue(input),
            selectionStart = input.selectionStart,
            formattedInputValue = "";

        if (!inputNumbersValue) {
            return input.value = "";
        }

        if (input.value.length != selectionStart) {
            // Editing in the middle of input, not last symbol
            if (e.data && /\D/g.test(e.data)) {
                // Attempt to input non-numeric symbol
                input.value = inputNumbersValue;
            }
            return;
        }

        if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
            if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
            var firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
            formattedInputValue = input.value = firstSymbols + " ";
            if (inputNumbersValue.length > 1) {
                formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
            }
            if (inputNumbersValue.length >= 5) {
                formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
            }
            if (inputNumbersValue.length >= 8) {
                formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
            }
            if (inputNumbersValue.length >= 10) {
                formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
            }
        } else {
            formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
        }
        input.value = formattedInputValue;
    }
    var onPhoneKeyDown = function (e) {
        // Clear input after remove last symbol
        var inputValue = e.target.value.replace(/\D/g, '');
        if (e.keyCode == 8 && inputValue.length == 1) {
            e.target.value = "";
        }
    }
    for (var phoneInput of phoneInputs) {
        phoneInput.addEventListener('keydown', onPhoneKeyDown);
        phoneInput.addEventListener('input', onPhoneInput, false);
        phoneInput.addEventListener('paste', onPhonePaste, false);
    }
});




/*================================================*/





const copiaContents = document.querySelectorAll('.copia-content');

if (copiaContents) {
	for (let i = 0; i < copiaContents.length; i++) {
		let copiaContent = copiaContents[i];
		let copiaContentButton = copiaContent.querySelector('.copia-content__button');
		let copiaContentWrapper = copiaContent.querySelector('.copia-content__content');

		copiaContent.addEventListener("click", function (e) {
			if (copiaContentWrapper.classList.contains('_input')) {
				let copiaContentWrapperContent = copiaContentWrapper;
				navigator.clipboard.writeText(copiaContentWrapperContent.value);
			} else {
				let copiaContentWrapperContent = copiaContentWrapper.innerText;
				navigator.clipboard.writeText(copiaContentWrapperContent);
			}
		});
	}
}


/*==========================================*/



const projectHeaderLink = document.querySelector('.project-header__links');

if (projectHeaderLink) {
	let projectHeaderLinkOne = document.querySelector('.project-header__link-all');
	let projectHeaderLinkTwo = document.querySelector('.project-header__link-hide');

	projectHeaderLinkOne.addEventListener("click", function (e) {
		projectHeaderLink.classList.remove('_active');
	});
	projectHeaderLinkTwo.addEventListener("click", function (e) {
		projectHeaderLink.classList.add('_active');
	});
}




/*==========================================*/







document.addEventListener("DOMContentLoaded", function () {
	const forms = document.querySelectorAll("._form");

	for (let i = 0; i < forms.length; i++) {
		let form = forms[i];

		form.addEventListener("submit", function (e) {
			e.preventDefault();
			let error = formValidate(form);

			if (error === 0) {
				form.submit();
			}
		});

		let formFeqInputs = form.querySelectorAll("._req");

		for (let i = 0; i < formFeqInputs.length; i++) {
			let formFeqInput = formFeqInputs[i];

			formFeqInput.parentElement.addEventListener( 'click', (e) => {
				for (let i = 0; i < formFeqInputs.length; i++) {
					let formFeqInput = formFeqInputs[i];
					if (formFeqInput.classList.contains('_error')) {
						formRemoveError(formFeqInput);
					}
				}
			})
		}

		function formValidate(form) {
			let error = 0;
			let formFeq = form.querySelectorAll("._req");

			let formFeqPasvordOne = form.querySelector("._form-input-pasvord__one");
			let formFeqPasvordTwo = form.querySelector("._form-input-pasvord__two");

			for (var i = 0; i < formFeq.length; i++) {
				let input = formFeq[i];
				formRemoveError(input);

				if (input.classList.contains('_email')) {
					if (emailTest(input)) {
						formAddError(input);
						error++;
					}
				} else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
					formAddError(input);
					error++;
				} else if (input.getAttribute("type") === "tel" && input.value != '') {
					if (!nomerTest(input.value)) {
						formAddError(input);
						error++
					}
				} else if (input.classList.contains('_form-input-pasvord__one')) {
					if (input.value == formFeqPasvordTwo.value) {
						if (input.value === '') {
							formAddError(input); 
							error++;
						}
					} else {
						formAddError(input);
						error++;
					}
				} else if (input.classList.contains('_form-input-pasvord__two')) {
					if (input.value == formFeqPasvordOne.value) {
						if (input.value === '') {
							formAddError(input); 
							error++;
						}
					} else {
						formAddError(input);
						error++;
					}
				} else if (input.value === '') {
					formAddError(input);
					error++;
				}
			}

			return error;
		}

		function formAddError(input) {
			input.parentElement.classList.add("_error");
			input.classList.add("_error");
		}
		function formRemoveError(input) {
			input.parentElement.classList.remove("_error");
			input.classList.remove("_error");
		}
		function emailTest(input) {
			return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
		}
		function nomerTest(nomer) {
			if (true) {
				if (nomer[0] === "8" && nomer.length == 17) {
					return true;
				} else if (nomer[0] === "+" && nomerTestSimvol(nomer) === "7" && nomer.length > 17) {
					return true;
				}
			}
		}
		function nomerTestSimvol(nomer) {
			for (let i = 1; i < nomer.length; i++) {
				let simvol = nomer[i];

				if (+simvol > 0) {
					return simvol;
				}
			}
		}
	}
});








/*================================================*/


const choiceSpecializations = document.querySelectorAll('.choice-specialization');

if (choiceSpecializations) {
	for (let i = 0; i < choiceSpecializations.length; i++) {
		let choiceSpecialization = choiceSpecializations[i];
		let choiceSpecializationButton = choiceSpecialization.querySelector('.choice-specialization__title');
		let choiceSpecializationWrapper = choiceSpecialization.querySelector('.choice-specialization__body');

		choiceSpecializationButton.addEventListener("click", function (e) {
			choiceSpecialization.classList.toggle('_active');
		});
		document.addEventListener( 'click', (e) => {
			let withinBoundaries = e.composedPath().includes(choiceSpecializationButton);
			let withinBoundaries2 = e.composedPath().includes(choiceSpecializationWrapper);
			if ( ! withinBoundaries && ! withinBoundaries2) {
				choiceSpecialization.classList.remove('_active');
			}
		})
	}
}


/*==========================================*/



/*================================================*/


const panelHeaderUserWrappers = document.querySelectorAll('.panel-header-user__wrapper');

if (panelHeaderUserWrappers) {
	for (let i = 0; i < panelHeaderUserWrappers.length; i++) {
		let panelHeaderUserWrapper = panelHeaderUserWrappers[i];
		let panelHeaderUserWrapperButton = panelHeaderUserWrapper.querySelector('.panel-header-user');
		let panelHeaderUserWrapperWrapper = panelHeaderUserWrapper.querySelector('.panel-header-user__list');

		panelHeaderUserWrapperButton.addEventListener("click", function (e) {
			panelHeaderUserWrapper.classList.toggle('_active');
		});
		document.addEventListener( 'click', (e) => {
			let withinBoundaries = e.composedPath().includes(panelHeaderUserWrapperButton);
			let withinBoundaries2 = e.composedPath().includes(panelHeaderUserWrapperWrapper);
			if ( ! withinBoundaries && ! withinBoundaries2) {
				panelHeaderUserWrapper.classList.remove('_active');
			}
		})
	}
}


/*==========================================*/