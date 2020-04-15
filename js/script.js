M.AutoInit();
document.addEventListener('DOMContentLoaded', function () {
	var elems = document.querySelectorAll('.slider');
	var instances = M.Slider.init(elems);
});

toggleModel = () => {
	let ele = document.querySelector('.modal');
	const instance = M.Modal.init(ele);
	instance.open();
};
const darkTheme = () => {
	document.querySelector('body').style =
		'background-color: #6f4036 !important;';
	document.querySelectorAll('p').style = 'color: #fff !important';
	document.querySelectorAll('.header').style = 'color: #ffffff !important';
	document.querySelectorAll('.main').style = 'color: #6f4036 !important';
};

darkTheme();
