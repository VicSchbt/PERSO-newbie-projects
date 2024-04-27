const triggers = document.querySelectorAll('.faq-accordion__label');
const regions = document.querySelectorAll('.faq-accordion__infos');
const openIcons = document.querySelectorAll('.faq-accordion__trigger--open');
const closeIcons = document.querySelectorAll('.faq-accordion__trigger--close');

const isOpen = new Array(4).fill(false);

triggers.forEach((element, index) => {
	element.addEventListener('click', () => {
		if (isOpen[index]) {
			regions[index].classList.remove('open');
			openIcons[index].classList.add('hide');
			closeIcons[index].classList.remove('hide');
		} else {
			regions[index].classList.add('open');
			openIcons[index].classList.remove('hide');
			closeIcons[index].classList.add('hide');
		}
		isOpen[index] = !isOpen[index];
	});
});
