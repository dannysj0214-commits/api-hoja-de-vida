const express = require('express');
const router = express.Router();
const experienciaController = require('../controllers/experienciaController');

// Rutas CRUD
router.post('/', experienciaController.createExperiencia);      // Crear
router.get('/', experienciaController.getAllExperiencias);      // Leer todos
router.get('/:id', experienciaController.getExperienciaById);   // Leer uno
router.put('/:id', experienciaController.updateExperiencia);    // Actualizar
router.delete('/:id', experienciaController.deleteExperiencia); // Eliminar

module.exports = router;