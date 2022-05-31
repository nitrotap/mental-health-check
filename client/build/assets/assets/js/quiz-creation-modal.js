// Quiz creator modal management
// Manages the launching

var quizCreationModal = $(".modal");
let userQuestions = [];

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
  let checkbox = document.querySelectorAll("input[type=checkbox]");
  console.log(checkbox);
  // loop through all checkboxes
  for (let i = 0; i < checkbox.length; i++) {
    if (checkbox[i].checked) {
      // if input element is selected on button click, then save object into questions array
      userQuestions.push(checkbox[i].id); // save checked boxes into array
    }
  }
  quizCreationModal.modal("close");

  // Generate and begin quiz AFTER closing modal!
  console.log(userQuestions);

  // take my array and generate questions from it
  symptoms = [];

  let addQuiz = function () {
    let addCheck = false;
    if (userQuestions.includes("addiction")) {
      addCheck = true;
    }

    console.log(addCheck);
    if (addCheck === true) {
      let count = 0;
      let score = 0;
      displayQuestion(questionBank[5][count]);
      count++;
      function questionDisplayHandler() {
        if (count < questionBank[5].length) {
          console.log("count" + count);
          let answerYesButtonEl = document.querySelector("#answer-yes");
          answerYesButtonEl.addEventListener("click", function () {
            count++;
            score++;
            let a = document.querySelector("#question-container");
            a.remove();
            if (count < questionBank[5].length) {
              displayQuestion(questionBank[5][count]);
              let questionhandler = questionDisplayHandler();
            } else {
              console.log("addDone");
              console.log("score" + score);
              if (score > 3) {
                symptoms.push("addiction");
              }
              // todo quiz results
            }
          });

          let answerNoButtonEl = document.querySelector("#answer-no");
          answerNoButtonEl.addEventListener("click", function () {
            count++;
            let a = document.querySelector("#question-container");
            a.remove();
            if (count < questionBank[5].length) {
              displayQuestion(questionBank[5][count]);
              let questionhandler = questionDisplayHandler();
            } else {
              console.log("addDone");
              console.log("score" + score);
              if (score > 4) {
                symptoms.push("addiction");
              }
              // todo quiz results
            }
          });
        }
      }
      questionDisplayHandler();
    } else {
      console.log("add not selected");
      // addQuiz(); todo quiz results
    }
  };

  let impQuiz = function () {
    let impCheck = false;
    if (userQuestions.includes("impairment")) {
      impCheck = true;
    }

    console.log(impCheck);
    if (impCheck === true) {
      let count = 0;
      let score = 0;
      displayQuestion(questionBank[4][count]);
      count++;
      function questionDisplayHandler() {
        if (count < questionBank[4].length) {
          console.log("count" + count);
          let answerYesButtonEl = document.querySelector("#answer-yes");
          answerYesButtonEl.addEventListener("click", function () {
            count++;
            score++;
            let a = document.querySelector("#question-container");
            a.remove();
            if (count < questionBank[4].length) {
              displayQuestion(questionBank[4][count]);
              let questionhandler = questionDisplayHandler();
            } else {
              console.log("impDone");
              console.log("score" + score);
              if (score > 4) {
                symptoms.push("imp");
              }
              addQuiz();
            }
          });

          let answerNoButtonEl = document.querySelector("#answer-no");
          answerNoButtonEl.addEventListener("click", function () {
            count++;
            let a = document.querySelector("#question-container");
            a.remove();
            if (count < questionBank[4].length) {
              displayQuestion(questionBank[4][count]);
              let questionhandler = questionDisplayHandler();
            } else {
              console.log("impDone");
              console.log("score" + score);
              if (score > 4) {
                symptoms.push("imp");
              }
              addQuiz();
            }
          });
        }
      }
      questionDisplayHandler();
    } else {
      console.log("imp not selected");
      addQuiz();
    }
  };

  let sQuiz = function () {
    let schCheck = false;
    if (userQuestions.includes("sch")) {
      schCheck = true;
    }

    console.log(schCheck);
    if (schCheck === true) {
      let count = 0;
      let score = 0;
      displayQuestion(questionBank[3][count]);
      count++;
      function questionDisplayHandler() {
        if (count < questionBank[3].length) {
          console.log("count" + count);
          let answerYesButtonEl = document.querySelector("#answer-yes");
          answerYesButtonEl.addEventListener("click", function () {
            count++;
            score++;
            let a = document.querySelector("#question-container");
            a.remove();
            if (count < questionBank[3].length) {
              displayQuestion(questionBank[3][count]);
              let questionhandler = questionDisplayHandler();
            } else {
              console.log("schDone");
              console.log("score" + score);
              if (score > 4) {
                symptoms.push("sch");
              }
              impQuiz();
            }
          });

          let answerNoButtonEl = document.querySelector("#answer-no");
          answerNoButtonEl.addEventListener("click", function () {
            count++;
            let a = document.querySelector("#question-container");
            a.remove();
            if (count < questionBank[3].length) {
              displayQuestion(questionBank[3][count]);
              let questionhandler = questionDisplayHandler();
            } else {
              console.log("schDone");
              console.log("score" + score);
              if (score > 4) {
                symptoms.push("sch");
              }
              impQuiz();
            }
          });
        }
      }
      questionDisplayHandler();
    } else {
      console.log("sch not selected");
      impQuiz();
    }
  };

  let pQuiz = function () {
    let ptsdCheck = false;
    if (userQuestions.includes("ptsd")) {
      ptsdCheck = true;
    }

    console.log(ptsdCheck);
    if (ptsdCheck === true) {
      let count = 0;
      let score = 0;
      displayQuestion(questionBank[2][count]);
      count++;

      function questionDisplayHandler() {
        if (count < questionBank[2].length) {
          console.log("count" + count);
          let answerYesButtonEl = document.querySelector("#answer-yes");
          answerYesButtonEl.addEventListener("click", function () {
            count++;
            score++;
            let a = document.querySelector("#question-container");
            a.remove();
            if (count < questionBank[2].length) {
              displayQuestion(questionBank[2][count]);
              let questionhandler = questionDisplayHandler();
            } else {
              console.log("ptsdDone");
              console.log("score" + score);
              if (score > 2) {
                symptoms.push("ptsd");
              }
              sQuiz();
            }
          });

          let answerNoButtonEl = document.querySelector("#answer-no");
          answerNoButtonEl.addEventListener("click", function () {
            count++;
            let a = document.querySelector("#question-container");
            a.remove();
            if (count < questionBank[2].length) {
              displayQuestion(questionBank[2][count]);
              let questionhandler = questionDisplayHandler();
            } else {
              console.log("ptsdDone");
              console.log("score" + score);
              if (score > 4) {
                symptoms.push("ptsd");
              }
              sQuiz();
            }
          });
        }
      }
      questionDisplayHandler();
    } else {
      console.log("ptsd not selected");
      sQuiz();
    }
  };

  let aQuiz = function () {
    let anxietyCheck = false;
    if (userQuestions.includes("anxiety")) {
      anxietyCheck = true;
    }

    console.log(anxietyCheck);
    if (anxietyCheck === true) {
      let count = 0;
      let score = 0;
      displayQuestion(questionBank[1][count]);
      count++;

      function questionDisplayHandler() {
        if (count < questionBank[1].length) {
          console.log("count" + count);
          let answerYesButtonEl = document.querySelector("#answer-yes");
          answerYesButtonEl.addEventListener("click", function () {
            count++;
            score++;
            let a = document.querySelector("#question-container");
            a.remove();
            if (count < questionBank[1].length) {
              displayQuestion(questionBank[1][count]);
              let questionhandler = questionDisplayHandler();
            } else {
              console.log("anxDone");
              console.log("score" + score);
              if (score > 4) {
                symptoms.push("anxiety");
              }
              pQuiz();
            }
          });

          let answerNoButtonEl = document.querySelector("#answer-no");
          answerNoButtonEl.addEventListener("click", function () {
            count++;
            let a = document.querySelector("#question-container");
            a.remove();
            if (count < questionBank[1].length) {
              displayQuestion(questionBank[1][count]);
              let questionhandler = questionDisplayHandler();
            } else {
              console.log("anxDone");
              console.log("score" + score);
              if (score > 4) {
                symptoms.push("anxiety");
              }
              pQuiz();
            }
          });
        }
      }

      questionDisplayHandler();
    } else {
      console.log("anxiety not selected");
      pQuiz();
    }
  };

  // check for depression
  let dQuiz = function () {
    if (depressionCheck === true) {
      let count = 0;
      let score = 0;
      displayQuestion(questionBank[0][count]);
      count++;

      function questionDisplayHandler() {
        if (count < questionBank[0].length) {
          console.log("count" + count);
          let answerYesButtonEl = document.querySelector("#answer-yes");
          answerYesButtonEl.addEventListener("click", function () {
            count++;
            score++;
            let a = document.querySelector("#question-container");
            a.remove();
            if (count < questionBank[0].length) {
              displayQuestion(questionBank[0][count]);
              let questionhandler = questionDisplayHandler();
            } else {
              console.log("score" + score);
              if (score > 4) {
                symptoms.push("depression");
              }
              aQuiz();
            }
          });

          let answerNoButtonEl = document.querySelector("#answer-no");
          answerNoButtonEl.addEventListener("click", function () {
            count++;
            let a = document.querySelector("#question-container");
            a.remove();
            if (count < questionBank[0].length) {
              displayQuestion(questionBank[0][count]);
              var questionhandler = questionDisplayHandler();
            } else {
              console.log("score" + score);
              if (score > 4) {
                symptoms.push("depression");
              }
              aQuiz();
            }
          });
        }
      }

      questionDisplayHandler();
    } else {
      console.log("depression not selected");
    }
  };

  let depressionCheck = false;
  if (userQuestions.includes("depression")) {
    depressionCheck = true;
  }
  if (depressionCheck) {
    dQuiz();
  } else {
    aQuiz();
  }
});

