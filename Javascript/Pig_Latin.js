function change() {
	if($('#string').val() != ''){
		var result = [];
		var string = document.getElementById('string').value;
		setTimeout(change,500)
		var string = string.split(" ");
		for(var i = 0; i < string.length; i++) {
			var word = string[i];
			var fletter = word.substring(0,1);
			var fletter = fletter.toLowerCase();
			var lword = word.length;
			switch(fletter){
				case 'a':
					word += "way";
					result.push(word);
					break;
				case 'e':
					word += "way";
					result.push(word);
					break;
				case 'i':
					word += "way";
					result.push(word);
					break;
				case 'o':
					word += "way";
					result.push(word);
					break;
				case 'u':
					word += "way";
					result.push(word);
					break;
				default:
					fletter = word.substring(0,1);
					word = word.substring(1, lword) + fletter + "ay"
					result.push(word);
			}
		}
		document.getElementById("result").innerHTML = result.join(" ");
	} else {
		$('#result').text('You did not enter anything');
		setTimeout(change,500);
	}
}
$(document).ready(function(){
	change()
})

