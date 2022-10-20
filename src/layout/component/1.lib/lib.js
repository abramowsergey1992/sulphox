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
