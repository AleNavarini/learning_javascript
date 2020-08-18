'use strict'
// Anonymous functions
// Function that doesnt have a name

var movie = function(name){
	return "The movie is" + name;
}

function example(number_1, number_2, function1, function2){ //Asigns a function definition to a variable
	let sum = number_1 + number_2;
	function1(sum);  
	function2(sum);
}

example(1, 2, function(arg){
	console.log("This is first function" + String(arg));
},
function(arg){
	console.log("This is second function" + String(arg));	
})