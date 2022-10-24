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
