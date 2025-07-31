const mongoose = require('mongoose');
require('dotenv').config();
const mongoURI = process.env.MONGO_URI || 'mongodb://mongo:27017/inventario';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ MongoDB conectado: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Error al conectar a MongoDB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
