// 1. Importar express
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');
const PORT = process.env.PORT || 5000;
const supplierRoutes = require('./routes/supplier.routes');

dotenv.config();
connectDB();

// 2. Crear la aplicación
const app = express();
app.use(express.json());

// 3. Definir una ruta de prueba
app.get('/api/test', (req, res) => {
  res.json({ mensaje: 'Funciona' });
});

app.post('/api/test', (req, res) => {
  res.json({ recibido: req.body });
});

app.get('/', (req, res) => {
  res.send('API is ok');
});

app.use('/api/suppliers', supplierRoutes);

// 4. Indicar el puerto y arrancar el servidor

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
