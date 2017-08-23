var mongoose = require('mongoose');

mongooseURI = 'mongodb://localhost:27017/sounddb';

mongoose.connect(mongooseURI);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'db connection error'));

db.once('open', function() {
  console.log('Mongodb connection is open');
});