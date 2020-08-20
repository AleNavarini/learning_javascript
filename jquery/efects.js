'use strict'

$(selector).show('fast'); // different types of show fast normal
$(selector).fadeIn();
$(selector).fadeOut();
$(selector).fadeTo('slow', 0.2 ) // the number is the opacity

$(selector).toggle(); //fadeToggle , slideToggle
$(selector).animate({/*CSS inside here*/},"slow")  // make your own animation
			.animate({});		// You can concatenate animations
			