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
      if (number === ["X","X","X"]) {
        alert("Player one wins!")
      } else if (number === ["O","O","O"]) {
        alert("Player two wins!")
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
    alert(winningNumbers)
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
    alert(winningNumbers)
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
    alert(winningNumbers)
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
    alert(winningNumbers)
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
    alert(winningNumbers)
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
    alert(winningNumbers)
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
    alert(winningNumbers)
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
    alert(winningNumbers)
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
    alert(winningNumbers)
  });

  $("#reset").click(function() {
    location.reload();
  });
});
