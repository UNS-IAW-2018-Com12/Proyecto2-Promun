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
    bandera_path: {
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
  }]
});

mongoose.model('Grupo', schemaGrupo);
