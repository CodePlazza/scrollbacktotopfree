$(document).ready(function(){
	// When scrolled this far, the button appears.
	var offset =	20;
	 // Button appears / disappears and page scrolls up in that milliseconds time.
	var duration =	700;
	$(window).scroll(function() {
		if ($(this).scrollTop() > offset) {
			$('#cp-sbttb').removeClass('sbttb-fadeout');
			$('#cp-sbttb').addClass('sbttb-fadein');
		} else {
			if($('#cp-sbttb').hasClass('sbttb-fadein')){
				$('#cp-sbttb').removeClass('sbttb-fadein');
				$('#cp-sbttb').addClass('sbttb-fadeout');
			}
		}
	});   
	$('#cp-sbttb').click(function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop: 0}, duration);
		return false;
	})
});