const aside = document.querySelector("aside");
const main = document.querySelector(".main");
const addBtn = document.querySelector(".nav-item3");
const removeBtn = document.querySelector(".remove-btn");
const library = [1];

/*
 * // Function for closing the Form Popup
 */
function remove_PopUp() {
    aside.classList.add("popup");
}
/*
 * To close the popUp windows for adding new card
 */
removeBtn.addEventListener("click", remove_PopUp);

/*
 * To open the popUp windows for adding new card
 */
addBtn.addEventListener("click", () => {
    aside.classList.remove("popup");
});

/*
 * Book Constructor
 */
function Book(name, author, pages, language, published) {
    this.id = Math.floor(Math.random() * 1000000); // Generate a unique ID for each book
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.language = language;
    this.published = published;
    // this.removeBTN = this.id;
}

/*
 * Book counter to DOM
 */
function bookCounter() {
    const count = document.querySelector(".book-counter");
    count.innerText = library.length;
}

// Remove the book from DOM & Library
function removeBook(book) {
    const index = library.indexOf(book);
    if (index === -1) {
        library.splice(index, 1);
        main.removeChild(book);
    }
}

/*
 * Adding the book to DOM
 */
function addBook_DOM(arr) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("id", arr.id);
    main.append(card);

    const content = document.createElement("div");
    content.classList.add("content");
    card.append(content);

    const book = document.createElement("div");
    book.innerText = arr.name;
    const author = document.createElement("div");
    author.innerText = arr.author;
    const page = document.createElement("div");
    page.innerText = arr.pages;
    const language = document.createElement("div");
    language.innerText = arr.language;
    const published = document.createElement("div");
    published.innerText = arr.published;
    const btn = document.createElement("a");

    btn.classList.add("btn");
    btn.innerText = "Remove";
    btn.addEventListener("click", () => {
        removeBook(card);
    });

    content.append(book, author, page, language, published, btn);
}

/*
 * // Add books to the Library Array
 */
function addBook_Library(arr) {
    /* Checking if the array is empty. */
    const isEmptyArray = arr.every((element) => element === "");
    if (isEmptyArray) {
        console.log("No details found, please add details about the book.");
    } else {
        const newBook = new Book(...arr);
        library.push(newBook);
        addBook_DOM(newBook);
        bookCounter();
    }
}

/*
 * // getting userInput data [Book data]
 */
const bookSubmit = document.querySelector(".submit-btn");
bookSubmit.addEventListener("click", (e) => {
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
    remove_PopUp();
});
