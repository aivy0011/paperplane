function step_1() {
	
	var A = document.getElementById('A').value - 0;
	var B = document.getElementById('B').value - 0;
	var C = document.getElementById('C').value - 0;
		if (isNaN(A)) {
			A = 0;
			B = 0;
			C = 0;
		} else {
			A = A;
			B = B;
			C = C;
		}

	var H = (-B/(2*A)); 
	document.getElementById('H').innerHTML = "H = " + H;

	// To get K from the Quadratic equation you plug in H to get the value
	var K = A *(Math.pow(H,2))+B * H + C;
	document.getElementById('K').innerHTML = "K = " + K;

	//Keep running the function every one second
	setTimeout(step_1, 1000);

	/*Display the equation
	if H > 0 and K >= 0; y = a(x-h)+k
	if H < 0 and K >= 0; y = a(x+h)+k
	if H > 0 and K < 0; y = a(x-h)-k
	else H < 0 and K < 0; y = a(x+h)-k
	*/
	if (H > 0 && K >= 0){
		document.getElementById('Vertex').innerHTML = "Y=" + A + "(x-" + H + ")<sup>2</sup>" + "+" + K;
	} else if (H < 0 && K >= 0) {
		document.getElementById('Vertex').innerHTML = "Y=" + A + "(x+" + Math.abs(H)+ ")<sup>2</sup>" + "+" + K;
	} else if (H > 0 && K < 0) {
		document.getElementById('Vertex').innerHTML = "Y=" + A + "(x-" + H + ")<sup>2</sup>" + "-" + Math.abs(K);
	} else {
		document.getElementById('Vertex').innerHTML = "Y=" + A + "(x+" + Math.abs(H) + ")<sup>2</sup>" + "-" +Math.abs(K);
	};
}