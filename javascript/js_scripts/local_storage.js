'use strict'
// Information that persists in session
// Check browser compatibility
if (typeof(Storage) != 'undefined'){
	console.log('Browser compatible');
}
else{
	console.log("Browser not compatible");
}

//Save data in local storage

localStorage.setItem("key","value"); // key is the key and value the value, like a dict

// Retreive data
let info = localStorage.getItem("key");

// Save JSON object
let object = {
	atr1: "value1",
	atr2: "value2",
	atr3: "value3",
};
// YOu must stringify the object to save in localStorage

localStorage.setItem("object", JSON.stringify(object));

//Retreive object and parse to JSON object type
JSON.parse(localStorage.getItem("object"));

//Delete info
localStorage.removeItem("key"); // deletes item with that key
localStorage.clear() ; // deletes everything

// loop through localStorage

for(var i in localStorage){
	console.log(localStorage[i]);
}