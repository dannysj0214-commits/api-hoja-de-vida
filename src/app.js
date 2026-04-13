const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const experienciaRoutes = require('./routes/experienciaRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/api/experiencias', experienciaRoutes);

// Ruta de bienvenida
app.get('/', (req, res) => {
  res.json({
    message: 'API de Hoja de Vida - Experiencias Profesionales',
    version: '1.0.0',
    endpoints: {
      create: 'POST /api/experiencias',
      getAll: 'GET /api/experiencias',
      getOne: 'GET /api/experiencias/:id',
      update: 'PUT /api/experiencias/:id',
      delete: 'DELETE /api/experiencias/:id'
    }
  });
});

// Manejo de rutas no encontradas
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: `Ruta ${req.originalUrl} no encontrada`
  });
});

module.exports = app;