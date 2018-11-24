function menuOpen(ele) {
	// event.preventDefault();
	event.stopPropagation();
	$('body').addClass('menuOn');
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