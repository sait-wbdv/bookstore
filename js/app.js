document.addEventListener("DOMContentLoaded", function () {
  var searchInput = document.getElementById("searchInput");
  let searchButton = document.getElementById("searchButton");
  const searchResults = document.getElementById("searchResults");

  searchButton.addEventListener("click", function () {
    const searchTerm = searchInput.value.trim();
    const results = searchBooksByTitle(searchTerm);
    displaySearchResults(results);
  });

  function displaySearchResults(results) {
    var output = "";
    results.forEach((book) => {
      output += `
              <div class="book-item">
                  <h3>${book.title}</h3>
                  <p><strong>Author:</strong> ${book.author}</p>
                  <p><strong>Year:</strong> ${book.year}</p>
              </div>
          `;
    });
    searchResults.innerHTML = output;
  }
});

//creating a view all pg with a button
function myFunction() {
  location.replace("/view.html");
  console.log("is this working");
}
