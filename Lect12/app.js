(function(){
'use strict';

  angular.module('MsgApp',[])
  .controller('MsgAppController',MsgAppController)
  .filter('custom', CustomFilterFactory);

  MsgAppController.$inject= ['$scope','$filter','customFilter'];

  function MsgAppController($scope,$filter,customFilter){
    $scope.name ="Vishal";
    $scope.sayMessage = function(){
      return "asdasdasdasdasdasd";
    };
    $scope.feedstatus = "hungry";
    $scope.btnCaption = "Feed Me";
    $scope.cost=.46;
    var sts = 0;
    $scope.feedme = function(){
      var result;
      var caption;
      if (sts==0){
        sts=1
        result = $filter('uppercase')("happy");
        result = customFilter(result, "abc");
        caption = "Toggle" ;
      }
      else{
        sts=0;
        result = $filter('uppercase')("hungry");
        caption = "Feed Me" ;
      }
      $scope.feedstatus =result;
      $scope.btnCaption = caption;

    };

  }

  function CustomFilterFactory(){
    return function (input, arg1){
      input = input || "";
      input = input.replace("HAPPY","full") + arg1;
      return input;
    }
  }
})();
