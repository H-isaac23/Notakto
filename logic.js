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
    let content = document.getElementsByClassName("content")[0];
    squares[i].addEventListener("click", function () {
      console.log(squares[i].style.transform);
      if (
        squares[i].style.transform == "scale(1)" ||
        squares[i].style.transform == ""
      ) {
        squares[i].style.transform = "scale(1.2)";
      } else if (squares[i].style.transform == "scale(1.2)") {
        squares[i].style.transform = "scale(1)";
      }
    });
  }
}
