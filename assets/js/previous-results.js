// Init collapsible element on load
$(document).ready(function () {
  $(".collapsible").collapsible();
});

let resultPEl = document.querySelector("#pastResult")
let savedResults = JSON.parse(localStorage.getItem("quizSavedResults"))
let resultString = ""
console.log(savedResults)

// resultString += savedResults[0]
// for (let i = 1; i < savedResults.length; i++) {
//   resultString += ", " + savedResults[i]
// }
// resultPEl.textContent = "Your previous result included: " + resultString


// adding the load function and the js to put stuff on the page

let savedResources = [];

// load from storage
function loadSavedResources () {
  // console.log(savedResources);
  if (localStorage.getItem("previousResources")) {
    savedResources = JSON.parse(localStorage.getItem("previousResources"));
    // console.log(savedResources);
    displayResults (savedResources);
  }
  else {
    // TODO display text content for no previous results
    savedResources = [];
  }
}

function displayResults (resources) {
  // wrap this all in an if check for null
  for (let a = 0; a < resources.length; a++) {
    let ulEl = document.querySelector("#results");

    let bookSection = resources[a].books;
    let videoSection = resources[a].videos;

    let listEl = document.createElement("li");
    if (a === 0) {
      listEl.setAttribute("class", "active");
    }
    else {
      listEl.setAttribute("class", "inactive");
    };
    
    let headerEl = document.createElement("div");
    headerEl.setAttribute("class", "collapsible-header");
    headerEl.setAttribute("id", "result-name");
    let resultEl = document.createElement("h5")
    if (a === 0) {
      resultEl.textContent = "Result One -";
    }
    if (a === 1) {
      resultEl.textContent = "Result Two -";
    }
    if (a === 2) {
      resultEl.textContent = "Result Three -";
    }

    // TODO add date
    headerEl.appendChild(resultEl);
    listEl.appendChild(headerEl);

    let bodyEl = document.createElement("div");
    bodyEl.setAttribute("class", "collapsible-body");

    let videoRowEl = document.createElement("div");
    videoRowEl.setAttribute("class", "row");
    let videoDivEl = document.createElement("div");
    videoDivEl.setAttribute("class", "col s12 center-align");

    for (let i = 0; i < 4; i++ ){
      let videoButtonEl = document.createElement("a");
      videoButtonEl.setAttribute("class", "waves-effect waves-light indigo darken-4 btn");
      videoButtonEl.setAttribute("href", "https://www.youtube.com/watch?v=" + videoSection[i]);
      videoButtonEl.setAttribute("target", "_blank");
      videoButtonEl.textContent = "View Video " + [i + 1];
      videoDivEl.appendChild(videoButtonEl);
    }
    videoRowEl.appendChild(videoDivEl);
    bodyEl.appendChild(videoRowEl);

    let bookRowEl = document.createElement("div");
    bookRowEl.setAttribute("class", "row");

    let bookResultEl = document.createElement("div");
    bookResultEl.setAttribute("class", "col s6 row");
    bookResultEl.setAttribute("id", "suggestions");
    let resultNumberEl = document.createElement("div");
    resultNumberEl.setAttribute("class", "col s12");
    let resultNumberHeaderEl = document.createElement("h5");
    resultNumberHeaderEl.textContent = "Result " + [a + 1];
    resultNumberEl.appendChild(resultNumberHeaderEl);
    bookResultEl.appendChild(resultNumberEl);
    // TODO adding for results from quiz selection
    let resultPastResultEl = document.createElement("div");
    resultPastResultEl.setAttribute("class", "col s12");
    let resultPastResultP = document.createElement("p");
    // TODO mainly here for quiz selections
    resultPastResultP.textContent = "test content";
    resultPastResultEl.appendChild(resultPastResultP);
    bookResultEl.appendChild(resultPastResultEl);
    bookRowEl.appendChild(bookResultEl);
    let bookSuggestionEl = document.createElement("div");
    bookSuggestionEl.setAttribute("class", "col s6 row");
    bookSuggestionEl.setAttribute("id", "suggestions");
    let bookSuggestionHeaderEl = document.createElement("div");
    bookSuggestionHeaderEl.setAttribute("class", "col s12 center-align");
    bookSuggestionHeaderEl.innerHTML = "<h5>Reading Suggestions</h5>";
    bookSuggestionEl.appendChild(bookSuggestionHeaderEl);

    for (let i = 0; i < 3; i++ ){
      let bookDivEl = document.createElement("div");
      bookDivEl.setAttribute("class", "col s12 m4");
      let bookLinkEl = document.createElement("a");
      bookLinkEl.setAttribute("href", bookSection[i].infoLink);
      bookLinkEl.setAttribute("target", "_blank");
      let bookImgEl = document.createElement("img");
      bookImgEl.setAttribute("alt", bookSection[i].title + " image preview");
      bookImgEl.setAttribute("src", bookSection[i].imageLinks.thumbnail);
      bookLinkEl.appendChild(bookImgEl);
      bookDivEl.appendChild(bookLinkEl);
      bookSuggestionEl.appendChild(bookDivEl);
    }

    bookRowEl.appendChild(bookSuggestionEl);
    bodyEl.appendChild(bookRowEl);
    listEl.appendChild(bodyEl);
    ulEl.appendChild(listEl);
  }
}

loadSavedResources();