quizCreationModal.on("click", ".cancel", function () {
  console.log("Cancelled, going to home");
  quizCreationModal.modal("close");
  // Will redirect back to homepage after closing.
  // disabled for now.
  //window.location.replace("index.html");
});

var displayQuestion = function (questionObj) {
  let contentDivEl = document.querySelector("#content");
  let questionContainerEl = document.createElement("div");
  questionContainerEl.className = "row";
  questionContainerEl.id = "question-container";

  let questionRowEl = document.createElement("div");
  questionRowEl.className = "row";
  let questionDivEl = document.createElement("div");
  questionDivEl.className = "col s12 l8 offset-l2";
  let questionEl = document.createElement("h3");
  questionEl.setAttribute("id", "current-question");
  questionEl.textContent = questionObj.question;
  questionDivEl.appendChild(questionEl);
  questionRowEl.appendChild(questionDivEl);
  questionContainerEl.appendChild(questionRowEl);

  let answerRowEl = document.createElement("div");
  answerRowEl.id = "answer-section";
  let answerDivEl = document.createElement("div");
  answerDivEl.className = "col s12 center-align";
  let answerYesButtonEl = document.createElement("button");
  answerYesButtonEl.className =
    "waves-effect waves-light btn-large center-align";
  answerYesButtonEl.id = "answer-yes";
  answerYesButtonEl.textContent = "Yes";

  let answerNoButtonEl = document.createElement("button");
  answerNoButtonEl.id = "answer-no";
  answerNoButtonEl.className =
    "waves-effect waves-light btn-large center-align";
  answerNoButtonEl.textContent = "No";

  answerDivEl.appendChild(answerYesButtonEl);
  answerDivEl.appendChild(answerNoButtonEl);
  answerRowEl.appendChild(answerDivEl);
  questionContainerEl.appendChild(answerRowEl);
  contentDivEl.appendChild(questionContainerEl);
};
