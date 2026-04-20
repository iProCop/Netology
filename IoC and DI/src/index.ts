import express, { type Request, type Response, type NextFunction } from "express";
import { container } from "./container.js";
import { BooksRepository } from "./repositories/BooksRepository.js";

const app = express();
app.use(express.json());

const booksRouter = express.Router();

booksRouter.get("/", async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const repo = container.get(BooksRepository);
    const books = await repo.getAllBooks();
    res.json(books);
  } catch (err) {
    next(err);
  }
});

booksRouter.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const repo = container.get(BooksRepository);
    const idParam = req.params.id;
    const book = await repo.getBook(Array.isArray(idParam) ? idParam[0]! : idParam!);
    if (book === null) {
      res.status(404).json({ message: "Книга не найдена" });
      return;
    }
    res.json(book);
  } catch (err) {
    next(err);
  }
});

booksRouter.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const repo = container.get(BooksRepository);
    const created = await repo.createBook(req.body);
    res.status(201).json(created);
  } catch (err) {
    next(err);
  }
});

booksRouter.put("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const repo = container.get(BooksRepository);
    const id = Number(req.params.id);
    if (Number.isNaN(id)) {
      res.status(400).json({ message: "Некорректный id" });
      return;
    }
    const updated = await repo.updateBook(id, { ...req.body, id });
    if (updated === null) {
      res.status(404).json({ message: "Книга не найдена" });
      return;
    }
    res.json(updated);
  } catch (err) {
    next(err);
  }
});

booksRouter.delete("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const repo = container.get(BooksRepository);
    const id = Number(req.params.id);
    if (Number.isNaN(id)) {
      res.status(400).json({ message: "Некорректный id" });
      return;
    }
    const deleted = await repo.deleteBook(id);
    if (!deleted) {
      res.status(404).json({ message: "Книга не найдена" });
      return;
    }
    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

app.use("/books", booksRouter);

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
  console.log(`Сервер слушает порт ${PORT}`);
});
