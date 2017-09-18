/*** Variables ***/
$(document).ready(function(){
    setInterval(userTriangle, 50);
})
function calculateX(x, sideLength , side) {
    if(side == 1){
      return (x - sideLength / 2);  
    } else {
      return (x + sideLength / 2)  
    }   
}

function calculateY(y, sideLength) {
    return Math.round((y + sideLength * Math.sqrt(3) / 2));
}

function drawTriangle($canvas, x, y, sideLength, color){
    var x2 = calculateX(x, sideLength, 1);
    var x3 = calculateX(x, sideLength, 2);
    var y2 = calculateY(y, sideLength);
    $canvas.drawLine({
        strokeStyle: color,
        strokeWidth: 1,
        closed: true,
        x1: x, y1: y,
        x2: x2, y2: y2,
        x3: x3, y3: y2,
    });
}
function userTriangle(){
    var $canvas = $('#myCanvas');
    $canvas.clearCanvas()
    var Length = 100;
    var initialX = 350;
    var initialY = 50;
    var numRows = $('#numRows').val();
    var color = $('#colorOfLine').val();
    var x = initialX;
    var y = initialY;
    var x2 = initialX;
    for(var i = 1; i <= numRows; i++){
        drawTriangle($canvas, x, y, Length,color);
        for(var j = 1; j < i; j++){
            x2 += Length;
            drawTriangle($canvas, x2, y, Length,color);
        }
        y = calculateY(y, Length);
        x = calculateX(x, Length, 1);
        x2 = x;
    }  
}

