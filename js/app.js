document.addEventListener("DOMContentLoaded", function() {
  var searchInput = document.getElementById('searchInput');
  let searchButton = document.getElementById('searchButton');
  const searchResults = document.getElementById('searchResults');

  searchButton.addEventListener('click', function() {
      const searchTerm = searchInput.value.trim();
      const results = searchBooksByTitle(searchTerm);
      displaySearchResults(results);
  });

  function displaySearchResults(results) {
      var output = '';
      results.forEach(book => {
          output += `
              <div class="book-item">
                  <h3>${book.title}</h3>
                  <p><strong>Author:</strong> ${book.author}</p>
                  <p><strong>Year:</strong> ${book.year}</p>
              </div>
              <div class="review-form">
              <h3>Add a Review</h3>
              <form id="reviewForm">
                  <textarea id="reviewInput" rows="4" cols="50"></textarea>
                  <button type="button" onclick="submitReview()">Submit</button>
              </form>
              </div>
      
            <div class="reviews">
                <h3>Reviews</h3>
                <div id="reviewsContainer"></div>
            </div>
          `;
      });
      searchResults.innerHTML = output;
  }
});
