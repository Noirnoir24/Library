const myLibrary= [];

function Book(title, author, pages, read){
    if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title=title;
  this.author=author;
  this.pages=pages;
  this.read=read;
  this.id=crypto.randomUUID()
  this.info=function(){
    return this.title+" by "+this.author+", "+this.pages+" pages, "+this.read+", ID: "+this.id
  };
}

function addBookToLibrary(title, author, pages, read){
const myNewBook= new Book(title, author, pages, read);
myLibrary.push(myNewBook);
}

const Book0= new Book('Bingo', 'Luigi', '25', 'Not read');

const Book1= new Book('What?', 'Who?', '60', 'Read')

const Book2= new Book('Necronomicon', 'Niro', '120', 'Read');

myLibrary.push(Book0, Book1, Book2);

const cardContainer= document.getElementById('cardContainer');



myLibrary.forEach(book => {
const bookDiv= document.createElement('div');
bookDiv.classList.add('book-card');

const bookHeading= document.createElement('h3');
bookHeading.textContent= book.title;

const bookAuthor= document.createElement('p');
bookAuthor.textContent= `Written by: ${book.author}`;

const bookPages= document.createElement('p');
bookPages.textContent= `Number of pages: ${book.pages}`;

const bookStatus= document.createElement('p');
bookStatus.textContent= book.read;

bookDiv.appendChild(bookHeading);
bookDiv.appendChild(bookAuthor);
bookDiv.appendChild(bookPages);
bookDiv.appendChild(bookStatus);

cardContainer.appendChild(bookDiv);
})

