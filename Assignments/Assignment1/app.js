(function(){
'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);
  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){
    $scope.LunchItems = "";
    $scope.message = "";
    $scope.color = "auto";
    $scope.bordercolor = "";
    $scope.CheckLunch = function(){
      var items = $scope.LunchItems.split(',');
      var cnt = 0;
      angular.forEach(items, function (value, key) {
                  if(value === undefined || value.trim().length === 0  ){

                  }
                  else{
                      cnt++;
                  }
              });


      console.log(cnt);
      if(items === undefined || $scope.LunchItems.length === 0 || cnt ===0 ) {
        $scope.message = "Please enter data first";
        $scope.color="red";
        $scope.bordercolor = "txtred";
      }
      else if (cnt>= 1 && cnt <=3 ) {
        $scope.message = "Enjoy!";
        $scope.color="green";
        $scope.bordercolor = "txtgreen";
      }
      else {
        $scope.message = "Too Much!";
        $scope.color="green";
        $scope.bordercolor = "txtgreen";
      }
    };

  }
})();
