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

const title = document.querySelector("#title");
const titleError = title.nextElementSibling;

const author = document.querySelector("#author");
const authorError = author.nextElementSibling;

const pages = document.querySelector("#pages");
const pagesError = pages.nextElementSibling;

const read = document.querySelector("#read");


title.addEventListener("input",()=>{
    const isValid = title.value.length > 0;
    if (isValid) {
        title.className = "";
        titleError.textContent = "";
        titleError.className = "error"
    } 
})

author.addEventListener("input",()=>{
    const isValid = author.value.length > 0;
    if (isValid) {
        author.className = "";
        authorError.textContent = "";
        authorError.className = "error"
    }
})

pages.addEventListener("input",()=>{
    const isValid = Number.isInteger(+pages.value)
    if (isValid) {
        pages.className = "";
        pagesError.textContent = "";
        pagesError.className = "error"
    } else {
        pages.className = "invalid";
        pagesError.textContent = "Pages must be an integer!";
        pagesError.className = "error active"
    }
})


// pressing submit button on form
const form = document.querySelector("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let titleForm = title.value;
    let authorForm = author.value;
    let pagesForm = pages.value;
    let readForm = read.checked;
    
    let formValid = true
    
    if (titleForm.length <=0){
        titleError.textContent = "Please enter a title";
        titleError.className = "error active"
        formValid = false
    } 

    if (authorForm.length <=0){
        authorError.textContent = "Please enter an author";
        authorError.className = "error active"
        formValid = false
    } 

    if (pagesForm.length <=0){
        pagesError.textContent = "Please enter the number of pages";
        pagesError.className = "error active"
        formValid = false
    } 

    if (!Number.isInteger(+pages.value)){
        pagesError.textContent = "Pages must be an integer!";
        pagesError.className = "error active"
        formValid = false
    }

    if (formValid) {
        myLibrary.forEach((book)=>{
            if (titleForm.toLowerCase() === book.title.toLowerCase()){
                titleError.textContent ="This book has already been added!";
                titleError.className = "error active"
                bookExist=true;
                return;

            }
        })

        newBook = new Book(titleForm,authorForm,pagesForm,readForm);
        addBookToLibrary(newBook);
        displayBooks();
        form.reset();
        popup.classList.remove("open-pop-up");

    } else{
        return
    }

    
})

// test2
// test

// test2
// test