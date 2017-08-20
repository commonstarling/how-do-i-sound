angular.module('how-do-i-sound').
controller('AppCtrl', function($http) {
  var that = this;
  this.results = '';
  var message = "Hi, my name is Sheena and I am testing out this api. I just completed Hack Reactor last week and I want to make sure that I'm keeping my skills sharp by using different types of technology.";
  var params = {
    text: message
  };
  this.getData = function() {
    $http.get('/apirequest', {params: params}).then(function(response) {
      that.results = response.data;
    });
  };
})
.component('app', {
  controller: 'AppCtrl',
  templateUrl: '../templates/app.html',
});