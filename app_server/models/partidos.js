var mongoose = require('mongoose');

const dbURI = process.env.MLAB_URI;

mongoose.connect(dbURI);

var schemaPartido = mongoose.Schema({
  id_equipo1: {
    type: String,
    required: true
  },
  id_equipo2: {
    type: String,
    required: true
    },
  fecha: {
    type: Date,
    required: true
  },
  grupo: {
    type: String,
    uppercase: true
  },
  comentarios: [
    {
      userId: {
        type: String,
        required: true
      },
      texto: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 300
      },
      fecha: {
        type: Date,
        required: true,
        default: Date.now
      }
    }
  ],
  pronosticos: [
    {
      userId: {
        type: String,
        required: true
      },
      golesEquipo1: {
        type: Number,
        required: true
      },
      golesEquipo2: {
        type: Number,
        required: true
      },
      estrellas: {
        type: Number,
        min: 1,
        max: 5
      }
    }
  ]
});

mongoose.model('Partido', schemaPartido);
