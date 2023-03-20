const container = document.querySelector('.container');

book1 = new Book('book1');
book2 = new Book('book2');
book3 = new Book('book3');
book4 = new Book('book4');

let myLibrary = [book1, book2, book3, book4];


function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++){
        let book = document.createElement('div');
        container.appendChild(book);
        let title = document.createElement('h1');
        book.appendChild(title)
        title.innerText = myLibrary[i].title;


    }
}


function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary() {

}

displayBooks();

