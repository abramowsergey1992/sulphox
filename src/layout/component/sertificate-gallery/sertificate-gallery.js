// Галлерея сертификатоф
if (document.querySelector(".sertificate-gallery")) {
	document.querySelectorAll(".sertificate-gallery").forEach((gallery) => {
		const swiper = new Swiper(gallery, {
			spaceBetween: 20,
			breakpoints: {
				320: {
					slidesPerView: 1.3,
				},
				480: {
					slidesPerView: 2.1,
				},
				740: {
					slidesPerView: 3,
				},
				992: {
					slidesPerView: 4,
				},
			},
		});
	});
}
$(function () {
	$(".gallery-popup").magnificPopup({
		gallery: {
			enabled: true,
		},
		delegate: "a",
		type: "image",
	});
});
