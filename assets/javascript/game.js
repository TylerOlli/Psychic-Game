//Javascript

var wins = 0;
var losses = 0;
var guessesLeft = 10;

var cpu = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o"
			,"p","q","r","s","t","u","v","w","x","y","z"];

function letterGuess() {
	return cpu[Math.floor(Math.random() * cpu.length)];
}

var newLetterGuess = letterGuess();
console.log("I set the letterGuess as \n" + newLetterGuess);

document.onkeyup = function(event) {
	
	console.log(newLetterGuess);

	var keystroke = event.key.toLowerCase();
	console.log("I pressed" + keystroke);
	console.log("The computer guessed\n" + newLetterGuess);

	if (keystroke === newLetterGuess) {
		wins++;
		newLetterGuess = letterGuess();
		guessesLeft = 10;
		alert("You guessed the correct letter!");
		document.getElementById("yourGuesses").textContent = "";
	} else {
		guessesLeft--;
		document.getElementById("yourGuesses").textContent += keystroke + " ";
	}

	document.getElementById("wins").innerHTML = wins;
	document.getElementById("guesses").innerHTML = guessesLeft;

	if (guessesLeft === 0) {
		alert("You lost the game! The answer was " + newLetterGuess);
		losses++;
		newLetterGuess = letterGuess();
		guessesLeft = 10;
		document.getElementById("yourGuesses").textContent = "";
	}

	document.getElementById("losses").innerHTML = losses;

}