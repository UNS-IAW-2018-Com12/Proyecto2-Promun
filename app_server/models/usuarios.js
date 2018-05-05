var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/promun');

var usuarioSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
    },
  email: {
    type: String,
    required: true,
    unique: true
  },
  tipo: {
    type: String,
    required: true,
    default: 'user'
  },
  foto_path: {
    type: String
  },
  descripcion: {
    type: String,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  puntaje: {
    type: Numbers,
    default: 0,
    min: 0
  }
});

mongoose.model('Usuario', usuarioSchema);
