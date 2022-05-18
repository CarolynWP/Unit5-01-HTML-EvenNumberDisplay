//use strict
"use strict"

function numberCounting(){
	// variables
	let minNumber = parseInt(document.getElementById("min").value);
	let maxNumber = parseInt(document.getElementById("max").value);
	let counter = minNumber
	let numbers = ""

	//while statement to display all the user's numbers
	 while (counter <= maxNumber) {
		numbers = numbers + counter + "<br>"
		counter = counter + 1
	} 

	//output
	document.getElementById("numbers").innerHTML = numbers
}