const bcrypt = require('bcryptjs');
const { create } = require('domain');

const users = [];

class User = {
    static async findByUsername(username) {
        return users.find(u => u.username === username);
    }

    static async findById(id) {
        return users.find(u => u.id === id);
    }

    static async create(username, password) {
        const existingUser = await this.findByUsername(username);
        if(existingUser) {
            throw new Error('Пользователь уже сущуствует');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = {
            id: Date.now().toString(),
            username,
            password: hashedPassword
        };

        users.push(newUser) {
            const
        }
    }
}