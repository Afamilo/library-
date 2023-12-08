let myLibrary = [];

function Book(name, author, page, read) {
    this.name = name;
    this.author = author;
    this.page = page;
    this.read = read;
}
let books = new Book('unknown', 'unknown', '0', false)

function addBook(newBook) {
   myLibrary.push(newBook); 
}



