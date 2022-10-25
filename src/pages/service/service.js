// табы решений
if (document.querySelector(".service-slider")) {
	document.querySelectorAll(".service-slider").forEach((item) => {
		const swiper = new Swiper(
			item.querySelector(".service-slider__slide"),
			{
				speed: 400,
				allowTouchMove: false,
				// effect: "fade",
				autoHeight: true,
				fadeEffect: {
					crossFade: true,
				},
			}
		);

		let filters = item.querySelectorAll(".service-slider__tab");
		filters.forEach((filter) => {
			filter.addEventListener("click", function () {
				filters.forEach((filter) => {
					filter.classList.remove("_active");
				});
				filter.classList.add("_active");
				swiper.slideTo(filter.dataset.slide);
			});
		});
	});
}
