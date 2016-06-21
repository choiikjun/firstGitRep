window.onload = function () {
	
	// Get all the HTML elements that will be used in the calculator function
	var button = document.querySelectAll('#calculator .key_area span'); // Selects all numbers, operators and equal
	var clear = document.getElementByClassName('clear_data'); // Select the 'clear' div button
	var result = document.getElementByClassName('result_screen'); //Select the 'result-screen' div

	// A click function that enables the calculator clickable

	for (var i = 0; i < button.length; i++) {
		if (button[i].innerHTML === '=') {
			button[i].addEventListener('Click', calculationCompleted(a));
		} else {
			button[i].addEventListener('Click', calculationInProgress(a));
		}
	};

	// A funtion that displays the calculation progress in the screen

	function calculationInProgress (a) {	
		return function {
			//When "x" is clicked, "*" is displayed in the screen
			if (button[a] === "x") {
				result_screen.innerHTML += '*';
			// Otherwise, the rest of the buttons will appear as they are
			} else {
				result_screen.innerHTML += button[a];				
			}
		}
	};

	// A function that displays the calculation result in the screen
	
	function calculationCompleted (a) {
		return eval(result.innerHTML);
	};

	// Clear the screen
	
	clear.onclick = function () {
		return result.innerHTML = '';
	};

};