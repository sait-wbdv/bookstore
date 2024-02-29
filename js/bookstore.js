// Sample database of books
 var books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
  { id: 4, title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  { id: 5, title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
];

// Function to search for books by title
function searchBooksByTitle(title) {
  const result = books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
  return result.length > 0 ? result : [{ title: "No books found with that title." }];
}

// Adding a review
const reviewForm = document.getElementById('reviewForm');
const reviewInput = document.getElementById('reviewInput');
const reviewsContainer = document.getElementById('reviewsContainer');

function submitReview() {
  const reviewText = reviewInput.value.trim();
  if (reviewText !== '') {
      const reviewDiv = document.createElement('div');
      reviewDiv.classList.add('review');
      reviewDiv.textContent = reviewText;
      reviewsContainer.appendChild(reviewDiv);
      // Clear the input field after submitting
      reviewInput.value = '';
  }
}