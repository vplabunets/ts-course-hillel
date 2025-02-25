"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hw_4_1_book_service_1 = require("./hw-4.1-book-service");
describe('BookService', () => {
    let myBookService;
    let book1;
    let book2;
    let author1;
    let author2;
    beforeEach(() => {
        book1 = new hw_4_1_book_service_1.Book('Digital Fortress', 1998, hw_4_1_book_service_1.BookGenre.Fiction, 1, 123);
        book2 = new hw_4_1_book_service_1.Book('The Code Da Vinci', 2003, hw_4_1_book_service_1.BookGenre.Fiction, 1, 124);
        author1 = new hw_4_1_book_service_1.Author(1, 'Den', 'Brown');
        author2 = new hw_4_1_book_service_1.Author(2, 'Panas', 'Myrnyi');
        myBookService = new hw_4_1_book_service_1.BookService();
        myBookService.addBook(book1, book2);
        myBookService.addAuthor(author1, author2);
    });
    test('should return all books', () => {
        const books = myBookService.getBooks();
        expect(books).toHaveLength(2);
        expect(books[0].title).toBe('Digital Fortress');
    });
    test('should return book by id', () => {
        const book = myBookService.getBookById(123);
        expect(book).toBe(book1);
        const notFoundBook = myBookService.getBookById(999);
        expect(notFoundBook).toBe('Book with requested ID was not found');
    });
    test('should return all authors', () => {
        const authors = myBookService.getAuthors();
        expect(authors).toHaveLength(2);
        expect(authors[0].firstName).toBe('Den');
    });
    test('should return author by id', () => {
        const author = myBookService.getAuthorById(1);
        expect(author).toBe(author1);
        const notFoundAuthor = myBookService.getAuthorById(999);
        expect(notFoundAuthor).toBe('Author with requested ID was not found');
    });
    test('should return books by author id', () => {
        const booksByAuthor = myBookService.getBooksByAuthor(1);
        if (typeof booksByAuthor === 'string') {
            expect(booksByAuthor).toBe('Books with requested author were not found');
        }
        else {
            expect(booksByAuthor).toHaveLength(0);
            if (booksByAuthor.length > 0) {
                expect(booksByAuthor[0].authorId).toBe(1);
            }
        }
        const booksByNonExistentAuthor = myBookService.getBooksByAuthor(999);
        expect(booksByNonExistentAuthor).toBe('Books with requested author were not found');
    });
    test('should return author by book id', () => {
        const authorByBook = myBookService.getAuthorByBookId(123);
        expect(authorByBook).toBe(author1);
        const notFoundAuthorByBook = myBookService.getAuthorByBookId(999);
        expect(notFoundAuthorByBook).toBe('Book with requested id is missing in BookService');
    });
    test('should return books by search query', () => {
        const searchResult = myBookService.search('Digital Fortress');
        expect(searchResult).toHaveLength(1);
        expect(searchResult[0].title).toBe('Digital Fortress');
        const searchByYear = myBookService.search('1998');
        expect(searchByYear).toHaveLength(1);
        expect(searchByYear[0].publicationYear).toBe(1998);
        const searchByGenre = myBookService.search('Fiction');
        expect(searchByGenre).toHaveLength(2);
    });
});
