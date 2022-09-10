(function(){
'use strict';

  angular.module('NameCalculator',[])
  .controller('NameCalculatorController',function($scope,$filter){
    $scope.name ="";
    $scope.TotalValue = 0;
    $scope.displaynumeric = function(string){
      var totalnamevalue = CalcTotalValue($scope.name);
      $scope.TotalValue = totalnamevalue;
    };
    $scope.upper = function (){
      var upCase = $filter('uppercase');
      $scope.name = upCase($scope.name);
    };

    function CalcTotalValue(string){
      var totalStrvalue = 0;
      for (var i = 0; i <string.length; i++){
        totalStrvalue+=string.charCodeAt(i);
      }
      return totalStrvalue;
    }
  });
})();
