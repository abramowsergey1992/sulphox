$(function(){})
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

$(function(){})

window.addEventListener("scroll", function () {
	this.scrollY > 50
		? document.body.classList.add("_not-top")
		: document.body.classList.remove("_not-top");
});

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
