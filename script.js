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
  this.changeStatus= function(){
    if(this.read==="Read") {
      this.read="Not Read"
    }
    else if(this.read==="Not Read"){
      this.read="Read"
    }
  }
}

function addBookToLibrary(title, author, pages, read){
const myNewBook= new Book(title, author, pages, read);
myLibrary.push(myNewBook);
}

const Book0= new Book('Bingo', 'Luigi', '25', 'Not Read');

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
bookStatus.textContent= `Status: ${book.read}`;

const removeBookButton= document.createElement('button');
removeBookButton.textContent= "Remove"
removeBookButton.classList.add('removeBookButton')

const changeStatusBtn= document.createElement('button');
changeStatusBtn.textContent= "Change Status"
changeStatusBtn.classList.add('changeStatusButton')


removeBookButton.addEventListener('click', () => { 
    bookDiv.remove();

    let bookIdToRemove= book.id

    let bookToRemove= myLibrary.findIndex(book => book.id === bookIdToRemove);

    if (bookToRemove !== -1) {
      myLibrary.splice(bookToRemove, 1)
    }
  })

changeStatusBtn.addEventListener('click', ()=> {
  book.changeStatus();
  bookStatus.textContent= `Status: ${book.read}`
})

bookDiv.appendChild(bookHeading);
bookDiv.appendChild(bookAuthor);
bookDiv.appendChild(bookPages);
bookDiv.appendChild(bookStatus);
bookDiv.appendChild(removeBookButton);
bookDiv.appendChild(changeStatusBtn);

cardContainer.appendChild(bookDiv);
})

const addBookBtn= document.querySelector('.add-book');
const newBookDialog= document.querySelector('#newBookDialog')

addBookBtn.addEventListener('click', () => {
newBookDialog.showModal()
})

confirmBtn= document.getElementById('confirmButton');

confirmBtn.addEventListener('click', ()=> {

  event.preventDefault();

  const bookForm = document.getElementById('bookForm');

  if (!bookForm.reportValidity()) { /// Wont prevent long strings or numbers from being submitted, maybe will implement later
        return; 
    }

  const formBookHeading= document.getElementById('bTitle').value;
  const formBookAuthor= document.getElementById('bAuthor').value;
  const formBookPages= document.getElementById('bPages').value;
  const formBookStatus= document.querySelector('input[name="bookStatus"]:checked').value;

  addBookToLibrary(formBookHeading, formBookAuthor, formBookPages, formBookStatus);

  const selectedObject= myLibrary.find(obj => obj.id === (myLibrary[myLibrary.length-1].id))

const bookDiv= document.createElement('div');
bookDiv.classList.add('book-card');

const bookHeading= document.createElement('h3');
bookHeading.textContent= selectedObject.title;

const bookAuthor= document.createElement('p');
bookAuthor.textContent= `Written by: ${selectedObject.author}`;

const bookPages= document.createElement('p');
bookPages.textContent= `Number of pages: ${selectedObject.pages}`;

const bookStatus= document.createElement('p');
bookStatus.textContent= `Status: ${selectedObject.read}`;

const removeBookButton= document.createElement('button');
removeBookButton.textContent= "Remove"
removeBookButton.classList.add('removeBookButton')

const changeStatusBtn= document.createElement('button');
changeStatusBtn.textContent= "Change Status"
changeStatusBtn.classList.add('changeStatusButton')


removeBookButton.addEventListener('click', () => { 
    bookDiv.remove();

        let bookIdToRemove= selectedObject.id

    let bookToRemove= myLibrary.findIndex(book => book.id === bookIdToRemove);

    if (bookToRemove !== -1) {
      myLibrary.splice(bookToRemove, 1)
    }
  })

changeStatusBtn.addEventListener('click', ()=> {
  selectedObject.changeStatus();
  bookStatus.textContent= `Status: ${selectedObject.read}`
})

bookDiv.appendChild(bookHeading);
bookDiv.appendChild(bookAuthor);
bookDiv.appendChild(bookPages);
bookDiv.appendChild(bookStatus);
bookDiv.appendChild(removeBookButton);
bookDiv.appendChild(changeStatusBtn);

cardContainer.appendChild(bookDiv);

document.getElementById('bookForm').reset()

newBookDialog.close()

})

const removeBtn= document.querySelectorAll('.removeBookButton')


