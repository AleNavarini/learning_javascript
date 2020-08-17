'use strict'

// AJAX - Fetch - Consume REST APIs

fetch("https://reqres.in/api/users") // This is a promise
	.then(data => data.json()) // formats to json
	.then(data => {
		users = data;

		data.map((data, i ) => {
			let name = document.createElement('h2');

			name.innerHTML = data.first_name;
		})
	})

// create promise

function getInfo(){
	
	var user = {
		name: 'Alejandro',
		lastname: 'Navarini'
	}
	user_string = JSON.stringify(user);

	return new Promise((resolve, reject) => { 
		if (typeof user_string != 'string') return reject("Error");
		else return resolve(user_string); // promises return callback functions
	});
}