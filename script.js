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