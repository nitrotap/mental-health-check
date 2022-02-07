// Keeping things simple. Hand picking three books for each
// topic and storing their ISBNs in an array, and then
// fetching those three books based on user's quiz result

// depression books
var depressionBooks = ["0812219643", "0898620007", "1462537030"];

const fetchBooks = function (isbn, i) {
  fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn)
    .then(function (res) {
      return res.json();
    })
    .then(function (result) {
      // retrieves volume info and calls displayBook to output to viewport
      book = result.items[0].volumeInfo;
      console.log(book);
      displayBook(book, i);
    }),
    function (error) {
      // logs error if a problem occurs
      console.log(error);
    };
};

const displayBook = function (bookInfo, i) {
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

for (i = 0; i < depressionBooks.length; i++) {
  fetchBooks(depressionBooks[i], i + 1);
}
