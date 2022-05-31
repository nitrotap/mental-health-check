// This script will pull the information from quiz results
// and use our api's to generate in the moment youtube vidoes
// and out of the moment book recommendations from google books

let videosToDisplay = [];
let booksToDisplay = [];
let fetchedBooks = [];
let savedResources = [];
let quizResults = [];
let quizSavedResults = [];
let testDate = new Date().toLocaleDateString();
let dateEl = document.querySelector("#date");
dateEl.textContent = testDate;

// grabbing querystring, will eventually be able to actually use multiple inputs
let queryString = document.location.search;
let quizResultArray = queryString.split("&");
for (i = 0; i < quizResultArray.length; i++) {
  let stringParse = quizResultArray[i].split("=");
  // console.log(stringParse);
  if (stringParse[1] == "true") {
    quizResults.push(stringParse[0]);
  }
  else if (stringParse[1] == "false") {
  }
}

// translate quizResults into searchables
function getApiQueries(results) {
  let quizResultText = "";

  if (results.includes("?depression")) {
    fetchVideos("dogs");
    fetchBooks("depression");
    quizResultText += "Depression";
    // console.log(quizResultText)
    quizSavedResults.push("Depression")
  }
  if (results.includes("anxiety")) {
    fetchVideos("meditation");
    fetchBooks("anxiety");
    quizResultText += " Anxiety";
    quizSavedResults.push("Anxiety")

  }
  if (results.includes("ptsd")) {
    fetchVideos("meditation");
    fetchBooks("ptsd");
    quizResultText += " Ptsd";
    quizSavedResults.push("Ptsd")

  }
  if (results.includes("sch")) {
    fetchVideos("help-dissociative-episode");
    fetchBooks("schizophrenia");
    quizResultText += " Schizophrenia"
    quizSavedResults.push("Schizophrenia and related disorders")
  }

  if (results.includes("add")) {
    fetchVideos("peer-based-recovery");
    fetchBooks("addiction");
    quizResultText += " Addiction"
    quizSavedResults.push("Addiction")
  }

  let resultContainerDivEl = document.querySelector("#resultContainer")
  let resultTextEl = document.createElement("h3")
  resultTextEl.className = "col s10 offset-s1"
  // console.log(quizResultText)

  resultTextEl.innerHTML = "Your quiz result includes the following categories: " + "<br/>" + quizResultText
  resultContainerDivEl.appendChild(resultTextEl);
};

// function for youtube api fetch
function fetchVideos(searchTerm) {
  // want to find a way to check for only embeddable videos, format=5 kind of works
  fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=" + searchTerm + "&safeSearch=moderate&format=5&key=AIzaSyDkgh_PUGT_MHKcw1jIVT-sqJKfJGKkLUU")
    .then(function (result) {
      return result.json();
    })
    .then(function (result) {
      // find random 4 videos out of the 10 generated
      for (i = 0; i < 4; i++) {
        let a = Math.floor(Math.random() * 10);
        let video = result.items[a].id.videoId;
        // to check for duplicates
        if (videosToDisplay.includes(video)) {
          i--
        }
        else {
          videosToDisplay.push(video);
          displayVideo(video, i);
        };
      };
    }).catch(function (error) {
      // logs error if a problem occurs
      console.log(error);
    });
};

// function for google books api fetch
function fetchBooks(searchTerm) {
  // currently grabs a lot of academic books, want to get rid of those eventually I think
  fetch("https://www.googleapis.com/books/v1/volumes?q=" + searchTerm)
    .then(function (result) {
      return result.json();
    })
    .then(function (result) {
      // retrieves random 3 books from response and calls displayBook to output to viewport
      for (i = 0; i < 3; i++) {
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
    }).catch(function (error) {
      // logs error if a problem occurs
      console.log(error);
    });
};

// functions for printing content to screen
function displayBook(bookInfo, i) {
  let bookEl = $("#suggestion-" + i);
  let bookLink = $("<a>");
  bookLink.attr("href", bookInfo.infoLink);
  bookLink.attr("target", "_blank");
  let bookImg = $("<img>");
  bookImg.attr("alt", bookInfo.title + " image preview");
  bookImg.attr("src", bookInfo.imageLinks.thumbnail);
  bookImg.attr("class", "offset-s1, z-depth-3"); // add class/style

  bookLink.append(bookImg);
  bookEl.append(bookLink);
};

function displayVideo(video, i) {
  $("#video-" + i).attr("src", "https://www.youtube.com/embed/" + video)
}

// function to save recents, keeping 3 total replacing the oldest
$("#save-btn").click(function () {
  // console.log("the results are saved!");
  let savedResults = {
    "books": booksToDisplay,
    "videos": videosToDisplay,
    "results": quizSavedResults,
    "date": testDate
  };

  savedResources.unshift(savedResults);

  if (savedResources.length <= 3) {
    localStorage.setItem("previousResources", JSON.stringify(savedResources))
  }
  else {
    savedResources.pop();
    localStorage.setItem("previousResources", JSON.stringify(savedResources))
  };
});

function loadSavedResources() {
  if (localStorage.getItem("previousResources")) {
    savedResources = JSON.parse(localStorage.getItem("previousResources"));
  }
  else {
    savedResources = [];
  }
}

getApiQueries(quizResults);
loadSavedResources();