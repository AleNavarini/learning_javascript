'use strict'

//rest and spread parameters
function list(a, b, ...other_params){ // rest is like args in Python
	return "Hello";
	//other_params is an array with every other parameter 
} 

list(a,b,c,d,e,f);

new_list = ["arg1", "arg2"]

//You can call a function so that arg1 is a and arg2 is b and every other parameter fits in other_params
list(...new_list, "a", "B", "c", "d")