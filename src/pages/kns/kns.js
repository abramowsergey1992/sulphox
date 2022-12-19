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
	$(document).on("click", ".quiz-slider__prev", function () {
		let wrapper = $(this).closest(".swiper");
		let swiper = $(this).closest(".swiper")[0].swiper;
		swiper.slidePrev();
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
						html += `<div class="quiz-slider__btns"><button class="quiz-slider__prev btn-arrow" type="button">НАЗАД<svg width="14" height="11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m7.593 8.393-.707.707L8.3 10.514l.707-.707-1.414-1.414ZM11.9 5.5l.707.707.707-.707-.707-.707-.707.707ZM9.007 1.193 8.3.486 6.886 1.9l.707.707 1.414-1.414Zm0 8.614 3.6-3.6-1.414-1.414-3.6 3.6 1.414 1.414Zm3.6-5.014-3.6-3.6-1.414 1.414 3.6 3.6 1.414-1.414ZM11.9 4.5H.2v2h11.7v-2Z"></path></svg></button><button class="quiz-slider__next btn-arrow" type="button" disabled="" status="${
							data.status
						}" url="${data.url}" method="${data.method}">${
							data.status == "step" ? "Далее" : "Завершить"
						}<svg width="14" height="11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m7.593 8.393-.707.707L8.3 10.514l.707-.707-1.414-1.414ZM11.9 5.5l.707.707.707-.707-.707-.707-.707.707ZM9.007 1.193 8.3.486 6.886 1.9l.707.707 1.414-1.414Zm0 8.614 3.6-3.6-1.414-1.414-3.6 3.6 1.414 1.414Zm3.6-5.014-3.6-3.6-1.414 1.414 3.6 3.6 1.414-1.414ZM11.9 4.5H.2v2h11.7v-2Z"></path></svg></button></div>`;
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
