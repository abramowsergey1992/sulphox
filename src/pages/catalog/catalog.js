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
