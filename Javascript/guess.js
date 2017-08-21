var lo = 1;
var hi = 100;
var guess = randomNumber(lo, hi);

$(document).ready(function(){	
	$('#btn').click(function(){
		$('#btn').hide();
		Start();
		$(document).on('click','.response',function(){
		  var id = $(this).attr('id');
		  Guess(id);	 
		});
	})
})


function Start() {
	$('#btn').after("<div id='guess'><h1 id='Number'>"+guess+"</h1><button class='btn response' id='<' style='background-color:#2ecc71 ; color: white;'>Less than</button>&nbsp<button class='btn response' id='=' style='background-color:#2c3e50; color: white;'>That's the Number</button>&nbsp<button class='btn response' id='>' style='background-color:#e74c3c; color: white;'>Greater than</button></div>");
}
function Guess(value) {
	var check = value;
	if(check != '='){
		if(check == '<'){
			hi = guess;
			guess = randomNumber(lo, hi);
			$('#Number').html(guess);
		}

		else if(check == '>'){
			lo = guess;
			guess = randomNumber(lo, hi);
			$('#Number').html(guess);
		}
	} else {
		$('#guess').hide();
		$('#Number').html('The Computer was able to guess your number')
	}
}
function randomNumber(min, max){
	return Math.floor(Math.random() * (max-min+1) + min);
}