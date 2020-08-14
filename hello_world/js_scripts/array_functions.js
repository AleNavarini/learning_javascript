let array = [];
array.push("a") // Same as append, adds element to array
array.pop() // removes last element
array.splice(2, 1) // removes items from an index, until the 2nd parameter
array.join() // Makes an string separated by commas
array.sort() // sorts an array
array.reverse() // reverses order

let searched_element = array.find(function(parameter){
	return parameter == "Hola"; // "Hola" is what you are looking for
})
let example = array.find(arr => arr == "Hola"); // Same as before
array.findIndex(arr => arr == "Hola"); // Gets index of hola

array.some(arr => arr <= 20) //finds if there are elements less than 20 in array, returns true/false
