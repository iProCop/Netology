import { Module } from '@nestjs/common';
import { BookService } from './books.service';
import { BooksController } from './books.controller';

@Module({
    controllers: [BooksController],
    providers: [BookService],
})
export class BooksModule {};