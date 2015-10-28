var line;
var number;
function add() {
	number = document.getElementsByClassName('numbers').value;
	console.log(number)
	document.getElementById('line').value += number;
}