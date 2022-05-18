//use strict

function numberCounting(){
	// variables
	let minNumber = parseInt(document.getElementById("min").value);
	let maxNumber = parseInt(document.getElementById("max").value);
	let counter = minNumber
	let numbers = ""

	//if statement for if the user is over 18
	 while (counter <= maxNumber) {
		numbers = numbers + counter + "<br>"
		counter = counter + 1
	} 

	document.getElementById("numbers").innerHTML = numbers
}