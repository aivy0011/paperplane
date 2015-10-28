function get_names() {
	var string = document.getElementById('Names').value;
	var names = string.split(" ");
	var names = {fname: names[0], lname: names[1]};
	return names.fname + names.lname
}
function switch() {
	get_names()
	var fname = (names.lname).substring(0,1);
	var lname = names.fname;
	var
}