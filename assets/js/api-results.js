// This script will pull the information from quiz results
// and use our api's to generate in the moment youtube vidoes
// and out of the moment book recommendations from google books


// funciton to bring in/parse quiz results will eventually test with full array ["depression", "sch", "ptsd", "addiction"];
let quizResults = ["depression"];
let videosToDisplay = [];
let booksToDisplay = [];
let savedResources = [];

// function to translate into api searches
// figure out better search terms
async function getApiQueries (results) {
  // console.log(results);
  fetchBooks (results);
  if (results == "depression") {
    // console.log("The result was positive for depression")
    // fetchVideos ("dogs");
  }
  else if (results == "anxiety") {
    // console.log("The result was positive for anxiety")
  }
  else if (results == "ptsd") {
    // console.log("The result was positive for ptsd")
  }
  else if (results == "sch") {
    // console.log("The result was positive for sch")
  }
  else if (results == "addiction") {
    // console.log("The result was positive for addiction")
  }
  else {
    // console.log("Negative for symptoms on all checked counts")
  }
};

// function for youtube api fetch
async function fetchVideos (searchTerm) {
  // want to find a way to check for only embeddable videos
  fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=" + searchTerm + "&safeSearch=moderate&format=5&key=AIzaSyApk2KxjyUh_kVnvLVoPNRgeDIW5eXZmXM")
    .then(function (result) {
      return result.json();
    })
    .then(function (result) {
      // find random 4 videos out of the 10 generated
      for ( i = 0; i < 4; i++) { 
        let a = Math.floor(Math.random() * 10);
        let video = result.items[a].id.videoId;
        // console.log(video);
        // to check for duplicates
        if (videosToDisplay.includes(video)) {
          i--
        }
        else {
          videosToDisplay.push(video);
          displayVideo(video, i);
          // console.log(video)
        };
      };
    }).catch(function(error) {
      // logs error if a problem occurs
      console.log(error);
    });
};

// function for google books api fetch
async function fetchBooks (searchTerm) {
  // currently grabs a lot of academic books, want to get rid of those eventually I think
  fetch("https://www.googleapis.com/books/v1/volumes?q=" + searchTerm)
    .then(function (result) {
      return result.json();
    })
    .then(function (result) {
      // retrieves random 3 books from response and calls displayBook to output to viewport
      for ( i = 0; i < 3; i++) { 
        let a = Math.floor(Math.random() * 10);
        let book = result.items[a].volumeInfo;

        // to check for duplicates
        if (booksToDisplay.includes(book)) {
          i--
        }
        else {
          booksToDisplay.push(book);
          displayBook(book, i);
        };
      };
    }).catch(function(error) {
      // logs error if a problem occurs
      console.log(error);
    });
};

// functions for printing content to screen
function displayBook (bookInfo, i) {
  let bookEl = $("#suggestion-" + i);
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
  $("#video-" + i).attr("src", "https://www.youtube.com/embed/" + video)
}

// function to save recents, (maybe keep 5 recent results?)
function save () {

  let savedResults = {
    "books" : booksToDisplay,
    "videos" : videosToDisplay
  };

  savedResources.unshift(savedResults);

  if (savedResources.length <= 3) {
    localStorage.setItem("previousResources", JSON.stringify(savedResources))
    // console.log("saved is less than or eqaual to 3");
  }
  else {
    savedResources.pop();
    localStorage.setItem("previousResources", JSON.stringify(savedResources))
    // console.log(savedResources);
  };
}

function loadSavedResources () {
  // console.log(savedResources);
  if (localStorage.getItem("previousResources")) {
    savedResources = JSON.parse(localStorage.getItem("previousResources"));
  }
  else {
    savedResources = [];
  }
}

getApiQueries(quizResults);
loadSavedResources();