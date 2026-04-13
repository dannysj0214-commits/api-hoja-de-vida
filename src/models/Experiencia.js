const mongoose = require('mongoose');

const experienciaSchema = new mongoose.Schema(
  {
    cargo: {
      type: String,
      required: [true, 'El cargo es obligatorio'],
      trim: true
    },
    empresa: {
      type: String,
      required: [true, 'La empresa es obligatoria'],
      trim: true
    },
    fechaInicio: {
      type: Date,
      required: [true, 'La fecha de inicio es obligatoria']
    },
    fechaFin: {
      type: Date,
      default: null
    },
    esTrabajoActual: {
      type: Boolean,
      default: false
    },
    descripcion: {
      type: String,
      required: [true, 'La descripción es obligatoria']
    },
    logros: {
      type: [String],
      default: []
    },
    tecnologias: {
      type: [String],
      default: []
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Experiencia', experienciaSchema);