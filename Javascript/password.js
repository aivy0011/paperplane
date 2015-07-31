function submit() {
	var PasswordLength = document.getElementById('length').value;
	console.log(PasswordLength);
	var ncharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmonpqrstuvwxyz0123456789"
	var characters = ncharacters.split("");
	var lcharacters = ncharacters.length - 1;
	var password = ""
	console.log(lcharacters);
	for(i = 0; i < PasswordLength; i++){
		var rnumber = Math.floor((Math.random() * lcharacters));
		var password = password + characters[rnumber];
		document.getElementById('Password').innerHTML = password;
	}
}