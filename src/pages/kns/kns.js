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
