window.addEventListener("scroll", function () {
	this.scrollY > 50
		? document.body.classList.add("_not-top")
		: document.body.classList.remove("_not-top");
});
