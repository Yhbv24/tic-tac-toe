//*****BACK-END*****
function Player(playerId, totalScore, turn) {
  this.playerId = playerId;
  this.totalScore = totalScore;
  this.turn = turn;
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
    alert("Switch Turns")
    return "YOU LOSE!"
  } else {
    return rollCounter += n;
  }
};

var createPlayerOneFunction = function() {
  return new Player(1, 0, true);
}
var createPlayerTwoFunction = function() {
   return new Player(2, 0, false);
}

var playerOneOne = createPlayerOneFunction();
var playerTwoTwo = createPlayerTwoFunction();

//*****FRONT-END*****

$(function() {
  $("#user_input").submit(function(event) {
    event.preventDefault();

    var playerOne = $("#name_player1").val();
    var playerTwo = $("#name_player2").val();

    var createPlayerOne = playerOneOne;
    var createPlayerTwo = playerTwoTwo;

    $("#player1").text(playerOne + ": ");
    $("#player2").text(playerTwo + ": ");

    $("#roll_button").click(function() {
      var ranNumber = diceRoller();
      $('#roll_score').text(ranNumber)
      var doIt = add(ranNumber);
      $('#temp_score').text(doIt)
    });

    $("#end_button").click(function() {
      if (createPlayerOne.turn === true) {
        createPlayerOne.addToTotal();
        $("#playerScoreOne").text(createPlayerOne.totalScore)
        createPlayerOne.turn = false;
        createPlayerTwo.turn = true;
        rollCounter = 0
        alert("Player 2 turn")
      } else {
        createPlayerTwo.addToTotal();
        $("#playerScoreTwo").text(createPlayerTwo.totalScore)
        createPlayerOne.turn = true;
        createPlayerTwo.turn = false;
        rollCounter = 0
        alert("Player 1 turn")
      }
    });

    // $("#user_input").hide();
    // $("#game_display").show();
  });
});
