/*
 * js file for quiz result page
 * query parameter contains mental status
 */



// create div with some information
let resultInfo = document.createElement("p");
resultInfo.id = "resultInfo";
resultInfo.textContent = "SOME TEXT";
document.querySelector("#resultContainer").innerHTML = "<h3>" + "Take Your Mental Health Quiz!" + "</h3>";
document.querySelector("#resultContainer").innerHTML = "<p>" + "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sequi, illo omnis quod delectus reiciendis facilis deserunt vel ea atque facere corrupti, quos vero in dolor cum provident, sunt hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sequi, illo omnis quod delectus reiciendis facilis deserunt vel ea atque facere corrupti, quos vero in dolor cum provident, sunt hic." + "</p>";

// // reference links suggestions
// let text1 = "Read Suggestions 1";
// document.querySelector("#links").innerHTML = text1.link("https://www.google.com");
// let linkElement = document.createElement("h4");
// linkElement.textContent = "Read Suggestion";
// let linkList = document.querySelector("#links");
// linkList.appendChild(linkElement);

// other option for video
$(document).ready(function () {
  $(".slider").slider({ full_width: true, duration: 1000 });
  $(".slider").slider("pause");
});

// let submitButtonEl = document.createElement("button");
// submitButtonEl.id = "quizSubmitButton";
// submitButtonEl.textContent = "Submit";
// contentDivEl.appendChild(submitButtonEl);
