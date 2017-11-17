function convertToBinary(decimal){
    var binary = "";
    while(decimal > 0){
        if(decimal % 2 == 1){
            binary = 1 + binary;
        } else {
            binary = 0 + binary;
        }
        decimal = Math.floor(decimal/2);
    }
    return binary;
}
$(document).ready(function(){
    $('#decimal').on('input', function(){
        var conversion = convertToBinary(parseInt($('#decimal').val()));
        $('#result').text(conversion)
    })
})