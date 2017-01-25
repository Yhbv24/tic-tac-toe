//*****BACK-END*****
function Player(playerName, totalScore) {
  this.playerName = playerName;
  this.totalScore = totalScore;
}

Player.prototype.tempScore = function() {
  tempScore += rollScore;
};

Player.prototype.rollScore = function(diceRoller) {
  rollScore += rollScore;
};

var diceRoller = function() {
   Math.floor(Math.random() * ((6 - 1) + 1) + 1);
}
var tempNumber = [];

var counter = function() {
  var totalTempNumber = 0;
  for (var i = 0; i < tempNumber.length; i++) {
     totalTempNumber += tempNumber[i]
  }

  return totalTempNumber;
};


//*****FRONT-END*****

$(function() {
  $("#user_input").submit(function(event) {
    event.preventDefault();

    var playerOneName = $("#name_player1").val();
    var playerTwoName = $("#name_player2").val();

    var createPlayerOne = new Player(playerOneName, 0);
    var createPlayerTwo = new Player(playerTwoName, 0);

    $("#player1").text(createPlayerOne.playerName + ": " + createPlayerOne.totalScore);
    $("#player2").text(createPlayerTwo.playerName + ": " + createPlayerTwo.totalScore);

    $("#user_input").hide();
    $("#game_display").show();
  });

  $("#roll_button").click(function() {
    var ranNumber = diceRoller();
    $("#roll_score").text(ranNumber);
    tempNumber.push(ranNumber);
    var output = counter();
    $("#temp_score").text(output);
  });
});
