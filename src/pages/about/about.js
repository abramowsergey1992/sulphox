// Слайдер история
if (document.querySelector(".history")) {
	document.querySelectorAll(".history").forEach((history) => {
		let slides = history.querySelectorAll(".swiper-slide");
		let paginatorWrap = history.querySelector(".history__pagination");
		let progress = history.querySelector(".history__progress-line");

		//создаем слайдер
		const swiper = new Swiper(history.querySelector(".history-slider"), {
			slidesPerView: 1,
			slideToClickedSlide: true,
			centeredSlides: true,
			on: {
				slideChange: function () {
					progress.style.width =
						(100 / (slides.length - 1)) * this.activeIndex + "%";
					for (let index = 1; index <= slides.length; index++) {
						if (index < this.activeIndex + 1) {
							history
								.querySelector("._p-" + index)
								.classList.add("_past");
							history
								.querySelector("._p-" + index)
								.classList.remove("_now");
						} else if (index == this.activeIndex + 1) {
							history
								.querySelector("._p-" + index)
								.classList.remove("_past");
							history
								.querySelector("._p-" + index)
								.classList.add("_now");
						} else {
							history
								.querySelector("._p-" + index)
								.classList.remove("_past", "_now");
						}
					}
				},
			},
		});

		// создаем точки прогресса
		for (let index = 1; index <= slides.length; index++) {
			pagi = document.createElement("div");
			pagi.classList.add("history__pagi");
			pagi.classList.add("_p-" + index);
			index == 1 ? pagi.classList.add("_now") : "";
			pagi.innerHTML =
				"<span>" +
				slides[index - 1].querySelector(".history-it__title")
					.innerText +
				"</span>";
			paginatorWrap.append(pagi);
			pagi.addEventListener("click", function () {
				swiper.slideTo(index - 1);
			});
		}
	});
}

// Фильт-слайдер Наших проектов
if (document.querySelector(".ours-project")) {
	document.querySelectorAll(".ours-project").forEach((item) => {
		let pagination = item.querySelector(".ours-project__slider-paginator");
		const swiper = new Swiper(item.querySelector(".ours-project__slider"), {
			speed: 400,
			observer: true,
			spaceBetween: 10,
			threshold: 40,
			observeParents: true,
			navigation: {
				nextEl: item.querySelector(".ours-project__slider-next"),
				prevEl: item.querySelector(".ours-project__slider-prev"),
			},
			on: {
				init: function (swiper) {
					pagination.innerHTML = `${String(
						swiper.realIndex + 1
					).padStart(
						2,
						"0"
					)} <span class="project__slider-paginator-divider"></span> ${String(
						item.querySelectorAll(".swiper-slide:not(.d-none)")
							.length
					).padStart(2, "0")}`;
				},

				slideChange: function (swiper) {
					pagination.innerHTML = `${String(
						swiper.realIndex + 1
					).padStart(
						2,
						"0"
					)} <span class="project__slider-paginator-divider"></span> ${String(
						item.querySelectorAll(".swiper-slide:not(.d-none)")
							.length
					).padStart(2, "0")}`;
				},
			},
		});
		let filters = item.querySelectorAll(".ours-project__filter");
		filters.forEach((filter) => {
			filter.addEventListener("click", function () {
				filters.forEach((filter) => {
					filter.classList.remove("_active");
				});
				filter.classList.add("_active");
				if (filter.dataset.filter == "all") {
					document
						.querySelectorAll(".ours-project .ours-project__slide")
						.forEach((slide) => {
							slide.classList.remove("d-none");
						});
				} else {
					document
						.querySelectorAll(".ours-project .ours-project__slide")
						.forEach((slide) => {
							if (filter.dataset.filter == slide.dataset.filter) {
								slide.classList.remove("d-none");
							} else {
								slide.classList.add("d-none");
							}
						});
					swiper.update();
				}
				pagination.innerHTML = `${String(swiper.realIndex + 1).padStart(
					2,
					"0"
				)} <span class="project__slider-paginator-divider"></span> ${String(
					item.querySelectorAll(".swiper-slide:not(.d-none)").length
				).padStart(2, "0")}`;
			});
		});
	});
}
