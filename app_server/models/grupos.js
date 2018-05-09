var mongoose = require('mongoose');

var schemaGrupo = mongoose.Schema({
  letra: {
    type: String,
    required: true,
    unique: true
  },
  equipos: [{
    nombre: {
      type: String,
      required: true,
      unique: true
    },
    descripcion: {
      type: String,
      required: true
    },
    resultados_grupo: {
      puntos: {
        type: Number,
        default: 0,
        min: 0,
        max: 9
      },
      pj: {
        type: Number,
        default: 0,
        min: 0,
        max: 3
      },
      pg: {
        type: Number,
        default: 0,
        min: 0,
        max: 3
      },
      pe: {
        type: Number,
        default: 0,
        min: 0,
        max: 3
      },
      pp: {
        type: Number,
        default: 0,
        min: 0,
        max: 3
      },
      gf: {
        type: Number,
        default: 0,
        min: 0
      },
      gc: {
        type: Number,
        default: 0,
        min: 0
      },
      dif: {
        type: Number,
        default: 0
      }
    }
  }],
  partidos: [
    {
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
    }
  ]
});

mongoose.model('Grupo', schemaGrupo);
