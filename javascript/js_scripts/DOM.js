'use strict'
//DOM Document Object Model
document.getElementById("element_id"); // You should load the script at the end of the
											// page.
document.getElementById("element_id").innerHTML; // HTML inside the tag
let element = document.getElementById("element_id");
element = document.querySelector("#element_id");
element = document.querySelector(".class"); // Searches like in CSS . #

element.innerHTML = "Text I want to replace" ; // Here I modify the HTML of the declared element
//element.style.... = ""
element.style.background = "red";
element.style.padding = "20px";
element.style.color = "red";
element.className = "desired-class another-class";

// Get elements by tag
let everyDiv = document.getElementsByTagName("div"); // returns an array with every div tag

let text = everyDiv[0].textContent; // returns text content of tag

let paragraph = document.createElement("p"); // Create the element you want
document.createTextNode("text");

paragraph.append("text");
paragraph.prepend("text");

// get elements by class
let red = document.getElementsByClassName('red'); //returns all elements of class red
element = document.querySelector(".class"); // returns only one elements

// https://developer.mozilla.org/es/docs/Web/API/Document/querySelectorAll to read