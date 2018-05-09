var mongoose = require('mongoose');

var schemaPartidoFaseFinal = mongoose.Schema({
    fase: {
      type: String,
      required: true
    },
    nro_partido: {
      type: Number,
      required: true
    },
    equipo1: {
      type: String,
      required: true
    },
    equipo2: {
      type: String,
      required: true
    },
    fecha: {
      type: String,
      required: true
    },
    resultadoGoles1: {
      type: Number,
    },
    resultadoGoles2: {
      type: Number,
    },
    cerrado: {
      type: Boolean,
      required: true
    },
    pronosticos: [
      {
        user: {
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

mongoose.model('PartidoFaseFinal', schemaPartidoFaseFinal);
