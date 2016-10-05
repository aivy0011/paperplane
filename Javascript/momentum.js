function get_time(){
    var d = new Date();
    var hours = d.getHours()
    var minutes = d.getUTCMinutes()
    if(hours > 12){
        hours -= 12;
        if(minutes < 10){
            var time = hours.toString() +":0"+ minutes.toString();
        } else {
            var time = hours.toString() +":"+ minutes.toString() ;
        }
    } else {
         if(minutes < 10){
            var time = (hours).toString() +":0"+ (minutes.toString());
        } else {
            var time = (hours).toString() +":"+ (minutes.toString());
        }
    }
    
    $('#time').text(time);
    
    if(d.getHours() < 12){
        $('#message').text('Good morning, Allen');
    } else if (d.getHours() >= 18){
        $('#message').text('Good evening, Allen');
    } else {
        $('#message').text('Good afternoon, Allen');  
    }
    
    setTimeout(get_time,1000);
}

function background_image(){
    var images = ["url('/Images/1.jpg') no-repeat center center fixed","url('/Images/2.jpg') no-repeat center center fixed" ,"url('/Images/3.jpg') no-repeat center center fixed",]
    var rnumber = Math.floor(Math.random() * (2/*max*/ - 0 /*min*/ + 1)) + 0 /*min*/
    
    $('body').css({'background': images[rnumber],
    '-webkit-background-size': 'cover',
  '-moz-background-size': 'cover',
  '-o-background-size': 'cover',
  'background-size': 'cover'
    }
    );
}
$(document).ready(function(){
    get_time();
    background_image();
})