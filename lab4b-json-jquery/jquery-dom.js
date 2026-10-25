"use strict";

$(function () {
  $("#myElement").text("Modified Text");
  $("#myDIV").addClass("myStyle");

  $("#myButton").on("click", function () {
    $("#clickStatus").text("Button clicked!");
    alert("Button clicked!");
  });
});
