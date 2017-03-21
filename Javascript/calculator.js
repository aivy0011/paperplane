$(document).ready(function () {
    $(".numbers").click(function () {
        $("#line").val($("#line").val() + this.value);
    });
    $(".clear").click(function(){
    	remove();
    })
});
function isset(a) {
	if(a != null){
		return true;
	} else if(a === "undefined") {
		return false;
	} else {
		return false;
	}
}
function add() {
	if(isset(first) == false){
		var first = $("#line").val();
		console.log(first);
		$('#line').val('');
	} else {
		var second= $("#line").val();
		alert(second);
		
	}
	$("#line").val(first + second);
}

function remove() {
	$('#line').val('');
}