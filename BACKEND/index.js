// 1. Importar express
const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT;

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

// 4. Indicar el puerto y arrancar el servidor

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
