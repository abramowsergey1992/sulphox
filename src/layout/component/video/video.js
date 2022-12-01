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
