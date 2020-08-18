'use strict'

//mouse events
 let button = document.querySelector("#my_button_2");
 function myFunction(){
 	return true;
 }

 //events : onclick, ondblclick

 let new_button = document.querySelector("#my_button_3");
 //click
 new_button.addEventListener('click', function(){
 	myFunction();
 });
//mouse over
 new_button.addEventListener('mouseover', function(){
 	myFunction();
 });
 //mouse out
 new_button.addEventListener('mouseout', function(){
 	myFunction();
 });
let txt = document.querySelector("#txtField");

//focus
txt.addEventListener('focus', function(){
 	myFunction();
 });
//blur
txt.addEventListener('blur', function(){
 	myFunction();
 });
//keydown
txt.addEventListener('keydown', function(event){
	let key = String.fromCharCode(event.keyCode)
 	myFunction();
 });
//keypress
txt.addEventListener('keypress', function(){
 	myFunction();
 });
//keyup
txt.addEventListener('keyup', function(){
 	myFunction();
 });

