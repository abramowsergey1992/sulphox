// Фильт-слайдер Наших проектов
if (document.querySelector(".project-complite__filters")) {
	let filters = document.querySelectorAll(".project-complite__filter");
	let projects = document.querySelectorAll(".project-list .project");
	filters.forEach((filter) => {
		filter.addEventListener("click", function () {
			filters.forEach((filter) => {
				filter.classList.remove("_active");
			});
			let selectFilter = filter.dataset.filter;
			filter.classList.add("_active");
			projects.forEach((project) => {
				if (
					selectFilter == "all" ||
					project.dataset.filter == selectFilter
				) {
					project.classList.remove("_d-none");
					let length =
						project.querySelectorAll(".swiper-slide").length;
					let pagination = project.querySelector(
						".project__slider-paginator"
					);
					setTimeout(function () {
						let swiper = new Swiper(
							project.querySelector(".swiper"),
							{
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
							}
						);
					}, 1000 * Math.floor(Math.random() * (4 - 1 + 1)) + 1);
					// slideDown(project, 400);
				} else {
					project.classList.add("_d-none");
					project.querySelector(".swiper").swiper.destroy();
					// slideUp(project, 400);
				}
			});
		});
	});
}
