$(document).ready(function() {

	function heightDetect() {
		$('.main-head_wrap').css('min-height', $(window).height());
	};

	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

});

$(window).scroll(function(){
    var sticky = $('#top-scroll'),
        scroll = $(window).scrollTop();

    if ( scroll >= 250) {
        sticky.addClass('is-show');
    } else {
        sticky.removeClass('is-show');
    }
});

$(document).ready(function() {
  
    $('#top-scroll').click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, 800);
    });
});