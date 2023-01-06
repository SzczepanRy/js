const myform = document.querySelector('.add_form');
const mylist = document.querySelector('.list');
const xylist = document.querySelector('.xylist');
const del = document.querySelectorAll('.aside');
const cords = document.querySelector('.cords');
const track = document.querySelector('.track');
const x = document.querySelector('.x');
const y = document.querySelector('.y');

myform.addEventListener('submit', (e) => {
	e.preventDefault();
	let val = myform.querySelector('input').value;

	const li = document.createElement('li');
	const div = document.createElement('div');
	div.textContent = 'del div';
	li.textContent = val;
	div.classList.add('aside');
	li.appendChild(div);
	mylist.appendChild(li);
});

mylist.addEventListener('click', (e) => {
	if (e.target.className == 'aside') {
		const li = e.target.parentElement;
		mylist.removeChild(li);
	}
});

track.addEventListener('mousemove', (e) => {
	y.firstElementChild.textContent = e.pageY - e.currentTarget.offsetTop;
	x.firstElementChild.textContent = e.pageX - e.currentTarget.offsetLeft;
});
track.addEventListener('click', (e) => {
	const xdiv = document.createElement('div');
	const xp = document.createElement('p');

	xdiv.textContent = `X : ${e.pageX - e.currentTarget.offsetLeft}`;
	const ydiv = document.createElement('div');

	ydiv.textContent = ` Y : ${e.pageY - e.currentTarget.offsetTop}`;
	ydiv.classList.add('y');

	const lixy = document.createElement('li');
	lixy.appendChild(xdiv);
	lixy.appendChild(ydiv);
	xylist.appendChild(lixy);

	//	y.firstElementChild.textContent = x.firstElementChild.textContent;
});
