var text = "Example text";

text = text.toString(); // Converts number to string (the example is redundant)
text.toLowerCase(); // To lowercase
text.toUpperCase(); // To uppercase

text.length; // gets string length 
text.concat(" Text to concatenate");

text.indexOf("text"); // gets index of given string , finds "text" in text
text.lastIndexOf("text"); // gets last index of given string
text.search("text"); // Also searches for a given string
text.match("text"); // returns an array of matches
text.match(/text/g); //Is a regular expression, matches for every appearance of "text" 
text.substr(5, 5); // Gets string from 5 to 10 indexes , second parameters is 
					// for how many chars it wil get, first parameter is the first index 

text.charAt(22); // given an index returns the char at that indexx
text.startsWith(); // searches at start
text.endsWith(); // searches at end
text.includes("text"); // returns true if it contains the string

text.replace("text", "new_text"); // Replaces first string with 2nd string
text.slice(14); // slices string from the given index to the end
text.slice(5, 10); //gets string from 5th to 10th char
text.split(" "); // same as Python, returns an array
text.trim(); // removes spaces at start and end

// plantillas = fast string in Python

let name = "Alejandro";
let last_name = "Navarini";

let full_name = ` ${name}, ${last_name}`
alert(full_name)
