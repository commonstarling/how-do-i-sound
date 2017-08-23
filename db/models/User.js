var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var db = require ('../config.js');
var Message = ('./Message.js');

var UserSchema = new Schema({
  user_id: {
    type: String,
    required: true,
    index: true
  },
  first_name: String,
  last_name: String,
  email: String,
  avatar: String,
  saved_messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }]
});

var User = mongoose.model('User', UserSchema);

module.exports = User;