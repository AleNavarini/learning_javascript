'use strict'

let time = setInterval(() => {
	console.log("punchi");
	console.log("pun");
}, 2000) // 2000 ms

let time_2 = setTimeout(() => {
	console.log("punchi");
	console.log("pun");
}, 2000) // executes with delay of 2000 ms just one time

clearInterval(time ); // removes time interval previously defined