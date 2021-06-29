if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  let popup = document.getElementById("setting-popup-container");
  console.log(popup.getTotalLength() / 2);
}
