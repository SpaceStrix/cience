let btn = document.querySelector('.form-search__btn');
let field = document.querySelector('.form-search__field');

function btnHandler(e) {
	e.preventDefault();
	field.classList.toggle('field-open');
}

btn.addEventListener('click', btnHandler);
