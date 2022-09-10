(function(){
'use strict';

  angular.module('MsgApp',[])
  .controller('MsgAppController',MsgAppController);

  MsgAppController.$inject= ['$scope','$filter'];

  function MsgAppController($scope,$filter){
    $scope.name ="Vishal";
    $scope.sayMessage = function(){
      var msg = "asdasdasdasdasdadsasdasd";
      var out = $filter('uppercase')(msg);
      return msg
    };
    $scope.feedstatus = "hungry";
    $scope.btnCaption = "Feed Me";
    var sts = 0;
    $scope.feedme = function(){
      if (sts==0){
        sts=1
        $scope.feedstatus = "happy";
        $scope.btnCaption = "Toggle" ;
      }
      else{
        sts=0;
        $scope.feedstatus = "hungry";
        $scope.btnCaption = "Feed Me"  ;
      }

    };
  }
})();
