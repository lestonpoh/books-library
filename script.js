const myLibrary = [
    {
        "title":"Harry Potter",
        "author":"JK Trolling",
        "pages":10000,
        "read":true
    },
    {
        "title":"Diary of a Wimpy Kid",
        "author":"Noidea Tan",
        "pages":987,
        "read":false
    }

];

function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(newBook) {
  myLibrary.push(newBook)
}

const booksContent = document.querySelector(".books-content")

function createCard(book){
    const card = document.createElement("div");
    const title = document.createElement("p");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const read = document.createElement("p");

    card.classList.add("card")

    booksContent.appendChild(card);
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);

    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages;
    read.textContent = book.read === true ? "Read": "Not Read";

}


myLibrary.forEach((book) => {
    createCard(book)
});

const form = document.querySelector("form");
const submit = document.querySelector("#submit")
submit.addEventListener("click",(e)=>{
    e.preventDefault();
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;
    
    let bookExist=false;
    myLibrary.forEach((book)=>{
        if (title.toLowerCase() === book.title.toLowerCase()){
            alert("This book has already been added!");
            bookExist=true;
            return;
        }
    })
    if (bookExist) {return};
    newBook = new Book(title,author,pages,read);
    addBookToLibrary(newBook);
    booksContent.innerHTML="";
    myLibrary.forEach((book) => {
        createCard(book);
    });
})

const addBookButton = document.querySelector("#add-book");
const popup = document.querySelector(".pop-up");
addBookButton.addEventListener("click",(e)=>{
    popup.classList.add("open-pop-up")
})

const closePopupButton = document.querySelector("#close");
closePopupButton.addEventListener("click",(e)=>{
    popup.classList.remove("open-pop-up")
})