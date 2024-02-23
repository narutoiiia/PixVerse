"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var coll = document.querySelector(".collapsible");
  var content = document.querySelector(".work");

  coll.addEventListener("click", function () {
    this.classList.toggle("active");
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
  const themeLink = document.querySelector("link[rel=stylesheet]");
  const toggleCheckbox = document.getElementById("toggle");

  function swapStyleSheet(sheet) {
    console.log("css/" + sheet + ".css");
    themeLink.href = "css/" + sheet + ".css";
  }

  toggleCheckbox.addEventListener("change", function () {
    if (toggleCheckbox.checked) {
      swapStyleSheet("light");
    } else {
      swapStyleSheet("default");
    }
  });
});
