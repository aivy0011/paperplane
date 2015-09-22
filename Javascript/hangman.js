var words = ["Cat","Dog"];
var spaces = ""
function generate_word() {
	var new_word = words[Math.floor((Math.random() * words.length) + 1)];
	return new_word;
}
function blank_spaces() {
	generate_word();
	for (i = 0; i < new_word.length; i++){
		spaces = spaces + "_";
	}
	document.getElementById('answer').innerHTML = spaces;

}