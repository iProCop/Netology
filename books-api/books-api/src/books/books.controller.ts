import { Controller, Get, Param, Post, Body, ParseIntPipe } from '@nestjs/common';
import { BookService } from './books.service';

@Controller('/books')
export class BooksController {
    constructor(private readonly booksService: BookService) {}

    @Get()
    getAll() {
        return this.booksService.getAll();
    }

    @Get('id')
    getById(@Param('id', ParseIntPipe) id: number) {
        return this.booksService.getById(id);
    }

    @Post()
    add(@Body() body: {title: string, author: string}) {
        return this.booksService.addBook(body.title, body.author);
    }
}