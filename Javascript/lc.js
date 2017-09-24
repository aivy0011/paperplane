function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}
function calculatePayment(loanAmt, annualIntRate, numMons){
    var Months_Per_Year = 12
    annualIntRate = annualIntRate / 100 / Months_Per_Year;
    var numerator = annualIntRate * Math.pow(1 + annualIntRate, numMons);
    var denominator = Math.pow(1 + annualIntRate, numMons) - 1;
    return round((loanAmt * (numerator/denominator)), 2);
}
function display(){
    var Maximum_Interest_Rate = parseInt($("#MIR").val());
    var Number_Of_Months = parseInt($("#LOL").val());    
    var Low_Loan_Amount = parseInt($("#LL").val());
    var High_Loan_Amount = parseInt($("#HL").val());
    var Loan_Increment = parseInt($("#LI").val());

    var table = "<tr><th></th>";
    for(var loan = Low_Loan_Amount; loan <= High_Loan_Amount; loan += Loan_Increment){
        table += "<th class='loan'>$"+loan+"</th>";
    }
    table += "</tr>";
    for(var interest = 1; interest <= Maximum_Interest_Rate; interest++){
        table += "<tr><th class='interest'>"+interest+"%</th>";
        for(var loan = Low_Loan_Amount; loan <= High_Loan_Amount; loan += Loan_Increment){
            monthly = calculatePayment(loan, interest, Number_Of_Months)
            table += "<td class='payments'>$"+monthly+"</td>";
        }
        table += "</tr>";
    }
    $("#table").html(table);
}

$(document).ready(function(){
    display();
    
})