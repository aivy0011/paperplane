var all_colors = [];

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
	}
	all_colors.push("<tr><td>"+Hexcode+"</td><td style='background-color:"+Hexcode+";width:50%'></td></tr>");
	$('body').css("background-color", Hexcode);
	$('#Hexcode').css("color", getContrastYIQ(Hexcode));
	$('#Heading').css("color", getContrastYIQ(Hexcode));
	console.log(all_colors);
}


function table(){
	$('#colors').html("<table class='table-bordered' style='margin: 0 auto; background-color:white; border-width: thick;'><tr><th>Hexcode</th><th>Colors</th></tr>"+all_colors.join('')+"</table>")
	setTimeout(table, 1000);
}


function start() {
	setTimeout(randomcolor, 5000);
	var a = setTimeout(start, 5000);
}


function stop() {
   clearTimeout(a);
}


function display(){
	$('#colors').toggle();
	table();
}


$(document).ready(function(){
	randomcolor();
	start();
})