document.querySelectorAll(".btn-arrow").forEach((btn) => {
	btn.innerHTML =
		btn.innerText +
		'<svg width="14" height="11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m7.593 8.393-.707.707L8.3 10.514l.707-.707-1.414-1.414ZM11.9 5.5l.707.707.707-.707-.707-.707-.707.707ZM9.007 1.193 8.3.486 6.886 1.9l.707.707 1.414-1.414Zm0 8.614 3.6-3.6-1.414-1.414-3.6 3.6 1.414 1.414Zm3.6-5.014-3.6-3.6-1.414 1.414 3.6 3.6 1.414-1.414ZM11.9 4.5H.2v2h11.7v-2Z"/></svg>';
});
$(function () {
	$("._mask-phone").each(function () {
		Inputmask("+7 (999) 999-99-99").mask(this);
	});
	$("._mask-date").each(function () {
		Inputmask("99.99.9999").mask(this);
	});
});
