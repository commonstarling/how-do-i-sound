angular.module('how-do-i-sound').
controller('AppCtrl', function($http, $scope) {
  var that = this;
  this.results = [];
  // var message = "Hi, my name is Sheena and I am testing out this api. I just completed Hack Reactor last week and I want to make sure that I'm keeping my skills sharp by using different types of technology.";
  // var params = {
  //   text: message
  // };
  this.getData = function() {
    this.results = [];
    var params = {text: $scope.text};
    $scope.text = '';
    $http.get('/apirequest', {params: params}).then(function(response) {
      console.log(response);
      var data = response.data.document_tone.tone_categories[0].tones;
      console.log(data);
      data.forEach(function(tone) {
        that.results.push(`${tone.tone_name} = ${Math.round(tone.score * 100)/100}%`);
      });
    });
  };
})
.component('app', {
  controller: 'AppCtrl',
  templateUrl: '../templates/app.html',
});