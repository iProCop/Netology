"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const container_js_1 = require("./container.js");
const BooksRepository_js_1 = require("./repositories/BooksRepository.js");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const booksRouter = express_1.default.Router();
booksRouter.get("/", async (_req, res, next) => {
    try {
        const repo = container_js_1.container.get(BooksRepository_js_1.BooksRepository);
        const books = await repo.getAllBooks();
        res.json(books);
    }
    catch (err) {
        next(err);
    }
});
booksRouter.get("/:id", async (req, res, next) => {
    try {
        const repo = container_js_1.container.get(BooksRepository_js_1.BooksRepository);
        const idParam = req.params.id;
        const book = await repo.getBook(Array.isArray(idParam) ? idParam[0] : idParam);
        if (book === null) {
            res.status(404).json({ message: "Книга не найдена" });
            return;
        }
        res.json(book);
    }
    catch (err) {
        next(err);
    }
});
booksRouter.post("/", async (req, res, next) => {
    try {
        const repo = container_js_1.container.get(BooksRepository_js_1.BooksRepository);
        const created = await repo.createBook(req.body);
        res.status(201).json(created);
    }
    catch (err) {
        next(err);
    }
});
booksRouter.put("/:id", async (req, res, next) => {
    try {
        const repo = container_js_1.container.get(BooksRepository_js_1.BooksRepository);
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
    }
    catch (err) {
        next(err);
    }
});
booksRouter.delete("/:id", async (req, res, next) => {
    try {
        const repo = container_js_1.container.get(BooksRepository_js_1.BooksRepository);
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
    }
    catch (err) {
        next(err);
    }
});
app.use("/books", booksRouter);
const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
    console.log(`Сервер слушает порт ${PORT}`);
});
//# sourceMappingURL=index.js.map