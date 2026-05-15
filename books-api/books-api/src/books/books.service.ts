import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Book, BookDocument, BookSchema } from './schemas/book.schema';

@Injectable()
export class BookService {
    constructor(
        @InjectModel(Book.name) private bookModel: Model<BookDocument>,
    ) {}

    async getById(id: string): Promise<Book | null> {
        return this.bookModel.findById(id).exec();
    }

    async getAll(): Promise<Book[]> {
        return this.bookModel.find().exec();
    }

    async create(title: string, author: string): Promise<Book> {
        return this.bookModel.create({ title, author });
    }

    async update(id: string, title: string, author: string): Promise<Book | null> {
        return this.bookModel
        .findByIdAndUpdate(id, { title, author }, { new: true })
        .exec();
    }

    async remove(id: string): Promise<Book | null> {
        return this.bookModel.findByIdAndDelete(id).exec();
    }
}