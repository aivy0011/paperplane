function drawBackground($canvas, width, height){
    $canvas.drawRect({
      fillStyle: '#8b4513',
      x: width/2, y: height-(height/10),
      width: width,
      height: (height/5)
    });
    $canvas.drawRect({
      fillStyle: '#87cefa',
      x: 0, y: 0,
      width: width,
      height: height-(height/5),
      fromCenter: false
    })
    $canvas.drawArc({
      fillStyle: 'yellow',
      strokeStyle: '#000',
      strokeWidth: 5,
      x: width, y: 0,
      radius: Math.min(height/3, width/5),
      start: 90, end: 270,
    });
}
function animate(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.canvas.width  = window.innerWidth - 50;
    ctx.canvas.height = window.innerHeight - 110;
    var width = window.innerWidth - 50;
    var height = window.innerHeight - 110;
    var $canvas = $('#myCanvas');
    for(i = 1; i < width; i++){
        drawBackground($canvas, width, height);
        clouds(150 * i, 150, width, height, $canvas) 
    } 

}
function clouds(x, y, height, width, $canvas) {
    $canvas.drawEllipse({
      fillStyle: 'white',
      x: x, y: y,
      width: width/3, height: (height/15)
    });
}
$(document).ready(function(){
    setInterval(animate, 50);
})