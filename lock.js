(function () {
  var PASSWORD = "changeme";
  if (sessionStorage.getItem("dash_unlocked") === "1") return;
  var ok = false;
  while (!ok) {
    var entry = window.prompt("Enter dashboard password:");
    if (entry === null) { document.documentElement.innerHTML = ""; return; }
    if (entry === PASSWORD) { sessionStorage.setItem("dash_unlocked", "1"); ok = true; }
  }
})();
