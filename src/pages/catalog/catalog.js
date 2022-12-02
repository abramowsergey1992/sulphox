if (document.querySelector(".catalog")) {
	document.querySelectorAll(".catalog__wrap").forEach((catalog) => {
		let moreBtn = catalog.querySelector(".catalog__more");
		console.log("moreBtn", moreBtn);
		let pageLength = moreBtn.dataset.pagelenght;
		let items = catalog.querySelectorAll(".catalog-1,.catalog-2");
		moreRender(pageLength, items, true, moreBtn);
		moreBtn.addEventListener("click", function () {
			moreRender(pageLength, items, false, moreBtn);
		});
	});
}
