$(document).ready(function(){
    var EmployeePlan = 105;
    var ChildrenPlan = 290;
    var SpousePlan = 670;
    var FamilyPlan = 710;
    var Obese = 30;
    var Overwegiht = 25;
    var BMIMultiplier = 703;
    var NonSmoker = 30;
    var NotOverweight = 15;
    var IsObese = 20;
    $('#start').click(function(){
        $('#start').hide("clip");
        $("#plans").show("drop");
    })
    $(".btn-block").click(function(){
        $('#myModal').modal('show');
        $("#Title").text($(this).text() + " Plan");
        var plan = $(this).val();
        if(plan == 'c' || plan == 'e'){
            $('#spouse').hide();
        } else {
            $('#spouse').show();
        }
    })

    $("#Calc").click(function(){
        $('#myModal').modal('hide');

    })
    function bmi(weight, height){
        return (weight * Math.pow(height, 2) * BMIMultiplier);
    }

    function getPremium(plan, smoker, weight, height, spouseSmoker, spouseWeight, spouseHeight){
        if(plan == 'e'){
            premium = 105;
        } else if(plan == 'c'){
            premium = 290;
        } else if(plan == 's'){
            premium = 670;
        } else if(plan == 'f'){
            premium = 710;
        } else {
            console.log("Invalid Plan");
        }

        if(!smoker){
            premium -= 
        }
    }
})