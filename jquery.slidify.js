(function ( $ ) {
 
 	/*
 	
 		Creates a slider from a set of subelements
 			attach .slidify to slider element
 			
 			01 Create parent div as container
 			02 Set CSS on Sliderdiv
 			03 Set CSS on slides
 			04 Paging mechanism
 	
 	*/
 
    $.fn.slidify = function(options) {
        
        /* 
        
	    PLUGIN SETTINGS / OPTIONS
        
        */
        
        var settings = $.extend({
            // These are the defaults.
            sliderClass:"slider",
            sliderHeight:$(this).height(),
            sliderWidth:$(this).width(),
            slideSelector: ".slide",
            clickActive:true
        }, options );        
        
        /* 
        
	    CONTAIN SLIDER
	    Create Parent Container Div of fixed width and overflow hidden
        
        */
    
        $(this).wrap('<div class="'+settings.sliderClass+'" />');

	    	$('.'+settings.sliderClass).css({
	    		"overflow":"hidden",
	    		"height":settings.sliderHeight,
	    		"width":settings.sliderWidth
	    	});
        

        /*
        
        MODIFY CSS OF SLIDER
        Set Attr & Width of Slider (this) to total length of children
        
		*/
        
    	// Get width from children length
		var numSlides 		= $(settings.slideSelector, $(this)).length;
		var containerWidth 	= settings.sliderWidth * numSlides; 
		
		// Set Attr: position relative & width
    	$(this).css({
        	"position":"relative",
        	"width":containerWidth,
        	"height":settings.sliderHeight
    	});
        
        /* 
        
        CHILDREN CSS
        Set required CSS on children
        
        */
        
        $(settings.slideSelector, $(this)).css({
	        "float":"left",
        	"width":settings.sliderWidth,
        	"height":settings.sliderHeight	        
		});
        
        /*
        
        Paging mechanism
        
        */
        
        // Initialise index (default is slide 1)
		var index = 0;
		
		// Click
		if(settings.clickActive) {
			$(this).on("click", function() {
				index++; if(index==numSlides) index=0;
				$(this).animate({
					"margin-left":-index * settings.sliderWidth
				});
			});
		}
		
		// RETURN        
        return this;
    };
 
 
}( jQuery ));