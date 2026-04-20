import type { Book } from "../types/Book.js";
import { injectable } from "inversify";


@injectable()
export class BooksRepository {
  private readonly books = new Map<number, Book>();
  private nextId = 1;

  async createBook(book: Omit<Book, "id">): Promise<Book> {
    const newBook: Book = { ...book, id: this.nextId++ };
    this.books.set(newBook.id, newBook);
    return newBook;
  }

  async getBook(id: string): Promise<Book | null> {
    const numId = Number(id);
    if (Number.isNaN(numId)) {
      return null;
    }
    return this.books.get(numId) ?? null;
  }

  async getAllBooks(): Promise<Book[]> {
    return [...this.books.values()];
  }

  async updateBook(id: number, book: Book): Promise<Book | null> {
    if (!this.books.has(id)) {
      return null;
    }
    const updated: Book = { ...book, id };
    this.books.set(id, updated);
    return updated;
  }

  async deleteBook(id: number): Promise<boolean> {
    return this.books.delete(id);
  }
}
