document.addEventListener("DOMContentLoaded", function() {
  let searchInput = document.getElementById('searchInput');
  let searchButton = document.getElementById('searchButton');
  const searchResults = document.getElementById('searchResults');

  searchButton.addEventListener('click', function() {
      const searchTerm = searchInput.value.trim();
      const results = searchBooksByTitle(searchTerm);
      displaySearchResults(results);
  });

  function displaySearchResults(results) {
      let output = '';
      results.forEach(book => {
          output += `
              <div class="book-item">
                  <h3>${book.title}</h3>
                  <p><strong>Author:</strong> ${book.author}</p>
                  <p><strong>Year:</strong> ${book.year}</p>

                  <p id="showMoreText"><strong>Description:</strong> ${book.description}</p>
                  <div class="button">
                    <button type="button" id="show-toggle-btn" onclick="moreBtn()">Show More</button>
                  </div>
          </div>
      `
      });
      searchResults.innerHTML = output;

    }
});


function moreBtn() {
    const text = document.getElementById("showMoreText");
    const buttonTxt = document.getElementById("show-toggle-button");

    if (text.style.display == "none") {
        text.style.display = "inline";
        buttonTxt.textContent = "Show More";
            } else {
        text.style.display = "none";
        buttonTxt.textContent = "Show Less";
    }
}