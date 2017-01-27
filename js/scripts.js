//*****BACK-END*****

function Player(playerName, turn) {
  this.playerName = name;
  this.turn = turn;
}

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
var playerTwo = new Player("Sean");

var numberOneChecker = function() {
    winningNumbers.forEach(function(number) {
    for (var i = 0; i < number.length; i++) {
      if (number[i] === 1) {
        if (playerOne.turn === true) {
          return number[i] = "X"
        } else if (playerOne.turn === false) {
          return number[i] = "O"
        }
      };
    };
  });
};

var numberTwoChecker = function() {
    winningNumbers.forEach(function(number) {
    for (var i = 0; i < number.length; i++) {
      if (number[i] === 2) {
        if (playerOne.turn === true) {
          return number[i] = "X"
        } else if (playerOne.turn === false) {
          return number[i] = "O"
        }
      };
    };
  });
};

var numberThreeChecker = function() {
    winningNumbers.forEach(function(number) {
    for (var i = 0; i < number.length; i++) {
      if (number[i] === 3) {
        if (playerOne.turn === true) {
          return number[i] = "X"
        } else if (playerOne.turn === false) {
          return number[i] = "O"
        }
      };
    };
  });
};

var numberFourChecker = function() {
    winningNumbers.forEach(function(number) {
    for (var i = 0; i < number.length; i++) {
      if (number[i] === 4) {
        if (playerOne.turn === true) {
          return number[i] = "X"
        } else if (playerOne.turn === false) {
          return number[i] = "O"
        }
      };
    };
  });
};

var numberFiveChecker = function() {
    winningNumbers.forEach(function(number) {
    for (var i = 0; i < number.length; i++) {
      if (number[i] === 5) {
        if (playerOne.turn === true) {
          return number[i] = "X"
        } else if (playerOne.turn === false) {
          return number[i] = "O"
        }
      };
    };
  });
};

var numberSixChecker = function() {
    winningNumbers.forEach(function(number) {
    for (var i = 0; i < number.length; i++) {
      if (number[i] === 6) {
        if (playerOne.turn === true) {
          return number[i] = "X"
        } else if (playerOne.turn === false) {
          return number[i] = "O"
        }
      };
    };
  });
};

var numberSevenChecker = function() {
    winningNumbers.forEach(function(number) {
    for (var i = 0; i < number.length; i++) {
      if (number[i] === 7) {
        if (playerOne.turn === true) {
          return number[i] = "X"
        } else if (playerOne.turn === false) {
          return number[i] = "O"
        }
      };
    };
  });
};

var numberEightChecker = function() {
    winningNumbers.forEach(function(number) {
    for (var i = 0; i < number.length; i++) {
      if (number[i] === 8) {
        if (playerOne.turn === true) {
          return number[i] = "X"
        } else if (playerOne.turn === false) {
          return number[i] = "O"
        }
      };
    };
  });
};

var numberNineChecker = function() {
    winningNumbers.forEach(function(number) {
    for (var i = 0; i < number.length; i++) {
      if (number[i] === 9) {
        if (playerOne.turn === true) {
          return number[i] = "X"
        } else if (playerOne.turn === false) {
          return number[i] = "O"
        }
      };
    };
  });
};

var winChecker = function() {
  winningNumbers.forEach(function(number) {
    if (number[0] === "X" && number[1] === "X" && number[2] === "X") {
      alert("Player one wins!")
      return "Player one wins!";
    } else if (number[0] === "O" && number[1] === "O" && number[2] === "O") {
      alert("Player two wins!")
      return "Player one wins!";
    }
  });
};

var toggle = function(){
  playerOne.turn = !playerOne.turn;
}

//*****FRONT-END*****

$(function() {
  $("#one").one("click", function() {
    if (playerOne.turn) {
      $(this).text("X")
    } else {
      $(this).text("O")
    }
    numberOneChecker();
    toggle();
    winChecker();
  });

  $("#two").one("click", function() {
    if (playerOne.turn) {
      $(this).text("X")
    } else {
      $(this).text("O")
    }
    numberTwoChecker();
    toggle();
    winChecker();
  });

  $("#three").one("click", function() {
    if (playerOne.turn) {
      $(this).text("X")
    } else {
      $(this).text("O")
    }
    numberThreeChecker();
    toggle();
    winChecker();
  });

  $("#four").one("click", function() {
    if (playerOne.turn) {
      $(this).text("X")
    } else {
      $(this).text("O")
    }
    numberFourChecker();
    toggle();
    winChecker();
  });

  $("#five").one("click", function() {
    if (playerOne.turn) {
      $(this).text("X")
    } else {
      $(this).text("O")
    }
    numberFiveChecker();
    toggle();
    winChecker();
  });

  $("#six").one("click", function() {
    if (playerOne.turn) {
      $(this).text("X")
    } else {
      $(this).text("O")
    }
    numberSixChecker();
    toggle();
    winChecker();
  });

  $("#seven").one("click", function() {
    if (playerOne.turn) {
      $(this).text("X")
    } else {
      $(this).text("O")
    }
    numberSevenChecker();
    toggle();
    winChecker();
  });

  $("#eight").one("click", function() {
    if (playerOne.turn) {
      $(this).text("X")
    } else {
      $(this).text("O")
    }
    numberEightChecker();
    toggle();
    winChecker();
  });

  $("#nine").one("click", function() {
    if (playerOne.turn) {
      $(this).text("X")
    } else {
      $(this).text("O")
    }
    numberNineChecker();
    toggle();
    winChecker();
  });

  $("#reset").click(function() {
    location.reload();
  });
});
