import type { Book } from "../types/Book.js";
export declare class BooksRepository {
    private readonly books;
    private nextId;
    createBook(book: Omit<Book, "id">): Promise<Book>;
    getBook(id: string): Promise<Book | null>;
    getAllBooks(): Promise<Book[]>;
    updateBook(id: number, book: Book): Promise<Book | null>;
    deleteBook(id: number): Promise<boolean>;
}
//# sourceMappingURL=BooksRepository.d.ts.map