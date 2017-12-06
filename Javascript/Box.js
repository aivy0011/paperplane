/** This class represents a single box for the "Deal or No Deal" Game */
function Box(value) {
    /** The monetary value contained in the box*/
    var _value = value;
    /** Tells whether or not the box is open*/
    var _isOpen = false;
    
    /** 
     * The getter method to get the value of the box
     * @return the value of the box
     */
    this.getValue = function(){
        return _value;
    }
    
    /**
     * The method to test whether or not the box is open
     * @return false if the box is not open, other it will return true
     */
    this.getIsOpen = function(){
        return _isOpen;
    }
    
    /**
     * This method will open the box
     */
    this.open = function(){
        _isOpen = true;
    }
    
    /**
     * This method will return a string that will contain whether or not the
     * box is open and the value of the box
     * @return a string thats tells if the box is open and the value of the box
     */
    this.toString = function(){
        return "Open: " + getIsOpen() + " Value: " + getValue(); 
    }
}

/* Taken from stack overflow used to format the money */
Number.prototype.formatMoney = function(c, d, t){
var n = this, 
    c = isNaN(c = Math.abs(c)) ? 2 : c, 
    d = d == undefined ? "." : d, 
    t = t == undefined ? "," : t, 
    s = n < 0 ? "-" : "", 
    i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))), 
    j = (j = i.length) > 3 ? j % 3 : 0;
   return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
 };
 
/** This class represents the boxes used in the game, includes the functions for ordering the list */
function BoxList(monetaryAmounts){
    /** An array of Box objects. Each element in the array refers to a single Box object. */
    var _boxes = new Array(monetaryAmounts.length);
    for(var index = 0; index < _boxes.length; index++){
        _boxes[index] = new Box(monetaryAmounts[index]);
    }
    
    /**
     * The getter method to get the value of the box at a given index
     * @param index the location of the box class in the array
     * @return the value of the box at the index
     */
    this.getValue = function(index){
        return _boxes[index].getValue();
    }
    
    /**
     * The method to test whether the box is open at a given index
     * @param index the location of the box class in the array
     * @return whether or not the box is open at the index given
     */
    this.isOpen = function(index){
        return _boxes[index].getIsOpen();
    }
    
    /**
     * This method will open the box at the given index
     * @param index the location of the box class in the array
     */
    this.open = function(index){
        _boxes[index].open();
    }
    
    /**
     * This method will run through the array of the boxes and find the average values of the boxes that return false for isOpen
     * @return the average value of the unopened boxes in the array
     */
    this.averageValueOfUnopenedBoxes = function(){
        var count = 0;
        var sum = 0;
        for(var index = 0; index < _boxes.length; index++){
            if(!this.isOpen(index)){
                count++;
                sum += _boxes[index].getValue();
            }
        }
        if(count == 0){
            return 0;
        }
        return (sum/count);
    }
    
    /**
     * This method is responsible for rearranging the boxes for the game using a basic array swapping algorithm
     */
    this.shuffle = function(numberOfSwaps){
        for(var swaps = 0; swaps < numberOfSwaps; swaps++){
            var arrayLength = _boxes.length;
            var r1 = Math.floor(Math.random() * arrayLength);
            var r2 = Math.floor(Math.random() * arrayLength);
            var temp = _boxes[r1];
            _boxes[r1] = _boxes[r2];
            _boxes[r2] = temp;
        }
    }
    
    /**
     * This method is the toString method for the BoxList class, it'll return a string with the toString of each Box in the array
     * @return the toString of each box in one big string with line beaks
     */
    this.toString = function(){
        var list = "";
        for(var index = 0; index < _boxes.length; index++){
            list += _boxes[index].toString() + "\n";
        }
        return list;
    }
}

