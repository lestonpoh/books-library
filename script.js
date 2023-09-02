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

function createCard(book,index){
    const card = document.createElement("div");
    const title = document.createElement("p");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const read = document.createElement("button");
    const remove = document.createElement("button")

    card.classList.add("card")
    card.setAttribute("id",index)

    booksContent.appendChild(card);
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    card.appendChild(remove)

    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages;
    
    read.textContent = book.read ? "Read" : "Not Read";
    read.classList.add("read-button")
    book.read ? read.classList.add("read") : read.classList.add("not-read")
    
    remove.classList.add("remove-button");
    remove.textContent = "Remove"
}

function removeBook(index){
    myLibrary.splice(index,1)
}

function displayBooks(){
    booksContent.innerHTML="";
    myLibrary.forEach((book,index) => {
        createCard(book,index)
    });
    
    const removeButtons = document.querySelectorAll(".remove-button");
    removeButtons.forEach((removeButton)=>{
        removeButton.addEventListener("click",(e)=>{
            removeBook(e.target.parentElement.id)
            displayBooks()
        })
    })

    const readButtons = document.querySelectorAll(".read-button");
    readButtons.forEach((readButton)=>{
        readButton.addEventListener("click",(e)=>{
            myLibrary[e.target.parentElement.id].read = !myLibrary[e.target.parentElement.id].read
            displayBooks()
        })
    })
}

// first display
displayBooks()

// button to open popup
const addBookButton = document.querySelector("#add-book");
const popup = document.querySelector(".pop-up");
addBookButton.addEventListener("click",(e)=>{
    popup.classList.add("open-pop-up")
})

// button to close popup
const closePopupButton = document.querySelector("#close");
closePopupButton.addEventListener("click",(e)=>{
    popup.classList.remove("open-pop-up");
    form.reset();
})

// pressing submit button on form
const form = document.querySelector("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let titleForm = document.querySelector("#title").value;
    let authorForm = document.querySelector("#author").value;
    let pagesForm = document.querySelector("#pages").value;
    let readForm = document.querySelector("#read").checked;
    
    let bookExist=false;
    myLibrary.forEach((book)=>{
        if (titleForm.toLowerCase() === book.title.toLowerCase()){
            alert("This book has already been added!");
            bookExist=true;
            return;
        }
    })
    if (bookExist) {return};


    newBook = new Book(titleForm,authorForm,pagesForm,readForm);
    addBookToLibrary(newBook);
    displayBooks();
    form.reset();
    popup.classList.remove("open-pop-up");
})


