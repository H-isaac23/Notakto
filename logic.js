if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  xSquares();
}

function xSquares() {
  let squares = document.getElementsByClassName("square");
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", () => {
      let numActive = numScaled(squares);
      if (numActive == 1) {
        if (squares[i].style.transform == "scale(1.2)") {
          squares[i].style.transform = "scale(1)";
        } else if (
          squares[i].style.transform == "scale(1)" ||
          squares[i].style.transform == ""
        ) {
          lowlight(squares);
          squares[i].style.transform = "scale(1.2)";
        }
      } else {
        squares[i].style.transform = "scale(1.2)";
      }
    });
  }
}

function numScaled(squares) {
  let numScales = 0;
  for (let i = 0; i < squares.length; i++) {
    if (squares[i].style.transform == "scale(1.2)") {
      numScales++;
    }
  }

  return numScales;
}

function lowlight(squares) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.transform = "scale(1)";
  }
}
