import "reflect-metadata";
import { container } from "inversify";
import { BookRepository } from "./BookTS/src/repository/BookRepository.js";

const container = new container();

container.bind(BookRepository).toSelf();

export { container };