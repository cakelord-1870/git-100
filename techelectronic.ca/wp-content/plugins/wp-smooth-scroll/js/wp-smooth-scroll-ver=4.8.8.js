jQuery.noConflict();
jQuery(function($) {	
	$('#wp-smooth-scroll').hide();
	$(window).on( 'scroll', false, function() {
		var windowTop = $(window).scrollTop();
		if (windowTop > 200 ) {
			$( '#wp-smooth-scroll' ).slideDown('slow');
		} 
		else{
			$('#wp-smooth-scroll').slideUp('slow');
		}
	});

	// Scroll to the top when the back-to-top is clicked.
	$('#wp-smooth-scroll').on('click',function(){
		$('html, body').animate({scrollTop:0}, 'slow');
	});
});