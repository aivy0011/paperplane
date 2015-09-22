var A;
var B;
var C;
var x_1;
var x_2;
function get_variables() {
	A = document.getElementById('A').value - 0;
	B = document.getElementById('B').value - 0;
	C = document.getElementById('C').value - 0;
	return A
	return B
	return C
}
function solve() {
	get_variables();
	x_1 = (-B+Math.sqrt(Math.pow(B,2) - 4 * A * C))/(2 * A);
	x_2 = (-B+Math.sqrt(Math.pow(B,2) - 4 * A * C))/(2 * A);
	document.getElementById('x_1').innerHTML = "X = " + x_1;
	document.getElementById('x_2').innerHTML = "X = " + x_2;
	setTimeout(solve, 1000);
}
