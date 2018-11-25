function menuOpen(ele) {
	event.stopPropagation();
	$('body').addClass('menuOn');
}

function eventSlide() {
	new Swiper('.eventWrap .slide', {
		speed: 500,
		navigation: {
			nextEl: '.eventWrap .slideNext',
			prevEl: '.eventWrap .slidePrev',
		}
	});
}

function pageTop() {
	$('html, body').animate({scrollTop: 0}, 300);
}


$(function(){
	$('body').on('click', function() {
		if($(this).hasClass('menuOn')) $(this).removeClass('menuOn');
	});
	$('.userWrap').on('click', function() {
		event.stopPropagation();
	});
	$(window).scroll(function(){
		var scrollTop = $(this).scrollTop();
		if(scrollTop > 0) {
			if(!$('body').hasClass('scroll')) $('body').addClass('scroll');
		} else {
			$('body').removeClass('scroll');
		}
	});
});