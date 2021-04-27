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

	if (document.body.id === 'index') {
		const cards = document.querySelectorAll('.card');
		const selectCategory = document.querySelector('.category-select');
		const toggleCards = category => {
			cards.forEach(element => {
				if (category === '1') {
					element.style.display = 'inline';
				} else if (element.querySelector('.category').textContent !== category) {
					element.style.display = 'none';
				} else if (element.querySelector('.category').textContent === category) {
					element.style.display = 'inline';
				}
			});
		};
		selectCategory.addEventListener('change', () => {
			toggleCards(selectCategory.value);
		});
	}
}
