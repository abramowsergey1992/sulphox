// Метод отчистки слайдер
if (document.querySelector(".cleaning-method")) {
	document.querySelectorAll(".cleaning-method").forEach((method) => {
		const swiper = new Swiper(
			method.querySelector(".cleaning-method__swiper"),
			{
				speed: 400,
				allowTouchMove: false,
			}
		);
		let filters = method.querySelectorAll(".cleaning-method__btn");
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
