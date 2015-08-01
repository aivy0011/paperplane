function getContrastYIQ(hexcolor){
	var r = parseInt(hexcolor.substr(0,2),16);
	var g = parseInt(hexcolor.substr(2,2),16);
	var b = parseInt(hexcolor.substr(4,2),16);
	var yiq = ((r*299)+(g*587)+(b*114))/1000;
	return (yiq >= 128) ? 'black' : 'white';
}

function randomcolor() {
	var rString = ['A','B','C','D','E','F','0','1','2','3','4','5','6','7','8','9'];
	var Hexcode = '#';
	for(i = 0; i < 6;i++){
		var randomn = Math.floor(Math.random() * 16);
		var Hexcode = Hexcode + rString[randomn];
		document.body.style.background = Hexcode;
		document.getElementById('Hexcode').innerHTML = Hexcode;
		console.log(Hexcode);
	}
	document.getElementById('Hexcode').style.color = getContrastYIQ(Hexcode);
document.getElementById('Heading').style.color = getContrastYIQ(Hexcode);
	start();
}
function start() {
	a = setTimeout(randomcolor, 5000);
}
function stop() {
   clearTimeout(a);
  }