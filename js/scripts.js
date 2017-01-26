//*****BACK-END*****
function Player(playerId, totalScore) {
  this.playerId = playerId;
  this.totalScore = totalScore;
}

Player.prototype.addToTotal = function() {
  return this.totalScore += rollCounter;
}

var diceRoller = function() {
  var maths = Math.floor((Math.random() * 6) + 1);
  return maths;
};

var rollCounter = 0;

var add = function(n) {
  if (n === 1) {
    rollCounter = 0
    return "YOU LOSE!"
  } else {
    return rollCounter += n;
  }
};

//*****FRONT-END*****

$(function() {
  $("#user_input").submit(function(event) {
    event.preventDefault();

    var playerOne = $("#name_player1").val();
    var playerTwo = $("#name_player2").val();

    var createPlayerOne = new Player(1, 0);
    var createPlayerTwo = new Player(2, 0);

    $("#player1").text(playerOne + ": ");
    $("#player2").text(playerTwo + ": ");

    $("#roll_button").click(function() {
      var ranNumber = diceRoller();
      $('#roll_score').text(ranNumber)
      var doIt = add(ranNumber);
      $('#temp_score').text(doIt)
    });

    $("#end_button").click(function() {
      createPlayerOne.addToTotal();
      $("#playerScoreOne").text(createPlayerOne.totalScore)
    });

    // $("#user_input").hide();
    // $("#game_display").show();
  });
});
