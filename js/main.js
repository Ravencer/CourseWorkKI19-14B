/* eslint-disable no-inner-declarations */
if (document.body.id === 'index' || document.body.id === 'restaurant') {
	const cartButton = document.querySelector("#cart-button");
	const modal = document.querySelector(".modal");
	const close = document.querySelector(".close");
	const toggleModal = () => {
		modal.classList.toggle("is-open");
	};
	cartButton.addEventListener('click', toggleModal);
	if (close !== null) {
		close.addEventListener('click', toggleModal);
	}
}
if (document.body.id === 'auth-page') {
	const	signUpBtn = document.getElementById('signUpBtn'),
		signInBtn = document.getElementById('signInBtn'),
		signUpInputs = document.querySelectorAll('#signUpInput'),
		signInInputs = document.querySelectorAll('#signInInput'),
		resetText = document.getElementById('resetText'),
		resetInput = document.getElementById('resetInput'),
		resetBtn = document.getElementById('resetBtn');
	const toggleInputs = elem => {
		elem.classList.toggle('input--active');
	};
	resetText.addEventListener('click', () => {
		signInInputs.forEach(elem => {
			if (elem.classList.contains('input--active')) {
				toggleInputs(elem);
			}
		});
		resetBtn.style.display = "block";
		signInBtn.style.display = 'none';
		resetText.style.display = 'none';
		signUpBtn.style.display = 'none';
		toggleInputs(resetInput);
	});
	signUpBtn.addEventListener('click', () => {
		signInBtn.style.display = 'none';
		resetText.style.display = 'none';
		signUpInputs.forEach(elem => {
			if (!elem.classList.contains('input--active')) {
				toggleInputs(elem);
			}
		});
		signInInputs.forEach(elem => {
			if (elem.classList.contains('input--active')) {
				toggleInputs(elem);
			}
		});
	});
}

