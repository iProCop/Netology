"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = void 0;
require("reflect-metadata");
const inversify_1 = require("inversify");
const BooksRepository_js_1 = require("./repositories/BooksRepository.js");
const container = new inversify_1.Container();
exports.container = container;
container.bind(BooksRepository_js_1.BooksRepository).toSelf();
//# sourceMappingURL=container.js.map