import { Injectable } from "@nestjs/common";

export interface Book {
    id: number;
    title: string;
    author: string;
}

@Injectable()
export class BookService {
    private Books: Book[] = [
        {id: 1, title: 'Изучаем NestJS', author: 'Програмист'},
        {id: 2, title: 'Изучаем радиотехнику', author: 'Инженер'}
    ];

    getAll(): Book[] {
        return this.Books;
    }

    getById(id: number): Book | undefined {
        return this.Books.find((book) => book.id === id);
    }

    addBook(title: string, author: string): Book {
        const newId = this.Books.length > 0 ? this.Books[this.Books.length - 1].id + 1 : 1;
        const newBook: Book = { id: newId, title, author};
        this.Books.push(newBook);
        return newBook;
    }
}