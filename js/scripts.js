//*****BACK-END*****

function Player(playerName, turn) {
  this.playerName = name;
  this.turn = turn;
}

var playerOneNumbers = [1,2,3,4,5,6,7,8,9];
var playerTwoNumbers = [1,2,3,4,5,6,7,8,9];
var winningNumbers = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [1,4,7],
  [2,5,8],
  [3,6,9],
  [1,5,9],
  [3,5,7]
];

var playerOne = new Player("Ash", true);
var playerTwo = new Player("Sean", false);

var numberOneChecker = winningNumbers.forEach(function(number) {
  for (var i = 0; i < number.length; i++) {
    if (number[i] === 1) {
      if (playerOne.turn === false) {
        return number[i] = "X"
        playerOne.turn = true
      } else if (playerOne.turn === true) {
        return number[i] = "O"
        playerOne.turn = false
      }
    };
  };
});

var numberTwoChecker = winningNumbers.forEach(function(number) {
  for (var i = 0; i < number.length; i++) {
    if (number[i] === 2) {
      if (playerOne.turn === false) {
        return number[i] = "X"
      } else if (playerOne.turn === true) {
        return number[i] = "O"
      }
    };
  };
});

var numberThreeChecker = winningNumbers.forEach(function(number) {
  for (var i = 0; i < number.length; i++) {
    if (number[i] === 3) {
      if (playerOne.turn === false) {
        return number[i] = "X"
      } else if (playerOne.turn === true) {
        return number[i] = "O"
      }
    };
  };
});
var numberFourChecker = winningNumbers.forEach(function(number) {
  for (var i = 0; i < number.length; i++) {
    if (number[i] === 4) {
      if (playerOne.turn === false) {
        return number[i] = "X"
      } else if (playerOne.turn === true) {
        return number[i] = "O"
      }
    };
  };
});
var numberFiveChecker = winningNumbers.forEach(function(number) {
  for (var i = 0; i < number.length; i++) {
    if (number[i] === 5) {
      if (playerOne.turn === false) {
        return number[i] = "X"
      } else if (playerOne.turn === true) {
        return number[i] = "O"
      }
    };
  };
});

var numberSixChecker = winningNumbers.forEach(function(number) {
  for (var i = 0; i < number.length; i++) {
    if (number[i] === 6) {
      if (playerOne.turn === false) {
        return number[i] = "X"
      } else if (playerOne.turn === true) {
        return number[i] = "O"
      }
    };
  };
});
var numberSevenChecker = winningNumbers.forEach(function(number) {
  for (var i = 0; i < number.length; i++) {
    if (number[i] === 7) {
      if (playerOne.turn === false) {
        return number[i] = "X"
      } else if (playerOne.turn === true) {
        return number[i] = "O"
      }
    };
  };
});

var numberEightChecker = winningNumbers.forEach(function(number) {
  for (var i = 0; i < number.length; i++) {
    if (number[i] === 8) {
      if (playerOne.turn === false) {
        return number[i] = "X"
      } else if (playerOne.turn === true) {
        return number[i] = "O"
      }
    };
  };
});

var numberNineChecker = winningNumbers.forEach(function(number) {
  for (var i = 0; i < number.length; i++) {
    if (number[i] === 9) {
      if (playerOne.turn === false) {
        return number[i] = "X"
      } else if (playerOne.turn === true) {
        return number[i] = "O"
      }
    };
  };
});

//*****FRONT-END*****

$(function() {
  $("#one").one("click", function() {
    numberOneChecker;
    alert(winningNumbers)
  });

  $("#two").one("click", function() {
    numberTwoChecker;
    alert(winningNumbers)
  });
});
