if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  xSquares();
  contentEditing();
  buttonFilter();
  playAgain();
}

function xSquares() {
  let squares = document.getElementsByClassName("square");
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", () => {
      let numActive = numScaled();
      if (numActive == 1) {
        if (squares[i].style.transform == "scale(1.2)") {
          squares[i].style.transform = "scale(1)";
        } else if (
          squares[i].style.transform == "scale(1)" ||
          squares[i].style.transform == ""
        ) {
          lowlight();
          squares[i].style.transform = "scale(1.2)";
        }
      } else {
        squares[i].style.transform = "scale(1.2)";
      }
    });
  }
}

function numScaled() {
  let squares = document.getElementsByClassName("square");
  let numScales = 0;
  for (let i = 0; i < squares.length; i++) {
    if (squares[i].style.transform == "scale(1.2)") {
      numScales++;
    }
  }

  return numScales;
}

function lowlight() {
  let squares = document.getElementsByClassName("square");
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.transform = "scale(1)";
  }
}

function contentEditing() {
  let squares = document.getElementsByClassName("square");
  for (let i = 0; i < squares.length; i++) {
    let content = squares[i].getElementsByClassName("content")[0];
    document.addEventListener("keydown", (e) => {
      if (e.code == "KeyX" && squares[i].style.transform == "scale(1.2)") {
        content.innerText = "X";
        squares[i].style.transform = "scale(1)";
        if (isGameEnd()) {
          applyFilter();
          let turn = document.getElementsByClassName("player-turn")[0];
          if (turn.innerText == "Player 1") {
            updatePlayerScore("Player 2");
          } else {
            updatePlayerScore("Player 1");
          }
        } else {
          updatePlayerTurn();
        }
      } else if (
        e.code == "Backspace" &&
        squares[i].style.transform == "scale(1.2)"
      ) {
        content.innerText = "";
      }
    });
  }
}

function applyFilter() {
  let squares = document.getElementsByClassName("square");
  lowlight();
  let filters = document.getElementsByClassName("board-filter")[0];
  filters.style.width = "100%";

  let prompt = document.querySelector(".play-again");
  prompt.style.display = "block";
}

function buttonFilter() {
  let button = document.getElementsByClassName("random-button");
  button[0].addEventListener("click", applyFilter);
}

function isGameEnd() {
  let squares = document.getElementsByClassName("square");
  if (
    (squares[0].innerText == squares[1].innerText &&
      squares[0].innerText == squares[2].innerText &&
      squares[0].innerText == "X") |
    (squares[3].innerText == squares[4].innerText &&
      squares[3].innerText == squares[5].innerText &&
      squares[3].innerText == "X") |
    (squares[6].innerText == squares[7].innerText &&
      squares[6].innerText == squares[8].innerText &&
      squares[6].innerText == "X") |
    (squares[0].innerText == squares[3].innerText &&
      squares[0].innerText == squares[6].innerText &&
      squares[0].innerText == "X") |
    (squares[1].innerText == squares[4].innerText &&
      squares[1].innerText == squares[7].innerText &&
      squares[1].innerText == "X") |
    (squares[2].innerText == squares[5].innerText &&
      squares[2].innerText == squares[8].innerText &&
      squares[2].innerText == "X") |
    (squares[0].innerText == squares[4].innerText &&
      squares[0].innerText == squares[8].innerText &&
      squares[0].innerText == "X") |
    (squares[2].innerText == squares[4].innerText &&
      squares[6].innerText == squares[2].innerText &&
      squares[6].innerText == "X")
  ) {
    return true;
  }

  return false;
}

function updatePlayerTurn() {
  let turn = document.getElementsByClassName("player-turn")[0];
  if (turn.innerText == "Player 1") {
    turn.innerText = "Player 2";
  } else {
    turn.innerText = "Player 1";
  }
}

function updatePlayerScore(player) {
  let scores = document.querySelectorAll(".score");
  let turn = document.getElementsByClassName("player-turn")[0];
  if (player == "Player 1") {
    scores[0].innerText = parseInt(scores[0].innerText) + 1;
    turn.innerText = "Player 1(Winner)";
  } else if (player == "Player 2") {
    scores[1].innerText = parseInt(scores[1].innerText) + 1;
    turn.innerText = "Player 2(Winner)";
  }
}

function playAgain() {
  let prompt = document.getElementsByClassName("play-again")[0];
  prompt.addEventListener("click", clearBoards);
}

function clearBoards() {
  let squares = document.getElementsByClassName("square");
  for (let i = 0; i < squares.length; i++) {
    let content = squares[i].getElementsByClassName("content")[0];
    content.innerText = "";
  }

  lowlight();
  let filters = document.getElementsByClassName("board-filter")[0];
  filters.style.width = "0%";

  let prompt = document.querySelector(".play-again");
  prompt.style.display = "none";
}
