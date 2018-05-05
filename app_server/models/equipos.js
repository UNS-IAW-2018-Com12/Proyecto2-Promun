var mongoose = require('mongoose');

const dbURI = process.env.MLAB_URI;

mongoose.connect(dbURI);

var schemaEquipo = mongoose.Schema({
  name: {
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
  grupo: {
    type: String,
    required: true,
    uppercase: true,
    match: [A-H]
  },
  resultados_grupo: [{
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
  }]
});

mongoose.model('Equipo', schemaEquipo);
