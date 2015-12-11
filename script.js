$(document).ready(function() {

	var err = false;

	function error(number) { // a general error message if the value entered is invalid
		if (number == 1) { // left side error
			$('#leftmsg').html("You didn't enter in a number between 0 and 255 for at least one of the inputs.");
		} else if (number == 2) { // right side error
			$('#rightmsg').html("You didn't enter in a proper hex color code.");
		}
	}

	$('#leftsubmit').click(function() {
		// output the hex
		var red = $('.left-red').val();
		var green = $('.left-green').val();
		var blue = $('.left-blue').val();
		if (red >= 0 && red <= 255 && green >=0 && green <= 255 && blue >=0 && blue <= 255) {
			red = parseInt(red);
			green = parseInt(green);
			blue = parseInt(blue);
			var redHex = red.toString(16).toUpperCase();
			var greenHex = green.toString(16).toUpperCase();
			var blueHex = blue.toString(16).toUpperCase();
			if (red < 16) {
				redHex = "0" + redHex;
			}
			if (green < 16) {
				greenHex = "0" + greenHex;
			}
			if (blue < 16) {
				blueHex = "0" + blueHex;
			}
			var answer = redHex + greenHex + blueHex;
			$('.leftanswer').css('visibility', 'visible');
			$('#lefthex').val(answer);
			answer = "#" + answer;
			$('#lefthex').css('background-color', answer);
		} else { // or if you have letters, negative numbers, or greater than 255
			error(1);
		}
	});

	$('#rightsubmit').click(function() {
		// ouput the rgb
		var hexInput = $('.right-hex').val().toLowerCase();
		var len = hexInput.length;
		if (len != 6) {
			error(2);
		}
		var ascii;
		for (var i=0; i<6; i++) {
			// check if they're all from 0 to F
			ascii = hexInput[i].charCodeAt(0);
			if (ascii < 48 || ascii > 103) {
				err = true;
				error(2);
			} else if (ascii > 58 && ascii < 97) {
				err = true;
				error(2);
			}
		}
		if (!err) {
			var red = hexInput.slice(0,2);
			var green = hexInput.slice(2,4);
			var blue = hexInput.slice(4,6);
			red = parseInt(red, 16);
			green = parseInt(green, 16);
			blue = parseInt(blue, 16);
			$('.rightanswer').css('visibility', 'visible');
			$('.right-red').val(red);
			$('.right-green').val(green);
			$('.right-blue').val(blue);
			var answer = "#" + hexInput;
			$('.right-hex').css('background-color', answer);
		}
	});

}); // close main function