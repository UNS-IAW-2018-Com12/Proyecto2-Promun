var mongoose = require('mongoose');

var schemaPartidosFaseFinal = mongoose.Schema({
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

mongoose.model('PartidosFaseFinal', schemaPartidosFaseFinal);
