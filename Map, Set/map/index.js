export class ErrorRepository {
    constructor() {
        this.errors = new Map([
            [400, 'Некорректный запрос'],
            [401, 'Не авторизован'],
            [403, 'Доступ запрещён'],
            [404, 'Страница не найдена'],
            [500, 'Внутренняя ошибка сервера'],
        ]);
    }

    /**
     * @param {number} code - код ошибки
     * @returns {string} - сообщение об ошибке
     */
    translate(code) {
        return this.errors.has(code) ? this.errors.get(code) : "Unknown error";
    }
}