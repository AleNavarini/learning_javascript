'use strict'

// Arrow functions
/*
var function_variable = parameter => {
	alert("Called from an arrow function");
	alert("Received parameter: " + String(parameter));
}
*/
function hello(arrow_function){
	arrow_function();
}
hello(a =>{
	alert("This comes from an arrow function");	
} )