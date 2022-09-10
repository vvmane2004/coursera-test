(function(){
'use strict';

  angular.module('CounterApp',[])
  .controller('CounterController',CounterController)

  CounterController.$inject= ['$scope'];

  function CounterController($scope){
    $scope.onceCounter=0;
    $scope.Counter=0;
    $scope.name="abc";
    $scope.ShowNumberofWatchers = function(){
      console.log($scope.$$watchersCount);
    };

    $scope.countOnce = function(){
      $scope.onceCounter=1;
    };

    $scope.countUp = function(){
      $scope.Counter+=1;
    };

    $scope.$watch(function(){
      console.log("digext loop fired");
    })

    // $scope.$watch('onceCounter',function(newvalue, oldvalue){
    //     console.log("old value :", oldvalue);
    //     console.log("new value :", newvalue);
    // });
    //
    // $scope.$watch('Counter',function(newvalue, oldvalue){
    //     console.log("old value :", oldvalue);
    //     console.log("new value :", newvalue);
    // });
  }


})();
