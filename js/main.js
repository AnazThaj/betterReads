document.querySelector("#btnISBN").addEventListener("click", getISBN);

const title = document.querySelector("#title").value;
const author = document.querySelector("#author").value;

function getISBN() {
  const isbn = document.querySelector("#isbn").value;
  const urlISBN = `https://openlibrary.org/isbn/${isbn}.json`;

  console.log(isbn);
  fetch(urlISBN)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    });
}
