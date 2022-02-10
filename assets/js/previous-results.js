// Init collapsible element on load
$(document).ready(function () {
  $(".collapsible").collapsible();
});

// adding the load function and the js to put stuff on the page

let savedResources = [];

// load from storage
function loadSavedResources () {
  // console.log(savedResources);
  if (localStorage.getItem("previousResources")) {
    savedResources = JSON.parse(localStorage.getItem("previousResources"));
    // console.log(savedResources);
    seperateResources(savedResources);
  }
  else {
    savedResources = [];
  }
}

function seperateResources (resources) {
  // will turn into double loop for extra sections
  let bookSection = resources[0].books;
  let videoSection = resources[0].videos;

  for ( i = 0; i < 3; i++ ){
    let booksToDisplay = bookSection[i];
    displayBook(booksToDisplay, i);
  }
  for ( i = 0; i < 4; i++ ){
    let videosToDisplay = videoSection[i];
    displayVideo(videosToDisplay, i);
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