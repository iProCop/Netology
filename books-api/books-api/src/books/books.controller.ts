import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { BookService } from './books.service';

@Controller('/books')
export class BooksController {
    constructor(private readonly booksService: BookService) {}

    @Get()
    getAll() {
        return this.booksService.getAll();
    }
    
    @Get(':id')
    getById(@Param('id') id: string) {
        return this.booksService.getById(id);
    }

    @Post()
    create(@Body() body: { title: string, author: string }) {
        return this.booksService.create(body.title, body.author);
    }

    @Put(':id')
    update(
        @Param('id') id: string,
        @Body() body: { title: string, author: string },
    ) {
        return this.booksService.update(id, body.title, body.author);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.booksService.remove(id);
    }
}