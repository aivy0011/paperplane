function contains(a, obj) {
    var i = a.length;
    while (i--) {
       if (a[i] === obj) {
           return true;
       }
    }
    return false;
}
var vowels = ["a","A","e","E","i","I","o","O","u","U"]
var result = ""
function t() {
	var string = document.getElementById('string').value;
	var string = string.split(" ");
	for(i = 0; i < string.length; i++) {
		var word = string[i]
		var fletter = word.substring(0);
		if (contains(vowels, fletter)){
			result = result + word + "way ";
		} else {
			result = result + word.substring(1, (word.length - 1)) + fletter + "ay ";
		}
	}
	document.getElementById("result").innerHTML = result;
}
