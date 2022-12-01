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
		const swiper = new Swiper(item.querySelector(".ours-project__slider"), {
			speed: 400,
			observer: true,
			spaceBetween: 10,
			observeParents: true,
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
								console.log(
									slide.querySelector(".swiper").swiper
								);
								slide.querySelector(".swiper").swiper.update();
							} else {
								slide.classList.add("d-none");
							}
						});
					swiper.update();
				}
			});
		});
	});
}


if (document.querySelector(".catalog")) {
	document.querySelectorAll(".catalog").forEach((catalog) => {
		let moreBtn = catalog.querySelector(".catalog__more");
		let pageLength = moreBtn.dataset.pagelenght;
		let items = catalog.querySelectorAll(".catalog-1,.catalog-2");
		moreRender(pageLength, items, true, moreBtn);
		moreBtn.addEventListener("click", function () {
			moreRender(pageLength, items, false, moreBtn);
		});
	});
}


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

if (document.querySelector(".video-page ")) {
	document.querySelectorAll(".video-page ").forEach((page) => {
		let moreBtn = page.querySelector(".video-page__more");
		let pageLength = moreBtn.dataset.pagelenght;
		let items = page.querySelectorAll(".video-it");
		moreRender(pageLength, items, true, moreBtn);
		moreBtn.addEventListener("click", function () {
			moreRender(pageLength, items, false, moreBtn);
		});
	});
}

$(function () {
	$(".mp").magnificPopup({
		type: "image",
	});
});

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

$(function () {
	if ($("#contact-form").length) {
		let validContacnt = $("#contact-form").validate({
			errorPlacement: function (error, element) {},
			submitHandler: function (form) {
				$(form).find(".btn").attr("disabled", "disabled");
				$.ajax({
					url: $(form).attr("action"),
					data: $(form).serialize(),
					method: "POST",
					headers: {
						"X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
							"content"
						),
					},
					context: document.body,
					success: function () {
						alert("Форма отправленна успешно");
						$(form).find(".btn").removeAttr("disabled");
					},
					error: function () {
						alert("Ошибка");
						$(form).find(".btn").removeAttr("disabled");
					},
				});
			},
		});
	}
});

$(function(){})
// слайдер продукта
if (document.querySelector(".product-gallery")) {
	document.querySelectorAll(".product-gallery").forEach((product) => {
		let slides = product.querySelectorAll(
			".product-gallery-top  .swiper-slide"
		);
		if (slides.length > 1) {
			let detail = product.closest(".detail");
			detail.classList.add("_with-gallery");
			product.innerHTML +=
				'<div class="product-gallery-thumb-wrap"><div class="product-gallery-thumb-wrap__prev"></div><div class="product-gallery-thumb swiper">' +
				product.querySelector(".product-gallery-top ").innerHTML +
				'</div><div class="product-gallery-thumb-wrap__next"></div></div>';
			let top = product.querySelector(".product-gallery-top");
			let thumb = product.querySelector(".product-gallery-thumb");
			let prev = product.querySelector(
				".product-gallery-thumb-wrap__prev"
			);
			let next = product.querySelector(
				".product-gallery-thumb-wrap__next"
			);

			const swiperThumb = new Swiper(thumb, {
				spaceBetween: 12,
				setWrapperSize: true,
				// loop: true,
				watchSlidesProgress: true,
				slidesPerView: 3,
			});
			const swiperTop = new Swiper(top, {
				navigation: {
					nextEl: next,
					prevEl: prev,
				},
				spaceBetween: 12,
				setWrapperSize: true,
				slidesPerView: 1,
				thumbs: {
					swiper: swiperThumb,
				},
			});
		}
	});
}

// слайдер решений
if (document.querySelector(".solutions-slider")) {
	document.querySelectorAll(".solutions-slider").forEach((block) => {
		let slider = block.querySelector(".solutions-slider__slider");
		let prev = block.querySelector(".solutions-slider__nav-prev");
		let next = block.querySelector(".solutions-slider__nav-next");
		const swiper = new Swiper(slider, {
			navigation: {
				nextEl: next,
				prevEl: prev,
			},
			spaceBetween: 21,
			setWrapperSize: true,
			slidesPerView: "auto",
		});
	});
}

