angular
  .module('bookApp')
  .controller('BooksController', BooksController);

function BooksController (Book) {
  vm = this;

  this.newBook = {};
  this.books = Book.query(); // returns all the books
  this.createBook = createBook;
  this.updateBook = updateBook;
  this.deleteBook = deleteBook;
  this.showEditForm = false;

  function updateBook(book) {
    Book.update({id: book._id}, book);
    book.editForm = false;
  }

  function createBook(){
    Book.save(this.newBook)
    .then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        vm.books = Book.query();
      });
    this.newBook = {};
  }

  function deleteBook(book) {
    Book.remove({id:book._id});
    var bookIndex = this.books.indexOf(book);
    this.books.splice(bookIndex, 1);
  }

  console.log("Controller loaded.");
}