(function(){
'use strict';

  angular.module('CounterApp',[])
  .controller('CounterController',CounterController)

  CounterController.$inject= ['$scope','$timeout'];

  function CounterController($scope,$timeout){
    $scope.Counter=0;
    // $scope.countUp = function(){
    //   setTimeout(function(){
    //       $scope.Counter+=1;
    //       console.log("incremented");
    //       $scope.$digest();
    //   },2000);
    // };


    // $scope.countUp = function(){
    //     setTimeout(function(){
    //       $scope.$apply(function(){
    //         $scope.Counter+=1;
    //         console.log("incremented");
    //       });
    //     },2000);
    // };

    $scope.countUp = function(){
        $timeout(function(){
          $scope.Counter+=1;
          console.log("incremented");
        },2000);
    };
  }

})();
