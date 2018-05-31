var mongoose = require('mongoose');

//const dbURI = process.env.MLAB_URI;
const dbURI = 'mongodb://promun:promun@ds117749.mlab.com:17749/promundata';
mongoose.connect(dbURI);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log('Conectado a la base de datos.');
});

require('./grupos');
require('./usuarios');
require('./fasefinal');
