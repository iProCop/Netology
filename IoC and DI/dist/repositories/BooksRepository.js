"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksRepository = void 0;
const inversify_1 = require("inversify");
let BooksRepository = class BooksRepository {
    books = new Map();
    nextId = 1;
    async createBook(book) {
        const newBook = { ...book, id: this.nextId++ };
        this.books.set(newBook.id, newBook);
        return newBook;
    }
    async getBook(id) {
        const numId = Number(id);
        if (Number.isNaN(numId)) {
            return null;
        }
        return this.books.get(numId) ?? null;
    }
    async getAllBooks() {
        return [...this.books.values()];
    }
    async updateBook(id, book) {
        if (!this.books.has(id)) {
            return null;
        }
        const updated = { ...book, id };
        this.books.set(id, updated);
        return updated;
    }
    async deleteBook(id) {
        return this.books.delete(id);
    }
};
exports.BooksRepository = BooksRepository;
exports.BooksRepository = BooksRepository = __decorate([
    (0, inversify_1.injectable)()
], BooksRepository);
//# sourceMappingURL=BooksRepository.js.map