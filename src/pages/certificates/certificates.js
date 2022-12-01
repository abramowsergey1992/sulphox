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
