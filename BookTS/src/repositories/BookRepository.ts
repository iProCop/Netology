import { Book } from "../types/Book";

export abstract class BookRepository {
    abstract createBook(book: Book): void;
    abstract getBookByID(id: number): Book;
    abstract getAllBooks(): Book[];
    abstract updateBook(id: number, book: Book): void;
    abstract deleteBook(id: number): void;
};