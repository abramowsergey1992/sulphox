// Слайдер история
if (document.querySelector(".history")) {
	document.querySelectorAll(".history").forEach((history) => {
		let slides = history.querySelectorAll(".swiper-slide");
		let paginatorWrap = history.querySelector(".history__pagination");
		let progress = history.querySelector(".history__progress-line");

		//создаем слайдер
		const swiper = new Swiper(history.querySelector(".history-slider"), {
			slidesPerView: 1,
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
		const swiper = new Swiper(item.querySelector(".ours-project__slider"), {
			speed: 400,
			allowTouchMove: false,
		});
		let filters = item.querySelectorAll(".ours-project__filter");
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


//квиз
if (document.querySelector(".quiz-slider")) {
	document.querySelectorAll(".quiz-slider").forEach((quiz) => {
		let slides = quiz.querySelectorAll(".swiper-slide");
		let paginatorWrap = quiz.querySelector(".quiz-slider__paginator");
		let progress = quiz.querySelector(".quiz-slider__progress-line");

		// создаем точки прогресса
		for (let index = 1; index <= slides.length; index++) {
			pagi = document.createElement("div");
			pagi.classList.add("quiz-slider__pagi");
			pagi.classList.add("_p-" + index);
			index == 1 ? pagi.classList.add("_now") : "";
			pagi.innerText = index <= 10 ? "0" + index : index;
			paginatorWrap.append(pagi);
		}
		//создаем слайдер
		const swiper = new Swiper(quiz, {
			allowTouchMove: false,
			on: {
				slideChange: function () {
					progress.style.width =
						(100 / (slides.length - 1)) * this.activeIndex + "%";
					for (let index = 1; index <= slides.length; index++) {
						if (index < this.activeIndex + 1) {
							quiz.querySelector("._p-" + index).classList.add(
								"_past"
							);
							quiz.querySelector("._p-" + index).classList.remove(
								"_now"
							);
						} else if (index == this.activeIndex + 1) {
							quiz.querySelector("._p-" + index).classList.remove(
								"_past"
							);
							quiz.querySelector("._p-" + index).classList.add(
								"_now"
							);
						} else {
							quiz.querySelector("._p-" + index).classList.remove(
								"_past",
								"_now"
							);
						}
					}
				},
			},
		});

		//кнопка далее
		quiz.querySelectorAll(".quiz-radio__input").forEach((inpt) => {
			inpt.addEventListener("change", function () {
				this.closest(".swiper-slide")
					.querySelector(".quiz-slider__next ")
					.removeAttribute("disabled");
			});
		});
		//кнопка далее
		quiz.querySelectorAll(".quiz-slider__next ").forEach((next) => {
			next.addEventListener("click", function () {
				swiper.slideNext();
			});
		});
	});
}

// Галлерея о компании
if (document.querySelector(".kns-about__slider")) {
	document.querySelectorAll(".kns-about__slider").forEach((slider) => {
		const swiper = new Swiper(slider, {
			speed: 400,
			loop: true,
			autoplay: {
				delay: 5000,
			},
			navigation: {
				nextEl: slider.querySelector(".kns-about__slider-next"),
				prevEl: slider.querySelector(".kns-about__slider-prev"),
			},
		});
	});
}

// Фильт-слайдер новостей
if (document.querySelector(".news")) {
	document.querySelectorAll(".news").forEach((news) => {
		const swiper = new Swiper(news.querySelector(".news-slider"), {
			speed: 400,
			allowTouchMove: false,
		});
		let filters = news.querySelectorAll(".news__filter");
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

document.querySelectorAll(".news-page").forEach((item) => {
	let items = item.querySelectorAll(".news-item,.article-item");
	let pagelength = item.querySelector(".news-page__row").dataset.pagelength;
	let moreBtn = item.querySelector(".news-page__more");
	let filters = item.querySelectorAll(".news-page__filter");
	filterRender(pagelength, items, "all", true, moreBtn);
	moreBtn.addEventListener("click", function () {
		filterRender(
			pagelength,
			items,
			item.querySelector(".news-page__filter._active").dataset.filter,
			false,
			moreBtn
		);
	});
	filters.forEach((filter) => {
		filter.addEventListener("click", function () {
			if (!filter.classList.contains("_active")) {
				filters.forEach((filter) => {
					filter.classList.remove("_active");
				});
				filter.classList.add("_active");
				filterRender(
					pagelength,
					items,
					filter.dataset.filter,
					true,
					moreBtn
				);
			}
		});
	});
});

$(function(){})
$(function(){})
const fadeIn = (el, timeout, display) => {
	el.style.opacity = 0;
	el.style.display = display || "block";
	el.style.transition = `opacity ${timeout}ms`;
	setTimeout(() => {
		el.style.opacity = 1;
	}, 10);
};
const fadeOut = (el, timeout) => {
	el.style.opacity = 1;
	el.style.transition = `opacity ${timeout}ms`;
	el.style.opacity = 0;

	setTimeout(() => {
		el.style.display = "none";
	}, timeout);
};

function filterRender(
	pageLength,
	items,
	filter = "all",
	reload = false,
	moreBtn
) {
	if (reload) {
		items.forEach((item) => {
			item.classList.add("_d-none");
		});
	}
	let count = 1;

	items.forEach((item) => {
		if (filter == "all" || item.dataset.filter == filter) {
			if (item.classList.contains("_d-none") && count <= pageLength) {
				item.classList.remove("_d-none");
				count++;
			} else {
				// item.classList.add("_d-none");
			}
		} else {
			item.classList.add("_d-none");
		}
	});
	if (count <= pageLength) {
		moreBtn.classList.add("_d-none");
	} else {
		moreBtn.classList.remove("_d-none");
	}
}

$(function(){})
document.querySelectorAll(".btn-arrow").forEach((btn) => {
	btn.innerHTML =
		btn.innerText +
		'<svg width="14" height="11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m7.593 8.393-.707.707L8.3 10.514l.707-.707-1.414-1.414ZM11.9 5.5l.707.707.707-.707-.707-.707-.707.707ZM9.007 1.193 8.3.486 6.886 1.9l.707.707 1.414-1.414Zm0 8.614 3.6-3.6-1.414-1.414-3.6 3.6 1.414 1.414Zm3.6-5.014-3.6-3.6-1.414 1.414 3.6 3.6 1.414-1.414ZM11.9 4.5H.2v2h11.7v-2Z"/></svg>';
});

window.addEventListener("scroll", function () {
	this.scrollY > 50
		? document.body.classList.add("_not-top")
		: document.body.classList.remove("_not-top");
});

let mobmenu = document.querySelector(".mobmenu");
document.querySelectorAll(".mobmenu__menu-drop-title").forEach((title) => {
	let parrent = title.closest(".mobmenu__menu-li");
	title.addEventListener("click", function () {
		mobmenu.classList.toggle("_open-item");
		parrent.classList.toggle("_open");
	});
});
document
	.querySelector(".header__mobmenu")
	.addEventListener("click", function () {
		fadeIn(mobmenu, 500, "flex");
	});
document
	.querySelector(".header__mobmenu-close")
	.addEventListener("click", function () {
		fadeOut(mobmenu, 500, "flex");
	});

$(function(){})
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

// Галлерея сертификатоф
if (document.querySelector(".sertificate-gallery")) {
	document.querySelectorAll(".sertificate-gallery").forEach((gallery) => {
		const swiper = new Swiper(gallery, {
			spaceBetween: 20,
			breakpoints: {
				320: {
					slidesPerView: 1.1,
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

document.querySelectorAll(".video").forEach((item) => {
	let video = item.querySelector("video");
	let play = document.createElement("div");
	play.classList.add("video__play");
	play.innerHTML =
		'<svg width="32" height="44" viewBox="0 0 32 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 42V2L30 22L2 42Z" stroke="white" stroke-width="3" stroke-linejoin="round"/></svg>';
	play.addEventListener("click", function () {
		video.play();
		fadeOut(play, 300, "flex");
	});
	item.append(play);
});
