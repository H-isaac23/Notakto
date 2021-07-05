if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  let button = document.getElementsByClassName("start-game")[0];

  button.addEventListener("click", () => {
    window.location.href = "game.html";
  });
}
