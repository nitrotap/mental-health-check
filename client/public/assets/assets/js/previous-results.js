// Init collapsible element on load
$(document).ready(function () {
  $(".collapsible").collapsible();
});

let resultPEl = document.querySelector("#pastResult")
let savedResults = JSON.parse(localStorage.getItem("quizSavedResults"))
let resultString = ""
console.log(savedResults)

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
    // find unordered list element
    let ulEl = document.querySelector("#results");

    // pull from specific resources from localStorage
    let bookSection = resources[a].books;
    let videoSection = resources[a].videos;
    let dateSection = resources[a].date;
    let resultSection = resources[a].results;
    // let resultString = resultSection

    // create collapsible list element
    let listEl = document.createElement("li");
    if (a === 0) {
      listEl.setAttribute("class", "active");
    }
    else {
      listEl.setAttribute("class", "inactive");
    };
    
    // create header
    let headerEl = document.createElement("div");
    headerEl.setAttribute("class", "collapsible-header");
    headerEl.setAttribute("id", "result-name");
    let resultEl = document.createElement("h5")
    if (a === 0) {
      resultEl.textContent = "Result One - " + dateSection;
    }
    if (a === 1) {
      resultEl.textContent = "Result Two - " + dateSection;
    }
    if (a === 2) {
      resultEl.textContent = "Result Three - " + dateSection;
    }

    // append header to list element
    headerEl.appendChild(resultEl);
    listEl.appendChild(headerEl);

    // create body element for collapsible
    let bodyEl = document.createElement("div");
    bodyEl.setAttribute("class", "collapsible-body");

    // create video row for body element
    let videoRowEl = document.createElement("div");
    videoRowEl.setAttribute("class", "row");
    let videoDivEl = document.createElement("div");
    videoDivEl.setAttribute("class", "col s12 center-align");

    // loop to display videos to body element
    for (let i = 0; i < 4; i++ ){
      let videoButtonEl = document.createElement("a");
      videoButtonEl.setAttribute("class", "waves-effect waves-light indigo darken-4 btn");
      videoButtonEl.setAttribute("href", "https://www.youtube.com/watch?v=" + videoSection[i]);
      videoButtonEl.setAttribute("target", "_blank");
      videoButtonEl.textContent = "View Video " + [i + 1];
      videoDivEl.appendChild(videoButtonEl);
    }

    // append row element to body element
    videoRowEl.appendChild(videoDivEl);
    bodyEl.appendChild(videoRowEl);

    // create book row element
    let bookRowEl = document.createElement("div");
    bookRowEl.setAttribute("class", "row");

    // create book result container elements
    let bookResultEl = document.createElement("div");
    bookResultEl.setAttribute("class", "col s6 row");
    bookResultEl.setAttribute("id", "suggestions");
    let resultNumberEl = document.createElement("div");
    resultNumberEl.setAttribute("class", "col s12");

    // create book header element
    let resultNumberHeaderEl = document.createElement("h5");
    resultNumberHeaderEl.textContent = "Result " + [a + 1];

    // append book header element to book result container
    resultNumberEl.appendChild(resultNumberHeaderEl);
    bookResultEl.appendChild(resultNumberEl);
   
    // create result text content and containers
    let resultPastResultEl = document.createElement("div");
    resultPastResultEl.setAttribute("class", "col s12");
    let resultPastResultP = document.createElement("p");
    resultPastResultP.textContent = "Your previous result included: " + resultSection.join(", ");

    // append result text into container, and container into book row element
    resultPastResultEl.appendChild(resultPastResultP);
    bookResultEl.appendChild(resultPastResultEl);
    bookRowEl.appendChild(bookResultEl);

    // create book suggestion element
    let bookSuggestionEl = document.createElement("div");
    bookSuggestionEl.setAttribute("class", "col s6 row");
    bookSuggestionEl.setAttribute("id", "suggestions");

    // create book suggestion header element
    let bookSuggestionHeaderEl = document.createElement("div");
    bookSuggestionHeaderEl.setAttribute("class", "col s12 center-align");
    bookSuggestionHeaderEl.innerHTML = "<h5>Reading Suggestions</h5>";
    
    // appeend book suggestion header element into book suggestion element
    bookSuggestionEl.appendChild(bookSuggestionHeaderEl);

    // create and append book suggestions into book suggestion element 
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

    // append all containers into the unordered list element
    bookRowEl.appendChild(bookSuggestionEl);
    bodyEl.appendChild(bookRowEl);
    listEl.appendChild(bodyEl);
    ulEl.appendChild(listEl);
  }
}

loadSavedResources();