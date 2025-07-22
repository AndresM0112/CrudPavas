const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./config/db');
const swaggerDocs = require('./swagger'); // 👈 Importa Swagger

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Rutas
app.use('/products', require('./routes/productRoutes'));
app.use('/categories', require('./routes/categoryRoutes'));

// Swagger
swaggerDocs(app); // 👈 Monta Swagger en /api-docs

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log(`Documentación disponible en http://localhost:${PORT}/api-docs`);
});

