var mongoose = require('mongoose');

<<<<<<< HEAD
const dbURI = process.env.MLAB_URI;

mongoose.connect(dbURI);

var usuarioSchema = mongoose.Schema({
  username: {
=======
module.exports = mongoose.model('Usuario',{
  id: {
>>>>>>> 60d96d707133cf5db08108ad2b8e7af9e45b4572
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
