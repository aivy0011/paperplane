function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var i = 1;
var lvalue = 0;
var uvalue = 100;
var guess = getRandomInt(lvalue, uvalue);
$(document).ready(function(){

	//Create the first 2 rows and the table
	$("#start").one("click", function(){
		var table = "<table></table>";
		$("#content").append(table);
		var row_1 = "<tr><th>Guess #</th><th>Guess</th><th>Response</th></tr>";
		var new_row = "<tr id=\"row_"+ i + "\"><td>" + i + "</td><td>" + guess + "</td><td><button value=\"+\" class=\"btn\">+</button>&nbsp&nbsp<button value=\"=\" class=\"btn\">=</button>&nbsp&nbsp<button value=\"-\" class=\"btn\">-</button></td></tr>";
		$("table").append(row_1,new_row);
		i += 1;
	});

	//Add a new row base on what button is click
	$("#row_1").on('click','.btn',function(){
		var button = $("#btn").value;
		alert(button);
		if(button == "+"){
			uvalue = guess;
			guess = getRandomInt(lvalue, uvalue);
			$("table").append(new_row);
			i += 1;
		} else if (button == "-"){
			lvalue = guess;
			guess = getRandomInt(lvalue, uvalue);
			$("table").append(new_row);
			i += 1;
		} else {
			alert("The computer guess your numbber");
		}
	});


});