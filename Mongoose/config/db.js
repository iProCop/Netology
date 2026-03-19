const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI не определена в переменных окружения (.env)');
    }

    const conn = await mongoose.connect(process.env.MONGODB_URI);

    console.log(`MongoDB подключена: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Ошибка подключения к базе данных: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;