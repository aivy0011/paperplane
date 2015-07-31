function randomcolor() {
	var rString = ['A','B','C','D','E','F','0','1','2','3','4','5','6','7','8','9'];
	var Hexcode = '#';
	for(i = 0; i < 6;i++){
		var randomn = Math.floor(Math.random() * 16);
		var Hexcode = Hexcode + rString[randomn];
		document.body.style.background = Hexcode;
		document.getElementById('Hexcode').innerHTML = Hexcode;
		document.getElementById('Hexcode').style.color = Hexcode;
		document.getElementById('Heading').style.color = Hexcode;
		console.log(Hexcode);
	}
	start();
}
function start() {
	a = setTimeout(randomcolor, 5000);
}
function stop() {
   clearTimeout(a);
  }