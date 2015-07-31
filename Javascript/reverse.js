function reverse() {
	var words = document.getElementById('words').value;
	var letters = words.split('');
	var count = letters.length;
	console.log(count);
	for(i=(count - 1); i >= 0; i--){
		var display = letters[i];
		document.getElementById('display').innerHTML = display;
	}
}