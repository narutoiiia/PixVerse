"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const themeLink = document.querySelector("link[rel=stylesheet]");
  const toggleCheckbox = document.getElementById("toggle");

  function swapStyleSheet(sheet) {
    console.log("css/" + sheet + ".css");
    themeLink.href = "css/" + sheet + ".css";
  }

  toggleCheckbox.addEventListener("change", function () {
    if (toggleCheckbox.checked) {
      swapStyleSheet("dark");
    } else {
      swapStyleSheet("default");
    }
  });
});