//квиз
if (document.querySelector(".quiz-slider")) {
	// let qtitle = <h2 class="quiz-slider__title"></h2>;
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

		// quiz.querySelectorAll(".quiz-slider__next ").forEach((next) => {
		// 	next.addEventListener("click", function () {
		// 		swiper.slideNext();
		// 	});
		// });
	});
	//кнопка далее
	$(document).on("click", ".quiz-radio__input", function () {
		this.addEventListener("change", function () {
			this.closest(".swiper-slide")
				.querySelector(".quiz-slider__next ")
				.removeAttribute("disabled");
		});
	});
	$(document).on("click", ".quiz-slider__next", function () {
		let wrapper = $(this).closest(".swiper");
		let nextSlide = $(this).closest(".swiper-slide").next(".swiper-slide");
		let swiper = $(this).closest(".swiper")[0].swiper;
		if (!$(this)[0].hasAttribute("disabled")) {
			let $slide = $(this).closest(".swiper-slide");
			if ($(this).attr("status") == "step") {
				$.ajax({
					url: $(this).attr("url"),
					data: {
						step: $(this).attr("step"),
						answer: $slide.find(".quiz-radio__input").val(),
					},
					method: $(this).attr("method"),
					headers: {
						"X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
							"content"
						),
					},
					context: document.body,
					success: function (data) {
						console.log(data);
						let html = `<h2 class="quiz-slider__title">${data.title}</h2>`;
						data.variants.forEach(function (i) {
							html += `<label class="quiz-radio">
								<input class="quiz-radio__input" type="radio" name="${i.name}" value="${i.value}"><span class="quiz-radio__indicator"> </span><span class="quiz-radio__text">${i.text}</span>
							</label>`;
						});
						html += `<button class="quiz-slider__next btn-arrow" type="button" disabled="" status="${
							data.status
						}" url="${data.url}" method="${data.method}">${
							data.status == "step" ? "Далее" : "Завершить"
						}<svg width="14" height="11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m7.593 8.393-.707.707L8.3 10.514l.707-.707-1.414-1.414ZM11.9 5.5l.707.707.707-.707-.707-.707-.707.707ZM9.007 1.193 8.3.486 6.886 1.9l.707.707 1.414-1.414Zm0 8.614 3.6-3.6-1.414-1.414-3.6 3.6 1.414 1.414Zm3.6-5.014-3.6-3.6-1.414 1.414 3.6 3.6 1.414-1.414ZM11.9 4.5H.2v2h11.7v-2Z"></path></svg></button>`;
						nextSlide.html(html);
						console.log("swiper", swiper);
						swiper.slideNext();
					},
					error: function () {},
				});
			} else {
				$(this).closest("form").submit();
			}
		}
	});
}

