let string_number = "2";
Number(string_number);// String to Number
parseInt(); // String to int
parseFloat(); // String to float
String(); // Number to string
let arr = [];
typeof string_number; // Returns type of variable

for(var i = 0; i < 100; i++){
	debugger; //Is like a breakpoint
	//Do something
}
arr.forEach((element, index, array)=>{
	//Instructions here
})

for(let a in arr){ // a is the index of every element in arr
	//code
}

isNaN(); // is not a number