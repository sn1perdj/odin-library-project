const aside = document.querySelector("aside");
const main = document.querySelector(".main");

// To open the popUp windows for adding new card
function remove_BTN() {
  aside.classList.add("popup");
}

const addBtn = document.querySelector(".nav-item3");
addBtn.addEventListener("click", () => {
  aside.classList.remove("popup");
});

// To close the popUp windows for adding new card
const removeBtn = document.querySelector(".remove-btn");
removeBtn.addEventListener("click", remove_BTN);

const library = [1];

// Book Constructor
function Book(name, author, pages, language, published) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.language = language;
  this.published = published;
}

// Book counter to DOM
function bookCounter() {
  const count = document.querySelector(".book-counter");
  count.innerText = library.length;
}

// Adding the book to DOM
function addBook_DOM(arr) {
  const div = document.createElement("div");
  const book = document.createElement("div");
  const author = document.createElement("div");
  const page = document.createElement("div");
  const language = document.createElement("div");
  const published = document.createElement("div");
  book.innerText = arr[0];
  author.innerText = arr[1];
  page.innerText = arr[2];
  language.innerText = arr[3];
  published.innerText = arr[4];
  div.classList.add("cards");
  main.append(div);
  div.append(book, author, page, language, published);
  console.log(library);
}

// Add books to the Library Array
function addBook_Library(arr) {
  /* Checking if the array is empty. */
  const isEmptyArray = arr.every((element) => element === "");
  if (isEmptyArray) {
    console.log("myArray is empty");
  } else {
    const newBook = new Book(...arr);
    library.push(newBook);
    bookCounter();
    addBook_DOM(arr);
  }
}

// getting userInput data [Book data]
const bookSubmit = document.querySelector(".submit-btn");
bookSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  const bookName = document.querySelector("#book").value;
  const authorName = document.querySelector("#author").value;
  const totalPages = document.querySelector("#page").value;
  const language_book = document.querySelector("#lang").value;
  let published_date = document.querySelector("#publish-date").value;
  addBook_Library([
    bookName,
    authorName,
    totalPages,
    language_book,
    published_date,
  ]);
  remove_BTN();
});
