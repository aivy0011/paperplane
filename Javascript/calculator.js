$(document).ready(function () {
    $(".numbers").click(function () {
        $("#line").val($("#line").val() + this.value);
    });
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
	if(isset(first)){
		var first = $("#line").val();
		console.log(first);
	} else {
		var second= $("#line").val();
		alert(second);
	}
	$("#line").val("")
}

function remove() {
	var line = $("#line").val()
	var length = line.length - 1;
	$("#line").val(line.substring(0, length));
}