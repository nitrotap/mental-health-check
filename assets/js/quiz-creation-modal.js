// Quiz creator modal management
// Manages the launching

var quizCreationModal = $(".modal");

// launch modal
var interval = "";
// Launch modal whem page finished loading
$(document).ready(function () {
  // modal must be initialized before opening
  $(".modal").modal();
  interval = setInterval(openModal, "300");
});

const openModal = function () {
  clearInterval(interval);
  $(".modal").modal("open");
};

// listener for modal buttons
quizCreationModal.on("click", ".quiz-begin", function () {
  //Call quiz start function here
  console.log("Begin Quiz");
  // Gather info from checkboxes required for quiz creation
  // here

  quizCreationModal.modal("close");

  // Generate and begin quiz AFTER closing modal!
});

quizCreationModal.on("click", ".cancel", function () {
  //Call quiz start function here
  console.log("Cancelled, going to home");
  quizCreationModal.modal("close");

  // Will redirect back to homepage after closing.
  // disabled for now.

  //window.location.replace("index.html");
});
