function Quadratic() {
	var A = document.getElementById('A1').value - 0;
	document.getElementById('A').innerHTML = "A=" + A;
	var H = document.getElementById('H').value - 0;
	var K = document.getElementById('K').value - 0;
	var B = (H * (2 * A))/-1;
	document.getElementById('B').innerHTML = "B=" + B;
	var C = K - ((A * Math.pow(H,2)) + (B * H)) ;
	document.getElementById('C').innerHTML = "C=" + C;
	setTimeout(Quadratic, 1000);
	if(A == 0){
		if(B > 0) {
			if(C > 0) {
				document.getElementById('Quad').innerHTML = "y="+ B + "x+" + C;
			} else if(C == 0) {
				document.getElementById('Quad').innerHTML = "y="+ B + "x";
			} else {
				document.getElementById('Quad').innerHTML = "y="+ B + "x-" + C;
			}
		} else if(B == 0) {
			if(C > 0) {
				document.getElementById('Quad').innerHTML =  "y=" + C;
			} else if(C == 0){
				document.getElementById('Quad').innerHTML = "y=" +"";
			} else {
				document.getElementById('Quad').innerHTML = "y=" + C;
			}
		} else {
			if(C > 0) {
				document.getElementById('Quad').innerHTML = "y="+ B + "x+" + C;
			} else if(C == 0) {
				document.getElementById('Quad').innerHTML = "y="+ B + "x";
			} else {
				document.getElementById('Quad').innerHTML = "y="+ B + "x-" + C;
			}
		}
	} else if(A == 1) {
		if(B > 0) {
			if(C > 0) {
				document.getElementById('Quad').innerHTML = "y=x<sup>2</sup>+" + B + "x+" + C;
			} else if(C == 0) {
				document.getElementById('Quad').innerHTML = "y=x<sup>2</sup>+" + B + "x";
			} else {
				document.getElementById('Quad').innerHTML = "y=x<sup>2</sup>+" + B + "x-" + C;
			}
		} else if(B == 0) {
			if(C > 0) {
				document.getElementById('Quad').innerHTML = "y=x<sup>2</sup>+" + C;
			} else if(C == 0){
				document.getElementById('Quad').innerHTML = "y=x<sup>2</sup>";
			} else {
				document.getElementById('Quad').innerHTML = "y=x<sup>2</sup>-" + C;
			}
		} else {
			if(C > 0) {
				document.getElementById('Quad').innerHTML = "y=x<sup>2</sup>-" + Math.abs(B) + "x+" + C;
			} else if(C == 0) {
				document.getElementById('Quad').innerHTML = "y=x<sup>2</sup>-" + Math.abs(B) + "x";
			} else {
				document.getElementById('Quad').innerHTML = "y=x<sup>2</sup>-" + Math.abs(B) + "x-" + C;
			}
		}
	} else {
		if(B > 0) {
			if(C > 0) {
				document.getElementById('Quad').innerHTML = "y=" + A + "x<sup>2</sup>+" + B + "x+" + C;
			} else if(C == 0) {
				document.getElementById('Quad').innerHTML = "y=" + A + "x<sup>2</sup>+" + B + "x";
			} else {
				document.getElementById('Quad').innerHTML = "y=" + A + "x<sup>2</sup>+" + B + "x-" + C;
			}
		} else if(B == 0) {
			if(C > 0) {
				document.getElementById('Quad').innerHTML = "y=" + A + "x<sup>2</sup>+" + C;
			} else if(C == 0){
				document.getElementById('Quad').innerHTML = "y=" + A + "x<sup>2</sup>";
			} else {
				document.getElementById('Quad').innerHTML = "y=" + A + "x<sup>2</sup>-" + C;
			}
		} else {
			if(C > 0) {
				document.getElementById('Quad').innerHTML = "y=" + A + "x<sup>2</sup>-" + Math.abs(B) + "x+" + C;
			} else if(C == 0) {
				document.getElementById('Quad').innerHTML = "y=" + A + "x<sup>2</sup>-" + Math.abs(B) + "x";
			} else {
				document.getElementById('Quad').innerHTML = "y=" + A + "x<sup>2</sup>-" + Math.abs(B) + "x-" + C;
			}
		}
	}
}
