var mongoose = require('mongoose');

const dbURI = process.env.MLAB_URI;
<<<<<<< HEAD
=======
//const dbURI = 'mongodb://localhost:27017/Promun'
>>>>>>> 60d96d707133cf5db08108ad2b8e7af9e45b4572

mongoose.connect(dbURI);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log('Conectado a la base de datos.');
});

require('./grupos');
require('./usuarios');
require('./fasefinal');
