var mongoose = require('mongoose');

module.exports = mongoose.model('Usuario',{
  id: {
    type: String,
    required: true,
    unique: true
    },
  access_token: String,
  username: {
    type: String,
    required: true
    },
  email: String,
  puntaje: {
    type: Number,
    default: 0,
    min: 0,
    }
});


  /*
var usuarioSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
    },
  access_token: String,
  username: {
    type: String,
    required: true
    },
  email: String,
  puntaje: {
    type: Number,
    default: 0,
    min: 0,
    }
});

mongoose.model('Usuario', usuarioSchema);

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
    type: Number,
    default: 0,
    min: 0
  },
});
*/
