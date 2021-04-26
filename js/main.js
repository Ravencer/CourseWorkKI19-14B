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

