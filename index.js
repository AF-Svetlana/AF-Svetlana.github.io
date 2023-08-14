const menu=document.querySelector('.menu');
const navbar=document.querySelector('.navbar');
menu.addEventListener('click',()=>{
	navbar.classList.toggle('active')
	menu.classList.toggle('bx-x')
})
window.addEventListener("scroll",()=>{
	const header=document.querySelector('.header')
	header.classList.toggle("sticky",window.scrollY>100)
	{
		navbar.classList.remove('active')
		menu.classList.remove('bx-x')
	}
})

const span = document.querySelector('.btn-box');
span.addEventListener('click', function() {
	alert('Возникла ошибка. Попробуйте еще раз.')
})

const nav = document.querySelector('.navbar');
nav.addEventListener('click', function() {
	alert('Страница будет добавлена позже.')
})
