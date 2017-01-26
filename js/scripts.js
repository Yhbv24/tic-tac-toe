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
    if (playerOneOne.turn === true) {
      playerOneOne.turn = false;
      playerTwoTwo.turn = true;
      alert("It's now Player 2's turn!")
      return "YOU LOSE!"
    } else {
      playerOneOne.turn = true;
      playerTwoTwo.turn = false;
      alert("It's now Player 1's turn!")
      return "YOU LOSE!"
    }
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

var turnChecker = function() {
  if (playerOneOne.turn === true) {
    playerOneOne.addToTotal();
    $("#playerScoreOne").text(playerOneOne.totalScore)
    playerOneOne.turn = false;
    playerTwoTwo.turn = true;
    rollCounter = 0
    if (playerOneOne.totalScore >= 100){
      alert("Player One Wins!!");
      playerOneOne.totalScore = 0;
      playerTwoTwo.totalScore = 0;
      playerOneOne.turn = true;
      playerTwoTwo.turn = false;
      alert('Player One goes first')
    } else {
    alert("It's now Player 2's turn!")
    }
  } else {
    playerTwoTwo.addToTotal();
    $("#playerScoreTwo").text(playerTwoTwo.totalScore)
    playerOneOne.turn = true;
    playerTwoTwo.turn = false;
    rollCounter = 0
    if (playerTwoTwo.totalScore >= 100){
      alert("Player Two Wins!!");
      playerOneOne.totalScore = 0;
      playerTwoTwo.totalScore = 0;
      playerOneOne.turn = false;
      playerTwoTwo.turn = true;
      alert('Player two goes first')
    } else {
    alert("It's now Player 1's turn!")
    }
  }
}

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
      if (ranNumber === 1) {
        $("#one").show();
        $("#two").hide();
        $("#three").hide();
        $("#four").hide();
        $("#five").hide();
        $("#six").hide();
      } else if (ranNumber === 2) {
        $("#one").hide();
        $("#two").show();
        $("#three").hide();
        $("#four").hide();
        $("#five").hide();
        $("#six").hide();
      } else if (ranNumber === 3) {
        $("#one").hide();
        $("#two").hide();
        $("#three").show();
        $("#four").hide();
        $("#five").hide();
        $("#six").hide();
      } else if (ranNumber === 4) {
        $("#one").hide();
        $("#two").hide();
        $("#three").hide();
        $("#four").show();
        $("#five").hide();
        $("#six").hide();
      } else if (ranNumber === 5) {
        $("#one").hide();
        $("#two").hide();
        $("#three").hide();
        $("#four").hide();
        $("#five").show();
        $("#six").hide();
      } else if (ranNumber === 6) {
        $("#one").hide();
        $("#two").hide();
        $("#three").hide();
        $("#four").hide();
        $("#five").hide();
        $("#six").show();
      }
      var doIt = add(ranNumber);
      $('#temp_score').text(doIt)
    });

    $("#end_button").click(function() {
      var run = turnChecker();
      $("#temp_score").text(rollCounter);

      // if (createPlayerOne.turn === true) {
      //   createPlayerOne.addToTotal();
      //   $("#playerScoreOne").text(createPlayerOne.totalScore)
      //   createPlayerOne.turn = false;
      //   createPlayerTwo.turn = true;
      //   rollCounter = 0
      //   alert("Player 2 turn")
      // } else {
      //   createPlayerTwo.addToTotal();
      //   $("#playerScoreTwo").text(createPlayerTwo.totalScore)
      //   createPlayerOne.turn = true;
      //   createPlayerTwo.turn = false;
      //   rollCounter = 0
      //   alert("Player 1 turn")
      // }
    });

    // $("#user_input").hide();
    // $("#game_display").show();
  });
});
