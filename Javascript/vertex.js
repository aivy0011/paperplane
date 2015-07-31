function step_1() {
	var A = document.getElementById('A').value - 0;
	var B = document.getElementById('B').value - 0;
	var C = document.getElementById('C').value - 0;
	var H = (-B/(2*A)); 
	document.getElementById('H').innerHTML = "H = " + H;
	var K = A *(Math.pow(H,2))+B * H + C;
	document.getElementById('K').innerHTML = "K = " + K;
	setTimeout(step_1, 5000);
	if (H > 0 && K > 0){
		document.getElementById('Vertex').innerHTML = "Y=" + A + "(x-" + H + ")<sup>2</sup>" + "+" + K;
	} else if (H < 0 && K > 0) {
		document.getElementById('Vertex').innerHTML = "Y=" + A + "(x+" + Math.abs(H)+ ")<sup>2</sup>" + "+" + K;
	} else if (H > 0 && K < 0) {
		document.getElementById('Vertex').innerHTML = "Y=" + A + "(x-" + H + ")<sup>2</sup>" + "-" + Math.abs(K);
	} else {
		document.getElementById('Vertex').innerHTML = "Y=" + A + "(x+" + Math.abs(H) + ")<sup>2</sup>" + "-" +Math.abs(K);
	};
}