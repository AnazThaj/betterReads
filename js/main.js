// Book class: represents a book so every time we create a book it will instantiate a book object
class Book {
  constructor(title, isbn) {
    this.title = title;
    this.isbn = isbn;
  }
}

// UI class: handle UI related tasks

class UI {
  static displayBooks() {
    // making it static doesn't have to instantiate the class before calling the method.

    const books = Store.getBooks();

    books.forEach((book) => UI.addBookToList(book));
  }
  static addBookToList(book) {
    const list = document.querySelector("#book-list");
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;
    list.appendChild(row);
  }
  static clearFields() {
    document.querySelector("#isbn").value = "";
  }
  // My own implementation with the help from stackoverflow
  static deleteBook(target) {
    target.parentNode.parentNode.parentNode.removeChild(
      target.parentNode.parentNode
    );
  }
  static showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));

    const container = document.querySelector(".container");
    container.insertBefore(div, document.querySelector("#book-form"));

    // vanish the message in 2.5 secs
    setTimeout(() => document.querySelector(".alert").remove(), 2500);
  }
}

// Storage class: handles storage (local storage)
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }
  static addBook(book) {
    const books = Store.getBooks();

    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }
  static removeBook(isbn) {
    const books = Store.getBooks();

    books.forEach((book, index) => {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem("books", JSON.stringify(books));
  }
}

// --------- EVENTS -------- //
// Event-1: Display books
document.addEventListener("DOMContentLoaded", UI.displayBooks);

// Event-2: Add a book
document.querySelector("#btnSearch").addEventListener("click", (e) => {
  // Prevent actual submit
  e.preventDefault();

  // Get form values
  const isbn = document.querySelector("#isbn").value;
  const url = `https://openlibrary.org/isbn/${isbn}.json`;
  let title = "";

  // Validate Input
  if (isbn === "") {
    console.log("Empty fields");
    UI.showAlert("empty fields", "danger");
  } else {
    // Instantiate book
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        title = data.title;
        const book = new Book(title, isbn);
        // Add book to UI
        UI.addBookToList(book);
        // Add book to the localStorage
        Store.addBook(book);
        // Show success message
        UI.showAlert("book added", "success");
        // Clear fields once the book is added to the list
        UI.clearFields();
      });
  }
});

// Event-3: Remove a book
document.querySelector("#book-list").addEventListener("click", (e) => {
  let isbn = e.target.parentElement.previousElementSibling.textContent;
  if (e.target.classList.contains("delete")) {
    // Remove book from the UI
    UI.deleteBook(e.target);
    // Remove book from the Storage
    Store.removeBook(isbn);
    // Show success message
    UI.showAlert("book removed", "success");
  }
});
