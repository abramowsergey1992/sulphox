$(function () {
	$(".popup__close,.popup__overlay").click(function () {
		let popup = $(this).closest(".popup");
		popup.removeClass("_animate");
		setTimeout(function () {
			popup.removeClass("_display");
		}, 500);
	});
	$("[data-popup]").click(function (e) {
		e.preventDefault();
		$(".popup").removeClass("_display", "_animate");
		let popup = $($(this).data("popup"));
		popup.attr("data-state", "");
		popup.find("input").val("");
		popup.find("input").removeClass("valid", "error");
		popup.addClass("_display");
		if ($(this).data("popup") == "#feedback") {
			popup.find("h2").text($(this).text());
		}
		setTimeout(function () {
			popup.addClass("_animate");
		}, 500);
	});

	document.addEventListener("aos:in", ({ detail }) => {
		console.log("animated in", detail);
	});
	$("._mask-phone").each(function () {
		Inputmask("+7 (999) 999-99-99").mask(this);
	});
	$("._mask-date").each(function () {
		Inputmask("99.99.9999").mask(this);
	});
	$("._mask-int").each(function () {
		Inputmask("9{1,10}").mask(this);
	});
	if ($("#form-feedback").length) {
		let validFeedback = $("#form-feedback").validate({
			errorPlacement: function (error, element) {},
			submitHandler: function (form) {
				$(".form-feedback__sbmt").attr("disabled", "disabled");
				$.ajax({
					url: $(form).attr("action"),
					data: $(form).serialize(),
					method: "POST",
					headers: {
						"X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
							"content"
						),
					},
					context: document.body,
					success: function () {
						$(".popup#feedback").removeClass("_display");
						$(".popup#feedback").removeClass("_animate");
						$(".form-feedback__sbmt").removeAttr("disabled");
						let popup = $(".popup#succes");
						popup.addClass("_display");
						setTimeout(function () {
							popup.addClass("_animate");
						}, 500);
					},
					error: function () {
						$(".popup#feedback").removeClass("_display");
						$(".popup#feedback").removeClass("_animate");
						$(".form-feedback__sbmt").removeAttr("disabled");
						let popup = $(".popup#error");
						popup.addClass("_display");
						setTimeout(function () {
							popup.addClass("_animate");
						}, 500);
					},
				});
			},
		});
	}
});
