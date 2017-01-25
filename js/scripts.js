//*****BACK-END*****
function Player(playerName, totalScore) {
  this.playerName = playerName;
  this.totalScore = totalScore;
}


var diceRoller = function() {
  var maths = Math.floor((Math.random() * 6) + 1);
  return maths;
}

var rollCounter = 0;

var add = function(n) {
  return rollCounter += n;
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
    $('#roll_score').text(ranNumber)
    var tempScore = add(ranNumber);
    $('#temp_score').text(tempScore)
  });
});
