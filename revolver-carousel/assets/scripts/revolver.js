
(function($) {
	
	$.fn.revolverCarousel = function() {
		
		return this.each(function() {
        	
        	var $revolver = $(this),
        		$revolverSlides,
        		slideIndex = 0,
        		revolverSlidesWidth = 0;
        		
        	$revolver.wrapInner('<div class="revolver-slides" />').css({ overflow: 'hidden', width: $(window).width() });
        	
        	$revolverSlides = $revolver.children('.revolver-slides');
                	
        	$revolverSlides.children('.slide').each(function () {
	        	revolverSlidesWidth += $(this).width();
        	})
        	      	
        	$revolverSlides.css({ width: revolverSlidesWidth })
        	
    	});
    	
	}	
		
})(jQuery);