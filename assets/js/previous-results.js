// Init collapsible element on load
$(document).ready(function () {
  $(".collapsible").collapsible();
});

let resultPEl = document.querySelector("#pastResult")
let savedResults = JSON.parse(localStorage.getItem("quizSavedResults"))
let resultString = ""
console.log(savedResults)

resultString += savedResults[0]
for (let i = 1; i < savedResults.length; i++) {
  resultString += ", " + savedResults[i]
}
resultPEl.textContent = "Your previous result included: " + resultString


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

    let listEl = document.createElement("li");
    if (a === 0) {
      listEl.attr("class", "active");
    }
    else {
      listEl.attr("class", "inactive");
    };
    
    let headerEl = document.createElement("div");
    headerEl.attr("class", "collapsible-header");
    headerEl.attr("id", "result-name");
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

    let bookSection = resources[a].books;
    let videoSection = resources[a].videos;
    
    for (let i = 0; i < 3; i++ ){
      let booksToDisplay = bookSection[i];
      displayBook(booksToDisplay, i);
    }
    for (let i = 0; i < 4; i++ ){
      let videosToDisplay = videoSection[i];
      displayVideo(videosToDisplay, i);
    }
  }
}

// functions for printing content to screen
function displayBook (bookInfo, i) {
  // console.log(bookInfo, i);
  let bookEl = $("#r" + i + "b" + i);
  let bookLink = $("<a>");
  bookLink.attr("href", bookInfo.infoLink);
  bookLink.attr("target", "_blank");
  let bookImg = $("<img>");
  bookImg.attr("alt", bookInfo.title + " image preview");
  bookImg.attr("src", bookInfo.imageLinks.thumbnail);
  bookLink.append(bookImg);
  bookEl.append(bookLink);
};

function displayVideo (video, i) {
  $("#video-link-" + i).attr("href", "https://www.youtube.com/watch?v=" + video)
}

loadSavedResources();