// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $
// import Swiper from 'swiper'
// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {
	
	const swiper = new Swiper(".mySwiper", {
		centeredSlides: true,
		autoHeight: true,
		autoplay: {
			delay: 10000,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".swiper-pagination",
			dynamicBullets: true,
		},
	})

})