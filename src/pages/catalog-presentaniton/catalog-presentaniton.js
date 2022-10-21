// Фильт-слайдер Наших проектов
if (document.querySelector(".presentations")) {
	document.querySelectorAll(".presentations").forEach((item) => {
		const swiper = new Swiper(
			item.querySelector(".presentations__slider"),
			{
				speed: 400,
				allowTouchMove: false,
			}
		);
		let filters = item.querySelectorAll(".presentations__filter");
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
