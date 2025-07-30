const mongoose = require('mongoose');
require('dotenv').config();
const mongoURI = process.env.MONGO_URI || 'mongodb://mongo:27017/inventario';
