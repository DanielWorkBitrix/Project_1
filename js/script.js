window.addEventListener('scroll', (e) => {
	let topOffset = window.scrollY;
	if (topOffset > 400) {
		document.querySelector('.heading').classList.add('scrolled');
	} else {
		document.querySelector('.heading').classList.remove('scrolled');
	}
})

let menu_btn = document.querySelector('.hamburger');

menu_btn.addEventListener('click', () => {
	let ul = document.querySelector('ul');
	let li = document.querySelector('li');

	function hasClass(el, clss) {
		return el.classList.contains(clss);
	}
	if (menu_btn.classList.contains("is-active")) {
		ul.style.top = '-180px';
		menu_btn.classList.remove('is-active');


	} else {
		menu_btn.classList.add('is-active');
		ul.style.top = '80px';

		ul.addEventListener('click', () => {
			ul.style.top = '-180px';
			menu_btn.classList.remove('is-active');

		});
	}
});

// Элементы на странице
const slider = document.querySelector('#slider');
const sliderItems = Array.from(slider.children);
const btnNext = document.querySelector('#next');
const btnPrev = document.querySelector('#prev');

sliderItems.forEach(function (slide, index) {
	// Скрываем все слайды, кроме первого
	if (index !== 0) slide.classList.add('hidden');

	// Добавляем индексы
	slide.dataset.index = index;

	// Добавляем data атрибут active для первого / активного слайда
	sliderItems[0].setAttribute('data-active', '');

	// Клик по слайдам
	slide.addEventListener('click', function () {
		showNextSlide('next');
	});
});

btnNext.onclick = function () {
	console.log('Next Slide');
	showNextSlide('next');
};

btnPrev.onclick = function () {
	console.log('Prev Slide');
	showNextSlide('prev');
};

function showNextSlide(direction) {
	// Скрываем текущий слайд
	const currentSlide = slider.querySelector('[data-active]');
	const currentSlideIndex = +currentSlide.dataset.index;
	currentSlide.classList.add('hidden');
	currentSlide.removeAttribute('data-active');

	// Рассчитываем след индекс в зависимости от направления движения
	let nextSlideIndex;
	if (direction === 'next') {
		nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
	} else if (direction === 'prev') {
		nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
	}

	// Показываем след слайд
	const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
	nextSlide.classList.remove('hidden');
	nextSlide.setAttribute('data-active', '');
}





