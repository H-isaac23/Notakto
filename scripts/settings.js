import { lowlight, clearBoards } from "./game logic.js";

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  let settings = document.getElementsByClassName("settings-icon")[0];
  settings.addEventListener("click", show);

  let reset = document.getElementsByClassName("reset-option")[0];
  let restart = document.getElementsByClassName("restart-option")[0];
  let back = document.getElementsByClassName("back-option")[0];

  reset.addEventListener("click", resetScores);
  restart.addEventListener("click", restartGame);
  back.addEventListener("click", home);
}

function show() {
  let settingsWidth = getComputedStyle(document.body).getPropertyValue(
    "--settings-width"
  );

  if (settingsWidth == "100%" || settingsWidth == " 100%") {
    document.documentElement.style.setProperty("--settings-width", "0%");
  } else {
    document.documentElement.style.setProperty("--settings-width", "100%");
  }
}

function resetScores() {
  let scores = document.querySelectorAll("span.score");
  for (let i = 0; i < scores.length; i++) {
    scores[i].innerText = "0";
  }
}

function restartGame() {
  clearBoards();
  lowlight();
}

function home() {
  window.location.href = "../index.html";
}
