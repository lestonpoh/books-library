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

function addBookToLibrary() {
  // do stuff here
}

const content = document.querySelector(".content")

function createCard(book){
    const card = document.createElement("div");
    const title = document.createElement("p");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const read = document.createElement("p");

    card.classList.add("card")

    content.appendChild(card);
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);

    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages;
    read.textContent = book.read;

}

myLibrary.forEach((book) => {
    createCard(book)
    


    
});