"use strict";
// Вам необхідно створити інтерфейс книжкового сервісу. Також продумайте інтерфейси для опису книг та авторів.
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = exports.Book = exports.Author = exports.BookGenre = void 0;
// Створіть інтерфейс IBookService, який описуватиме сервіс роботи з книгами.
// Цей інтерфейс має містити методи для виконання наступних операцій:
// getBooks - отримання всіх доступних книг
// getBookById - отримання книги за ідентифікатором
// getAuthors - отримання всіх авторів
// getAuthorById - отримання автора за ідентифікатором
// getBooksByAuthor - отримання книг за ідентифікатором автора або за його ім'ям
// getAuthorByBookId - отримання автора за ідентифікатором книги
// search - глобальний пошук за назвою книги, жанром, роком видання чи автором
// Реалізація сервісу з прикладами. Опишіть свої улюблені книги.
var BookGenre;
(function (BookGenre) {
    BookGenre["Fiction"] = "Fiction";
    BookGenre["NonFiction"] = "NonFiction";
    BookGenre["Mystery"] = "Mystery";
    BookGenre["Fantasy"] = "Fantasy";
    BookGenre["ScienceFiction"] = "ScienceFiction";
    BookGenre["Biography"] = "Biography";
    BookGenre["Romance"] = "Romance";
    BookGenre["Thriller"] = "Thriller";
    BookGenre["Historical"] = "Historical";
    BookGenre["SelfHelp"] = "SelfHelp";
    BookGenre["Children"] = "Children";
    BookGenre["Poetry"] = "Poetry";
    BookGenre["Adventure"] = "Adventure";
    BookGenre["Horror"] = "Horror";
    BookGenre["Philosophy"] = "Philosophy";
    BookGenre["Science"] = "Science";
    BookGenre["Drama"] = "Drama";
})(BookGenre || (exports.BookGenre = BookGenre = {}));
class Author {
    constructor(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
exports.Author = Author;
class Book {
    constructor(title, publicationYear, genre, authorId, id) {
        this.id = id;
        this.title = title;
        this.publicationYear = publicationYear;
        this.genre = genre;
        this.authorId = authorId;
    }
}
exports.Book = Book;
class BookService {
    constructor() {
        this.books = [];
        this.authors = [];
    }
    addBook(...books) {
        this.books.push(...books);
    }
    addAuthor(...authors) {
        this.authors.push(...authors);
    }
    getBooks() {
        return this.books;
    }
    getBookById(id) {
        return this.books.find((book) => book.id === id) || 'Book with requested ID was not found';
    }
    getAuthors() {
        return this.authors;
    }
    getAuthorById(authorId) {
        return this.authors.find((author) => author.id === authorId) || 'Author with requested ID was not found';
    }
    getBooksByAuthor(authorId) {
        const filteredBooks = this.books.filter((book) => book.id === authorId);
        if (filteredBooks.length > 0) {
            return filteredBooks;
        }
        else {
            return 'Books with requested author were not found';
        }
    }
    getAuthorByBookId(id) {
        const book = this.books.find((book) => book.id === id);
        if (!book)
            return 'Book with requested id is missing in BookService';
        const author = this.authors.find((author) => author.id === book.authorId);
        return author || 'Author for the requested book ID was not found';
    }
    search(query) {
        return this.books.filter((book) => book.title.includes(query) ||
            book.genre.toLowerCase().includes(query.toLowerCase()) ||
            String(book.publicationYear).includes(query));
    }
}
exports.BookService = BookService;
const book1 = new Book('Digital Fortress', 1998, BookGenre.Fiction, 1, 123);
const book2 = new Book('The Code Da Vinchi', 2003, BookGenre.Fiction, 1, 124);
const book3 = new Book('Poviia', 1884, BookGenre.Drama, 2, 125);
const book4 = new Book('Hungry will', 1897, BookGenre.Drama, 2, 164);
const book5 = new Book("Kaidash's Family", 1878, BookGenre.Drama, 3, 200);
const book6 = new Book('Chasing Two Hares', 1883, BookGenre.Fiction, 4, 300);
const author1 = new Author(1, 'Den', 'Brown');
const author2 = new Author(2, 'Panas', 'Myrnyi');
const author3 = new Author(3, 'Ivan', 'Nechui-Levytslkyi');
const author4 = new Author(4, 'Mykhailo', 'Starytskyi');
const myBookService = new BookService();
myBookService.addBook(book1, book2, book3, book4, book5, book6);
myBookService.addAuthor(author1, author2, author3, author4);
console.log('All Books', myBookService.getBooks());
console.log('Book with id 123', myBookService.getBookById(123));
console.log('Books with author id 1', myBookService.getBooksByAuthor(1));
console.log('All authors', myBookService.getAuthors());
console.log('Author of book with id 300', myBookService.getAuthorByBookId(300));
console.log('Author with id 2', myBookService.getAuthorById(2));
console.log('search 1883', myBookService.search('1883'));
