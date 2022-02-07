// This script will pull the information from quiz results
// and use our api's to generate in the moment youtube vidoes
// and out of the moment book recommendations from google books


// funciton to bring in/parse quiz results will eventually test with full array ["depression", "sch", "ptsd", "addiction"];
let quizResults = ["depression"];

// function to translate into api searches
// figure out better search terms
function getApiQueries (results) {
  // console.log(results);
  fetchBooks (results);
  getVideos (results);
};

// function for youtube api fetch
function getVideos (searchTerm) {
  fetch("https://www.googleapis.com/youtube/v3/search?q=dogs&key=AIzaSyApk2KxjyUh_kVnvLVoPNRgeDIW5eXZmXM")
    .then(function (res) {
      // console.log(searchTerm);
      console.log(res);
    })
};

// function for google books api fetch
function fetchBooks (searchTerm) {
  // currently grabs a lot of academic books, want to get rid of those eventually I think
  fetch("https://www.googleapis.com/books/v1/volumes?q=" + searchTerm)
    .then(function (res) {
      return res.json();
    })
    .then(function (result) {
      // array to stop duplicates
      let booksToDisplay = [];
      // retrieves random volume from response and calls displayBook to output to viewport
      // currently allows duplicates to be printed
      for ( i = 0; i < 3; i++) { 
        let a = Math.floor(Math.random() * 10);
        book = result.items[a].volumeInfo;
        // console.log(result);
        // console.log(book);
        // console.log(a);
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

// function for printing content to screen
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

// function to update recent searches, (maybe keep 5 recent searches?


getApiQueries(quizResults);