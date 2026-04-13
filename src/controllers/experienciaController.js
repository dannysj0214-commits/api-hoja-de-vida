const Experiencia = require('../models/Experiencia');

// Crear una experiencia
exports.createExperiencia = async (req, res) => {
  try {
    // Si es trabajo actual, fechaFin debe ser null
    if (req.body.esTrabajoActual) {
      req.body.fechaFin = null;
    }
    
    const experiencia = new Experiencia(req.body);
    await experiencia.save();
    
    res.status(201).json({
      success: true,
      message: 'Experiencia profesional creada exitosamente',
      data: experiencia
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Obtener todas las experiencias
exports.getAllExperiencias = async (req, res) => {
  try {
    const experiencias = await Experiencia.find().sort({ fechaInicio: -1 });
    res.status(200).json({
      success: true,
      count: experiencias.length,
      data: experiencias
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Obtener una experiencia por ID
exports.getExperienciaById = async (req, res) => {
  try {
    const experiencia = await Experiencia.findById(req.params.id);
    
    if (!experiencia) {
      return res.status(404).json({
        success: false,
        message: 'Experiencia no encontrada'
      });
    }
    
    res.status(200).json({
      success: true,
      data: experiencia
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Actualizar una experiencia
exports.updateExperiencia = async (req, res) => {
  try {
    // Si es trabajo actual, fechaFin debe ser null
    if (req.body.esTrabajoActual) {
      req.body.fechaFin = null;
    }
    
    const experiencia = await Experiencia.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!experiencia) {
      return res.status(404).json({
        success: false,
        message: 'Experiencia no encontrada'
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Experiencia actualizada exitosamente',
      data: experiencia
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Eliminar una experiencia
exports.deleteExperiencia = async (req, res) => {
  try {
    const experiencia = await Experiencia.findByIdAndDelete(req.params.id);
    
    if (!experiencia) {
      return res.status(404).json({
        success: false,
        message: 'Experiencia no encontrada'
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Experiencia eliminada exitosamente'
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};