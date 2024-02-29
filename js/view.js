var books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
  {
    id: 4,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
  { id: 5, title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
];

let book2 = document.getElementById("books");

displayBook = (book) => {
  const h2 = document.createElement("h2");
  h2.textContent = book.title;
  book2.appendChild(h2);

  const h3 = document.createElement("h3");
  h3.textContent = book.author;
  book2.appendChild(h3);

  const h4 = document.createElement("h4");
  h4.textContent = book.year;
  book2.appendChild(h4);
};

for (let i = 0; i < books.length; i++) {
  displayBook(books[i]);
}
