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
    let content = squares[i].getElementsByClassName("content")[0];
    squares[i].addEventListener("click", function () {
      numScales = numScaled(squares);
      if (
        (squares[i].style.transform == "scale(1)" ||
          squares[i].style.transform == "") &&
        numScales == 0
      ) {
        squares[i].style.transform = "scale(1.2)";
      } else if (squares[i].style.transform == "scale(1.2)") {
        squares[i].style.transform = "scale(1)";
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
