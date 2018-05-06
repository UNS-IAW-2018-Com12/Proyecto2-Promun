var mongoose = require('mongoose');

var usuarioSchema = mongoose.Schema({
  id: String,
  access_token: String,
  firstName: String,
  lastName: String,
  email: String
})
mongoose.model('Usuario', usuarioSchema);
  /*
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
  fb: {

	}
});
*/
