document.querySelectorAll(".project__slider").forEach((item) => {
	let length = item.querySelectorAll(".swiper-slide").length;
	let pagination = item.querySelector(".project__slider-paginator");
	setTimeout(function () {
		let swiper = new Swiper(item, {
			effect: "fade",
			speed: 1000,
			loop: true,
			observeParents: true,
			observer: true,
			on: {
				slideChange: function (swiper) {
					pagination.innerHTML = `${String(
						swiper.realIndex + 1
					).padStart(
						2,
						"0"
					)} <span class="project__slider-paginator-divider"></span> ${String(
						length
					).padStart(2, "0")}`;
				},
			},
			autoplay: {
				delay: 3000,
			},
		});
	}, 1000 * Math.floor(Math.random() * (4 - 1 + 1)) + 1);
});
