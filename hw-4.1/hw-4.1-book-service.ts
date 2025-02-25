// Вам необхідно створити інтерфейс книжкового сервісу. Також продумайте інтерфейси для опису книг та авторів.

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

export enum BookGenre {
  Fiction = 'Fiction',
  NonFiction = 'NonFiction',
  Mystery = 'Mystery',
  Fantasy = 'Fantasy',
  ScienceFiction = 'ScienceFiction',
  Biography = 'Biography',
  Romance = 'Romance',
  Thriller = 'Thriller',
  Historical = 'Historical',
  SelfHelp = 'SelfHelp',
  Children = 'Children',
  Poetry = 'Poetry',
  Adventure = 'Adventure',
  Horror = 'Horror',
  Philosophy = 'Philosophy',
  Science = 'Science',
  Drama = 'Drama',
}

interface IBook {
  id: number;
  title: string;
  publicationYear: number;
  genre: BookGenre;
  authorId: number;
  // modifyBook(key: string, value: string | number): void;
}

interface IAuthor {
  id: number;
  firstName: string;
  lastName: string;
}

interface IBookService {
  books: IBook[];
  authors: IAuthor[];
  getBooks(): IBook[];
  getBookById(id: number): IBook | string;
  getAuthors(): IAuthor[];
  getAuthorById(authorId: number): IAuthor | string;
  getBooksByAuthor(authorId: number): IBook[] | string;
  getAuthorByBookId(id: number): IAuthor | string;
  search(query: string): IBook[];
}

export class Author implements IAuthor {
  id: number;
  firstName: string;
  lastName: string;
  constructor(id: number, firstName: string, lastName: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

export class Book implements IBook {
  id: number;
  title: string;
  publicationYear: number;
  genre: BookGenre;
  authorId: number;

  constructor(title: string, publicationYear: number, genre: BookGenre, authorId: number, id: number) {
    this.id = id;
    this.title = title;
    this.publicationYear = publicationYear;
    this.genre = genre;
    this.authorId = authorId;
  }

  // modifyBook(key: keyof IBook, value: string | number | BookGenre): void {
  // this[key] = value;
  // Не знаю як описати тиапи, щоб тут не було помилки
  //Type 'string | number' is not assignable to type 'never'.
  //Type 'string' is not assignable to type 'never'.ts(2322)
  //this: this
  // }
}

export class BookService implements IBookService {
  books: IBook[] = [];
  authors: IAuthor[] = [];

  addBook(...books: IBook[]): void {
    this.books.push(...books);
  }
  addAuthor(...authors: IAuthor[]): void {
    this.authors.push(...authors);
  }
  getBooks(): IBook[] {
    return this.books;
  }
  getBookById(id: number): IBook | string {
    return this.books.find((book) => book.id === id) || 'Book with requested ID was not found';
  }
  getAuthors(): IAuthor[] {
    return this.authors;
  }
  getAuthorById(authorId: number): IAuthor | string {
    return this.authors.find((author) => author.id === authorId) || 'Author with requested ID was not found';
  }
  getBooksByAuthor(authorId: number): IBook[] | string {
    const filteredBooks = this.books.filter((book) => book.id === authorId);
    if (filteredBooks.length > 0) {
      return filteredBooks;
    } else {
      return 'Books with requested author were not found';
    }
  }
  getAuthorByBookId(id: number): IAuthor | string {
    const book = this.books.find((book) => book.id === id);
    if (!book) return 'Book with requested id is missing in BookService';

    const author = this.authors.find((author) => author.id === book.authorId);
    return author || 'Author for the requested book ID was not found';
  }

  search(query: string): IBook[] {
    return this.books.filter(
      (book) =>
        book.title.includes(query) ||
        book.genre.toLowerCase().includes(query.toLowerCase()) ||
        String(book.publicationYear).includes(query)
    );
  }
}

const book1: IBook = new Book('Digital Fortress', 1998, BookGenre.Fiction, 1, 123);
const book2: IBook = new Book('The Code Da Vinchi', 2003, BookGenre.Fiction, 1, 124);
const book3: IBook = new Book('Poviia', 1884, BookGenre.Drama, 2, 125);
const book4: IBook = new Book('Hungry will', 1897, BookGenre.Drama, 2, 164);
const book5: IBook = new Book("Kaidash's Family", 1878, BookGenre.Drama, 3, 200);
const book6: IBook = new Book('Chasing Two Hares', 1883, BookGenre.Fiction, 4, 300);
const author1: IAuthor = new Author(1, 'Den', 'Brown');
const author2: IAuthor = new Author(2, 'Panas', 'Myrnyi');
const author3: IAuthor = new Author(3, 'Ivan', 'Nechui-Levytslkyi');
const author4: IAuthor = new Author(4, 'Mykhailo', 'Starytskyi');

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
