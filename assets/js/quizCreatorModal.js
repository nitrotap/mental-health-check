var quizCreationModal = $(".modal");

// Launch modal whem page finished loading
$(document).ready(function () {
  // modal must be initialized before opening
  $(".modal").modal();
  // launch modal
  $(".modal").modal("open");
});

// listener for modal buttons
quizCreationModal.on("click", ".quiz-begin", function () {
  //Call quiz start function here
  console.log("Begin Quiz");
  quizCreationModal.modal("close");
});

quizCreationModal.on("click", ".cancel", function () {
  //Call quiz start function here
  console.log("Cancelled, going to home");
  quizCreationModal.modal("close");
});
