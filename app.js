class Book {
    constructor(name, author, pages, language, published) {
        this.id = this.id = Math.floor(Math.random() * 1000000);
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.language = language;
        this.published = published;
    }
}

class Library {
    constructor() {
        this.books = [1];
        this.aside = document.querySelector("aside");
        this.main = document.querySelector(".main");
        this.addBtn = document.querySelector(".nav-item3");
        this.removeBtn = document.querySelector(".remove-btn");
        this.count = document.querySelector(".book-counter");
        this.bookSubmit = document.querySelector(".submit-btn");
    }

    init() {
        this.remove_PopUp = this.remove_PopUp.bind(this);
        this.addBook_Library = this.addBook_Library.bind(this);
        this.removeBook = this.removeBook.bind(this);
        this.bookCounter = this.bookCounter.bind(this);

        this.removeBtn.addEventListener("click", this.remove_PopUp);

        this.addBtn.addEventListener("click", () => {
            this.aside.classList.remove("popup");
        });
        this.bookSubmit.addEventListener("click", (e) => {
            e.preventDefault();
            const bookName = document.querySelector("#book").value;
            const authorName = document.querySelector("#author").value;
            const totalPages = document.querySelector("#page").value;
            const language_book = document.querySelector("#lang").value;
            const published_date =
                document.querySelector("#publish-date").value;
            const changedMonth = this.changeDateFormate(published_date);
            this.addBook_Library([
                bookName,
                authorName,
                totalPages,
                language_book,
                changedMonth,
            ]);
            this.remove_PopUp();
        });
    }

    remove_PopUp() {
        this.aside.classList.add("popup");
    }

    changeDateFormate(value) {
        if (!value) {
            return "";
        }

        const date = value.split("-");
        let year = date[0];
        let month = parseInt(date[1]);
        let monthName;
        switch (month) {
            case 1:
                monthName = "Jan";
                break;
            case 2:
                monthName = "Feb";
                break;
            case 3:
                monthName = "Mar";
                break;
            case 4:
                monthName = "Apr";
                break;
            case 5:
                monthName = "May";
                break;
            case 6:
                monthName = "Jun";
                break;
            case 7:
                monthName = "Jul";
                break;
            case 8:
                monthName = "Aug";
                break;
            case 9:
                monthName = "Sep";
                break;
            case 10:
                monthName = "Oct";
                break;
            case 11:
                monthName = "Nov";
                break;
            case 12:
                monthName = "Dec";
                break;
            default:
                monthName = "Invalid month number";
                break;
        }
        let day = date[2];
        return monthName + " " + day + " " + year;
    }

    addBook_DOM(arr) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("id", arr.id);
        this.main.append(card);

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
            this.removeBook(arr.id);
        });

        content.append(book, author, page, language, published, btn);
    }

    addBook_Library(arr) {
        const newBook = new Book(...arr);
        this.books.push(newBook);
        this.addBook_DOM(newBook);
        this.bookCounter();
    }

    removeBook(id) {
        const removeIndex = this.books.findIndex((book) => book.id === id);
        this.books.splice(removeIndex, 1);
        document.getElementById(id).remove();
        this.count.innerText = this.books.length;
        this.bookCounter();
    }

    bookCounter() {
        this.count.innerText = this.books.length;
    }
}

const myLibrary = new Library();
myLibrary.init();
