'use strict'
//BOM - Browser Object Model
console.log(window.innerHeight); // gets window height
console.log(window.innerWidth); // gets window width

screen.width;/// size of user screen
screen.height; /// size of user screen
window.location.href; //gets page url

function redirect(){
	url = "https://google.com";
	window.location.href = url
	//redirects to google 
}
window.open("https://google.com"); // opens new tab
window.open("https://google.com", "", width= 100 , height= 200); // opens new window if given height and width
