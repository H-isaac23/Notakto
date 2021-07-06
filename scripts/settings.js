if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  let settings = document.getElementsByClassName("settings-icon")[0];
  settings.addEventListener("click", show);
}

function show() {
  let settingsWidth = getComputedStyle(document.body).getPropertyValue(
    "--settings-width"
  );
  if (settingsWidth == "100%") {
    document.documentElement.style.setProperty("--settings-width", "0%");
  } else {
    document.documentElement.style.setProperty("--settings-width", "100%");
  }
}
