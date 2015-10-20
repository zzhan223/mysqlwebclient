angular.module('app',["xeditable"])
.controller('queryController', function($scope, $http){
  $scope.query={
    text:''
  };

  $scope.test='holy shit'

  $scope.tables = [];
  $scope.headers = $scope.tables;
  $scope.submit = function(){
    $http.post('/click', {stuff: $scope.query.text })
    .then(function(res){
      $scope.tables=res.data;
      console.log($scope.headers);
    }, function(res){
      console.log('promise 2',res);
    })
  };

  $scope.change = function(){
    console.log($scope.tables);
  }


})