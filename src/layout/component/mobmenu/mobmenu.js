let mobmenu = document.querySelector(".mobmenu");
document.querySelectorAll(".mobmenu__menu-drop-title").forEach((title) => {
	let parrent = title.closest(".mobmenu__menu-li");
	title.addEventListener("click", function () {
		mobmenu.classList.toggle("_open-item");
		parrent.classList.toggle("_open");
	});
});
document
	.querySelector(".header__mobmenu")
	.addEventListener("click", function () {
		fadeIn(mobmenu, 500, "flex");
	});
document
	.querySelector(".header__mobmenu-close")
	.addEventListener("click", function () {
		fadeOut(mobmenu, 500, "flex");
	});
