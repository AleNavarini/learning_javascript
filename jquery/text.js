'use strict'
$(document).ready(function(){
	$('a').each(function(index) { // Loop over every <a> element
		let thisElement = $(this);
		let link = thisElement.attr("href"); //gets href attribute value
		thisElement.text(link);
	})	// .val() gets value of input text form  
	//.html("write html here") this overwrites previous html. Use this methods on a selector
	//.append("write html here")

})