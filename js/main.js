// Book class: represents a book so every time we create a book it will instantiate a book object

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI class: handle UI related tasks

class UI {
  static displayBooks() {
    const StoredBooks = [
      {
        title: "The Canterbury Tales",
        author: "Geoffrey Chaucer",
        isbn: "9780140424386",
      },
      {
        title: "The Confederacy of Dunces",
        author: "John Kennedy Toole",
        isbn: "9780140058893",
      },
    ];

    const books = StoredBooks;

    books.forEach((book) => UI.addBookToList(book));
  }
  static addBookToList(book) {
    const list = document.querySelector("#book-list");
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;
    list.appendChild(row);
  }
  static clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }
  // My own implementation with the help from stackoverflow
  static deleteBook(target) {
    target.parentNode.parentNode.parentNode.removeChild(
      target.parentNode.parentNode,
    );
  }
}

// Store class: handles storage (local storage)
// Event: Display books
document.addEventListener("DOMContentLoaded", UI.displayBooks);

// Event: Add a book
document.querySelector("#book-form").addEventListener("submit", (e) => {
  // Prevent actual submit
  e.preventDefault();

  // Get form values
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  // Validate Input

  // Instantiate book
  const book = new Book(title, author, isbn);

  // Add book to UI
  UI.addBookToList(book);

  // Clear fields once the book is added to the list
  UI.clearFields();
});

// Event: Remove a book
document.querySelector("#book-list").addEventListener("click", (e) => {
  console.log(e.target.classList.contains("delete"));
  if (e.target.classList.contains("delete")) {
    UI.deleteBook(e.target);
  }
});
