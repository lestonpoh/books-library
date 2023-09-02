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
    const read = document.createElement("p");
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
    read.textContent = book.read === true ? "Read": "Not Read";
    remove.classList.add("remove");
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
    
    const removeButtons = document.querySelectorAll(".remove");
    removeButtons.forEach((removeButton)=>{
        removeButton.addEventListener("click",(e)=>{
            console.log(e.target.parentElement.id)
            removeBook(e.target.parentElement.id)
            console.log(myLibrary)
            displayBooks()
        })
    })
}

function resetPopup(title,author,pages,read){
    title="";
    console.log(title.value)
    author="";
    pages="";
    read = false
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

const form = document.querySelector("form");
form.addEventListener("submit",(e)=>{
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
    displayBooks();
    form.reset();
    
    console.log("ewdd"+title)
    popup.classList.remove("open-pop-up");
})


