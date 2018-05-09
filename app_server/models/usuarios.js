var mongoose = require('mongoose');

const dbURI = process.env.MLAB_URI;

mongoose.connect(dbURI);

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
  foto_path: String,
  puntaje: {
    type: Number,
    default: 0,
    min: 0,
    }
});
