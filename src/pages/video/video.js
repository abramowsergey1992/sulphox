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
