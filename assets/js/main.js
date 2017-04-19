var vh = document.documentElement.clientHeight;
var vw = document.documentElement.clientWidth;

$(document).ready(function() {
	$('select').material_select();
	$(".button-collapse").sideNav();
	$('.collapsible').collapsible();

	$(document).scroll(function() {
		if ($(document).scrollTop()>200) {
			console.log("Hello");
			$("nav").addClass("fixed");
		}

		else {
			$("nav").removeClass("fixed");
		}
	});
});