function multiply() {
	var num_1 = document.getElementById("first").value - 0;
	var num_2 = document.getElementById("second").value - 0 ;
	select = document.getElementById('select').value;
	if (select == "*" ) {
		document.getElementById('select').value = "*";
		document.getElementById('product').innerHTML = num_1 * num_2;
	};
	if (select == "/") {
		document.getElementById('select').value = "/";
		document.getElementById('product').innerHTML = num_1 / num_2;
	};
	if (select == "-") {
		document.getElementById('select').value = "-";
		document.getElementById('product').innerHTML = num_1 - num_2;
	};
	if (select == "+") {
		document.getElementById('select').value = "+"
		document.getElementById('product').innerHTML = num_1 + num_2;
	};
	if (select == "R") {
		document.getElementById('select').value = "R"
		document.getElementById('product').innerHTML = Math.floor(num_1/num_2)+"R"+num_1%num_2;
	}
	setInterval(multiply, 1000);
}