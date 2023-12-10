let myLibrary = [];

function Book(title, author, page, read) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read;
}
const newBook = new Book(title, author, pages, reads)

function addBook() {
  return  myLibrary.push(newBook); 
}

const bookGrid = document.querySelector('.book-grid');
let newBookBtn = document.querySelector('.addBook-btn');
let title = document.querySelector('#title').value;
let author = document.querySelector('#author').value;
let pages = document.querySelector('#pages').value;
let reads = document.querySelector('#isReads').value;

function toRender() {
  const books = document.querySelectorAll('.books');
  books.forEach(function(book){
    for (let i = 0; i < myLibrary.length; i++) {
      createBook(myLibrary[i]);
    }
  })
}
function createBook(item) {
    const bookDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const pageDiv = document.createElement('div');
    const readBtn = document.createElement('button');
    
    bookDiv.classList.add('book');
    bookDiv.setAttribute('id', myLibraryindexof(item));

    titleDiv.textContent = item.tittle
    titleDiv.classList.add('title');
    bookDiv.appendChild(titleDiv);

    authorDiv.textContent = item.author;
    authorDiv.classList.add('author');
    bookDiv.appendChild(authorDiv)

    pageDiv.textContent = item.page;
    pageDiv.classList.add('page');
    bookDiv.appendChild(pageDiv)
 
    readBtn.classList.add('button');
    
    
}