var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var db = require ('../config');

var MessageSchema = new Schema({
  text: String,
  date: { type: Date, default: Date.now },
  tone: {
    angry: Number,
    disgusted: Number,
    fearful: Number,
    joyful: Number,
    sad: Number,
    analytical: Number,
    confident: Number,
    tentative: Number,
    "open-minded": Number,
    conscientious: Number,
    extraverted: Number,
    agreeable: Number
  }
});

var Message = mongoose.model('Message', MessageSchema);

module.exports = Message;