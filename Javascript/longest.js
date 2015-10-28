function get() {
	words = document.getElementById('words').value;
	words = words.split(/([_\W])/);
	return words
}
function longest() {
	get();
	var longest = ""
	for(var i = 0; i < words.length; i++){
		if(longest.length < words[i].length){
			var longest = words[i];
		}
	}
	document.getElementById('result').innerHTML = "The longest word is " + longest
}