/** This classs is responsible for all the functions involve with the game*/
function DealGame(){
    /** Number of boxes in the game*/
    this.NUM_BOXES = 26;
    
    /** Monetary values that will be used in the game*/
    this.BOX_VALUES = [0.01, 1, 5, 10, 25, 50, 75, 100, 200, 300, 400, 500, 750, 1000, 5000, 10000, 25000, 50000, 75000,100000, 200000, 300000,400000, 500000, 750000, 1000000];
    
    /** Number of boxes to be open in each round*/
    this.BOXES_IN_ROUND = [0, 6, 5, 4, 3, 2, 1, 1, 1, 1, 1];
    
    /** Number of rounds in the games*/
    this.NUM_ROUND = 10;
    /** Number of times boxes are swapped during the set up */
    var _BOX_SWAPS = 500;
    /** This will store the values of the boxes open in the game*/
    this.OPEN_BOXES_VALUES = []
    
    /** */
    var _playerBoxIndex;
    /** */
    var _hasPlayerChosenBox = false;
    /** */
    var _round = 0;
    /** */
    var _boxesOpenedThisRound = 0;
    /** */
    var _boxesOpenedTotal = 0;
    /** */
    var _boxList = new BoxList(this.BOX_VALUES);
    _boxList.shuffle(_BOX_SWAPS);
    
    /** */
    this.selectBox = function(index){
        if(!_hasPlayerChosenBox){
            _playerBoxIndex = index;
            _hasPlayerChosenBox = true;
            this.startNextRound();
        } else {
            _boxList.open(index);
            this.OPEN_BOXES_VALUES.push(this.getValueInBox(index));
            _boxesOpenedThisRound++;
            _boxesOpenedTotal++;
        }
    }
    /** 
     *
     */
    this.getPlayerBoxIndex = function(){
        return _playerBoxIndex;
    }
    /** 
     *
     * 
     */
    this.hasPlayerChosenBox = function(){
        if(_hasPlayerChosenBox){
            return true;
        }
        return false;
    }
    /** 
     *
     * 
     */
    this.getBoxesRemainingOpenThisRound = function(){
        return (this.BOXES_IN_ROUND[_round] - this.getBoxesOpenedThisRound());
    }
    /** 
     *
     * 
     */
    this.getBoxesOpenedThisRound = function(){
        return _boxesOpenedThisRound;
    }
    /** 
     *
     * 
     */
    this.getRound = function(){
        return _round;
    }
    /** 
     *
     * 
     */
    this.startNextRound = function(){
        _round++;
        _boxesOpenedThisRound = 0;
    }
    /** 
     *
     * 
     */
    this.isEndOfRound = function(){
        if(this.getBoxesRemainingOpenThisRound() == 0){
            return true;
        } 
        return false;
    }
    /** 
     *
     * 
     */
    this.getPlayerBoxValue = function(){
        return _boxList.getValue(_playerBoxIndex);
    }
    /** 
     *
     * 
     */
    this.isBoxOpen = function(index){
        return _boxList.isOpen(index);
    }
    /** 
     *
     * 
     */
    this.getValueInBox = function(index){
        return _boxList.getValue(index);
    }
    /** 
     *
     * 
     */
    this.getCurrentOffer = function(){
        return (_boxList.averageValueOfUnopenedBoxes() * _round)/10;
    }
}

var game = new DealGame();

/** 
 * This function is responsible for creating the format of the Deal or no Deal board
 * The left side will create the buttons that represents the box, the right side will hold the remaining value
 */
function DealGameDisplay(){
    var button = "";
    for(i = 0; i < game.NUM_BOXES; i++){
        if(game.hasPlayerChosenBox()){
            if(game.getPlayerBoxIndex() == i){
                button += "<button type='button' class='btn btn-default boxes' value='"+ game.getPlayerBoxIndex() +"' disabled>Your Box</button>";
            } else if(!game.isBoxOpen(i)){    
                button += "<button type='button' class='btn btn-default boxes' value='"+ i +"'>Box " + (i + 1) + "</button>";
            } else {
                button += "<button type='button' class='boxes' value='"+ i +"'disabled>$" + game.getValueInBox(i).formatMoney(2) + "</button>";
            }
        } else {    
            button += "<button type='button' class='btn btn-default boxes' value='"+ i +"'>Box " + (i + 1) + "</button>";
        }
    }
    var left = "";
    var right = "";
    for(i = 0; i < 13; i++){
        if(game.OPEN_BOXES_VALUES.includes(game.BOX_VALUES[i])){
            left += "<h2 class='open'>$" + game.BOX_VALUES[i].formatMoney(2) + "</h2>";
        } else {
            left += "<h2>$" + game.BOX_VALUES[i].formatMoney(2) + "</h2>";
        }
    }
    for(i = 13; i < 26; i++){
        if(game.OPEN_BOXES_VALUES.includes(game.BOX_VALUES[i])){
            right += "<h2 class='open'>$" + game.BOX_VALUES[i].formatMoney(2) + "</h2>";
        } else {
            right += "<h2>$" + game.BOX_VALUES[i].formatMoney(2) + "</h2>";
        }
    }
    $('#content').html(button);
    $('#left').html(left);
    $('#right').html(right);
}


$(document).ready(function(){
    $('#content').height($('#content').width() - 80);
    DealGameDisplay();
    console.log(game.getRound() + " : "+ game.getBoxesOpenedThisRound() + " : " + game.getBoxesRemainingOpenThisRound());
    $(document).on("click",".boxes",function(){
        game.selectBox($(this).val());
        if(game.getRound() != 0){
            if(game.getBoxesOpenedThisRound() == 0){
                $('#instruction').html("<p>"+ game.getBoxesRemainingOpenThisRound() +" boxes left to open this round </p>")    
            } else {
                $('#instruction').html("<p>Player opens Box "+ ($(this).val() - 0 + 1) + " which contains $" + game.getValueInBox($(this).val()).formatMoney(2)  +". "+game.getBoxesRemainingOpenThisRound() +" boxes left to open this round </p>");
            }
        }
        DealGameDisplay()
        if(game.isEndOfRound()){
            game.startNextRound();
            $("#myModal").on("show.bs.modal", function(){
                $("#offer").text("$"+game.getCurrentOffer().formatMoney(2))
            })
            $("#myModal").modal()
        }
        
    })
    $(document).on("click", "#accept", function(){
        $(".boxes").attr("disabled", "true");
        $("#myModal").modal("hide");
        if(game.getCurrentOffer() > game.getPlayerBoxValue()){
            alert("You have accepted the offer of $" + game.getCurrentOffer().formatMoney(2) + ". Your box contained $" + game.getPlayerBoxValue().formatMoney(2) + ", so you made a GOOD DEAL!");
        } else {
            alert("You have accepted the offer of $" + game.getCurrentOffer().formatMoney(2) + ". Your box contained $" + game.getPlayerBoxValue().formatMoney(2) + ", so you made a BAD DEAL!");
        }
    })
    
})