// Галлерея о компании
if (document.querySelector(".front-about__slider")) {
	document.querySelectorAll(".front-about__slider").forEach((slider) => {
		const swiper = new Swiper(slider, {
			speed: 400,
			loop: true,
			autoplay: {
				delay: 5000,
			},
			navigation: {
				nextEl: slider.querySelector(".front-about__slider-next"),
				prevEl: slider.querySelector(".front-about__slider-prev"),
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

$(function(){})

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

$(function(){})
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

$(document).ready(function () {
	$(".video-it__link").magnificPopup({
		disableOn: 700,
		type: "iframe",
		mainClass: "mfp-fade",
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
	});
});
if (document.querySelector(".sertificate-block")) {
	document.querySelectorAll(".sertificate-block").forEach((catalog) => {
		let moreBtn = catalog.querySelector(".sertificate-block__more");
		let pageLength = moreBtn.dataset.pagelenght;
		let items = catalog.querySelectorAll(".sertificate-it");
		moreRender(pageLength, items, true, moreBtn);
		moreBtn.addEventListener("click", function () {
			moreRender(pageLength, items, false, moreBtn);
		});
	});
}

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
let slideUp = (target, duration = 500) => {
	target.style.transitionProperty = "height, margin, padding";
	target.style.transitionDuration = duration + "ms";
	target.style.boxSizing = "border-box";
	target.style.height = target.offsetHeight + "px";
	target.offsetHeight;
	target.style.overflow = "hidden";
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	window.setTimeout(() => {
		target.style.display = "none";
		target.style.removeProperty("height");
		target.style.removeProperty("padding-top");
		target.style.removeProperty("padding-bottom");
		target.style.removeProperty("margin-top");
		target.style.removeProperty("margin-bottom");
		target.style.removeProperty("overflow");
		target.style.removeProperty("transition-duration");
		target.style.removeProperty("transition-property");
		//alert("!");
	}, duration);
};

/* SLIDE DOWN */
let slideDown = (target, duration = 500) => {
	if (window.getComputedStyle(target).display === "none") {
		target.style.removeProperty("display");
		let display = window.getComputedStyle(target).display;
		if (display === "none") display = "block";
		target.style.display = display;
		let height = target.offsetHeight;
		target.style.overflow = "hidden";
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		target.offsetHeight;
		target.style.boxSizing = "border-box";
		target.style.transitionProperty = "height, margin, padding";
		target.style.transitionDuration = duration + "ms";
		target.style.height = height + "px";
		target.style.removeProperty("padding-top");
		target.style.removeProperty("padding-bottom");
		target.style.removeProperty("margin-top");
		target.style.removeProperty("margin-bottom");
		window.setTimeout(() => {
			target.style.removeProperty("height");
			target.style.removeProperty("overflow");
			target.style.removeProperty("transition-duration");
			target.style.removeProperty("transition-property");
		}, duration);
	}
};

/* TOOGLE */
var slideToggle = (target, duration = 500) => {
	if (window.getComputedStyle(target).display === "none") {
		return slideDown(target, duration);
	} else {
		return slideUp(target, duration);
	}
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

function moreRender(pageLength, items, reload = false, moreBtn) {
	if (reload) {
		items.forEach((item) => {
			item.classList.add("_d-none");
		});
	}
	let count = 1;

	items.forEach((item) => {
		if (item.classList.contains("_d-none") && count <= pageLength) {
			item.classList.remove("_d-none");
			count++;
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
$(function () {
	$("._mask-phone").each(function () {
		Inputmask("+7 (999) 999-99-99").mask(this);
	});
	$("._mask-date").each(function () {
		Inputmask("99.99.9999").mask(this);
	});
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

window.addEventListener("scroll", function () {
	this.scrollY > 50
		? document.body.classList.add("_not-top")
		: document.body.classList.remove("_not-top");
});

$(function(){})
$(function () {
	$(".popup__close,.popup__overlay").click(function () {
		let popup = $(this).closest(".popup");
		popup.removeClass("_animate");
		setTimeout(function () {
			popup.removeClass("_display");
		}, 500);
	});
	$("[data-popup]").click(function (e) {
		e.preventDefault();
		$(".popup").removeClass("_display", "_animate");
		let popup = $($(this).data("popup"));
		popup.attr("data-state", "");
		popup.find("input").val("");
		popup.find("input").removeClass("valid", "error");
		popup.addClass("_display");
		if ($(this).data("popup") == "#feedback") {
			popup.find("h2").text($(this).text());
		}
		setTimeout(function () {
			popup.addClass("_animate");
		}, 500);
	});

	document.addEventListener("aos:in", ({ detail }) => {
		console.log("animated in", detail);
	});
	$("._mask-phone").each(function () {
		Inputmask("+7 (999) 999-99-99").mask(this);
	});
	$("._mask-date").each(function () {
		Inputmask("99.99.9999").mask(this);
	});
	$("._mask-int").each(function () {
		Inputmask("9{1,10}").mask(this);
	});
	if ($("#form-feedback").length) {
		let validFeedback = $("#form-feedback").validate({
			errorPlacement: function (error, element) {},
			submitHandler: function (form) {
				$(".form-feedback__sbmt").attr("disabled", "disabled");
				$.ajax({
					url: $(form).attr("action"),
					data: $(form).serialize(),
					method: "POST",
					headers: {
						"X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
							"content"
						),
					},
					context: document.body,
					success: function () {
						$(".popup#feedback").removeClass("_display");
						$(".popup#feedback").removeClass("_animate");
						$(".form-feedback__sbmt").removeAttr("disabled");
						let popup = $(".popup#succes");
						popup.addClass("_display");
						setTimeout(function () {
							popup.addClass("_animate");
						}, 500);
					},
					error: function () {
						$(".popup#feedback").removeClass("_display");
						$(".popup#feedback").removeClass("_animate");
						$(".form-feedback__sbmt").removeAttr("disabled");
						let popup = $(".popup#error");
						popup.addClass("_display");
						setTimeout(function () {
							popup.addClass("_animate");
						}, 500);
					},
				});
			},
		});
	}
});

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
			preventClicks: false,
			preventClicksPropagation: false,
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

document.querySelectorAll(".video").forEach((item) => {
	let video = item.querySelector("video");
	let play = document.createElement("div");
	play.classList.add("video__play");
	play.innerHTML =
		'<svg width="32" height="44" viewBox="0 0 32 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 42V2L30 22L2 42Z" stroke="white" stroke-width="3" stroke-linejoin="round"/></svg>';
	video.addEventListener("click", function () {
		video.pause();
		fadeIn(play, 300, "flex");
	});
	play.addEventListener("click", function () {
		video.play();
		fadeOut(play, 300, "flex");
	});
	item.append(play);
});
