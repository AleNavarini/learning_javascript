'use strict'
function validate(field, arg, type){
	
	switch (type){
		case 'string': if (arg.trim() == null || arg.trim().length == 0){
							alert(`${field} is not valid`);
							return true;
						}
						break;
		case 'number': if (isNaN(arg) || arg <= 0 ){
							alert(`${field} is not valid`);
							return true;
						}
		default: return false;
					break;
	}

}
window.addEventListener('load', () => {
	let form = document.querySelector("#my_form");

	form.addEventListener('submit', () => {
		let name = document.querySelector("#name").value;
		let lastname = document.querySelector("#lastname").value;
		let age = parseInt(document.querySelector("#age").value);
		
		if (validate('Name', name, 'string')) return false;
		if (validate('Lastname',lastname, 'string')) return false;
		if (validate('Age', age, 'number')) return false;
		let paragraph = document.createElement('p');
		let hello = document.createElement('h1');
		hello.innerHTML = "Hello!";
		paragraph.append(hello);
		paragraph.append(`Your name is ${name} , your lastname is ${lastname} and you are
			${age} years old`);
		let my_div = document.querySelector("#my_div");
		my_div.append(paragraph);
} )
})