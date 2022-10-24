// табы решений
if (document.querySelector(".sulutions-tabs")) {
	document.querySelectorAll(".sulutions-tabs").forEach((item) => {
		const swiper = new Swiper(
			item.querySelector(".sulutions-tabs__slider"),
			{
				speed: 400,
				allowTouchMove: false,
				effect: "fade",
				autoHeight: true,
				fadeEffect: {
					crossFade: true,
				},
			}
		);

		let line = item.querySelector(".sulutions-tabs__line");
		let active = item.querySelector(".sulutions-tabs__tab._active");

		line.style.left = active.offsetLeft + "px";
		line.style.width = active.offsetWidth + "px";
		let filters = item.querySelectorAll(".sulutions-tabs__tab");
		filters.forEach((filter) => {
			filter.addEventListener("click", function () {
				filters.forEach((filter) => {
					filter.classList.remove("_active");
				});
				line.style.left = filter.offsetLeft + "px";
				line.style.width = filter.offsetWidth + "px";
				filter.classList.add("_active");
				swiper.slideTo(filter.dataset.slide);
			});
		});
	});
}
