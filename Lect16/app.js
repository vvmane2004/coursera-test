(function(){
'use strict';

  angular.module('CounterApp',[])
  .controller('CounterController',CounterController)

  CounterController.$inject= ['$scope','$timeout'];

  function CounterController($scope,$timeout){
    $scope.firstname = "vishal";
    // $scope.fullname = "";

    $scope.showwatchers = function(){
      console.log("# of watchers", $scope.$$watchersCount);
    };

    $scope.setFullname = function(){
      $scope.fullname=$scope.firstname + " " + " mane";
    };

    $scope.logFirstname = function(){
      console.log("First name is ", $scope.firstname);
    };

    $scope.logFullname = function(){
      console.log("full name is ", $scope.fullname);
    };
  }

})();
