document.querySelectorAll(".news-page").forEach((item) => {
	let items = item.querySelectorAll(".news-item");
	let pagelength = item.querySelector(".news-page__row").dataset.pagelength;
	let moreBtn = item.querySelector(".news-page__more");
	let filters = item.querySelectorAll(".ours-project__filter");
	filterRender(pagelength, items, "all", true, moreBtn);
	moreBtn.addEventListener("click", function () {
		filterRender(
			pagelength,
			items,
			item.querySelector(".ours-project__filter._active").dataset.filter,
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
