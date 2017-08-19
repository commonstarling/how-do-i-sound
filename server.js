var express = require('express');
var app = express();
var credentials = require('./config/APIcredentials');
var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
var tone_analyzer = new ToneAnalyzerV3({
  username: credentials.username,
  password: credentials.password,
  version_date: '2016-05-19'
});

var message = "Hi, my name is Sheena and I am testing out this api. I just completed Hack Reactor last week and I want to make sure that I'm keeping my skills sharp by using different types of technology.";
var params = {
  text: message
};

app.get('/', function(req, res) {
  tone_analyzer.tone(params, function(error, response) {
  if (error)
    console.log('error:', error);
  else
    res.send(JSON.stringify(response));
  });
});

app.listen(3000);
console.log('Server listening on port 3000');