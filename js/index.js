let btn = document.querySelector('.form-search__btn');
let field = document.querySelector('.form-search__field');

function btnHandler(e) {
	e.preventDefault();
	field.classList.toggle('field-open');
	field.classList.toggle('animated');
}

btn.addEventListener('click', btnHandler);
