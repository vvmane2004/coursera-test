(function(){
'use strict';

  angular.module('myfirstApp',[])
  .controller('MyFirstController',function($scope){
    $scope.name ="Vishal Mane";
    $scope.sayHello = function (){return "Hello";};
  });
})();
