$(document).ready(function() {

	function heightDetect() {
		$('.main-head_wrap').css('min-height', $(window).height());
	};

	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

});