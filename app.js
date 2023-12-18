let myLibrary = [];

function Book(title, author, page, isRead) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.isRead = isRead;
}

function addBook() {
   let title = document.querySelector('#title').value
   let author = document.querySelector('#author').value
   let page = document.querySelector('#page').value
   let isRead = document.querySelector('#isRead').checked
   let newBook = new Book(title, author, page, isRead)
  myLibrary.push(newBook); 
  toRender();
}

  const container = document.querySelector('.container');
  const addBookbtn = document.querySelector('.addBook-btn')
  const submit = document.querySelector('#submit');

addBookbtn.addEventListener('click', function(){
  container.classList.add('active') 
})

function createBook(item) {
    const bookGrid = document.querySelector('#books-grid');
    const bookDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const pageDiv = document.createElement('div');
    const isReadBtn = document.createElement('button');
    const removeBtn = document.createElement('button');
    
    bookDiv.classList.add('book');
    bookDiv.setAttribute('id', myLibrary.indexOf(item));
    
    titleDiv.textContent = item.title
    titleDiv.classList.add('title');
    bookDiv.appendChild(titleDiv);

    authorDiv.textContent = item.author;
    authorDiv.classList.add('author');
    bookDiv.appendChild(authorDiv)

    pageDiv.textContent = item.page;
    pageDiv.classList.add('page');
    bookDiv.appendChild(pageDiv)
 
    isReadBtn.classList.add('isReadBtn');
    isReadBtn.style.fontSize = '20px'
    isReadBtn.addEventListener('click', function(){
      item.isRead = !item.isRead;
      setData();
      toRender();
    })

    bookDiv.appendChild(isReadBtn);
    
    if(item.isRead === false) {
      isReadBtn.textContent = "Not Read";
      isReadBtn.style.backgroundColor = 'red'
    }else {
      isReadBtn.textContent = 'Read';
      isReadBtn.style.backgroundColor = 'green';
    }

    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('removeBtn')
    removeBtn.setAttribute('id', 'removeBtn');
    bookDiv.appendChild(removeBtn);

    bookGrid.appendChild(bookDiv);

    removeBtn.addEventListener('click', function(){
        removeBook();
        setData();
    })
}

function toRender() {
  const display = document.querySelector('.books-grid');
  const books = document.querySelectorAll('.book')
  books.forEach(function(book){
       display.removeChild(book);
  })
    for (let i = 0; i < myLibrary.length; i++) {
      createBook(myLibrary[i]);
    }
 
}

submit.addEventListener('click', function(event){
  event.preventDefault();
  addBook();
  setData();
  clearform();
  container.classList.remove('active')
  })

function clearform() {
  title.value = '';
  author.value = '';
  page.value = '';
  isRead.value = '';
}

function setData() {
  localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary));
}
function removeBook(index) {
  myLibrary.splice(index, 1);
  toRender();
}

function restore() {
   myLibrary = JSON.parse(localStorage.getItem('myLibrary'));
   toRender();
}

restore();