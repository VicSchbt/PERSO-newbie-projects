const formSection = document.querySelector('.rating-form');
const resultSection = document.querySelector('.rating-result');

const submitBtn = document.querySelector('.rating-form__submit-btn');

const resValue = document.querySelector('#rating-result__choice');

submitBtn.addEventListener('click', (event) => {
	event.preventDefault();
	const val = document.querySelector(
		'input[name="rating-choice"]:checked'
	).value;
	if (val !== null) {
		resValue.innerHTML = val;
		formSection.classList.add('hide');
		resultSection.classList.remove('hide');
	}
});
