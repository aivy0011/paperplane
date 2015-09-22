var table = document.getElementById("mytable");
var lvalue = 0
var uvalue = 100
var i = 1
var response
function randomint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var guess = randomint(lvalue, uvalue);
function insert_row() {
	var guess = randomint(lvalue, uvalue);
	var row = table.insertRow(-1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	cell1.innerHTML = i;
	cell2.innerHTML = guess;
	cell3.innerHTML = "<button value='+'>+</button><button value='='>=</button><button value='-'>-</button>"
}
function start() {
	insert_row();
} 
