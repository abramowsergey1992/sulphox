// Фильт-слайдер Наших проектов
if (document.querySelector(".project-complite__filters")) {
	let filters = document.querySelectorAll(".project-complite__filter");
	let projects = document.querySelectorAll(".project-list .project");
	filters.forEach((filter) => {
		filter.addEventListener("click", function () {
			filters.forEach((filter) => {
				filter.classList.remove("_active");
			});
			let selectFilter = filter.dataset.filter;
			filter.classList.add("_active");
			projects.forEach((project) => {
				if (
					selectFilter == "all" ||
					project.dataset.filter == selectFilter
				) {
					slideDown(project, 400);
				} else {
					slideUp(project, 400);
				}
			});
		});
	});
}
