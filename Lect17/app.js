(function(){
'use strict';

var shoplist1 =["milk","donuts","chocolate"];
var shoplist2 =[
  {name:"milk", qty:"2"}
  ,{name:"donuts", qty:"200"}
  ,{name:"chocolate", qty:"20"}
];

  angular.module('shoplist',[])
  .controller('ShopListController',ShopListController)

  ShopListController.$inject= ['$scope'];

  function ShopListController($scope){
    $scope.shoplist1 = shoplist1;
    $scope.shoplist2 = shoplist2;

    $scope.addToList= function(){
      var newItem = {name: $scope.newItemName,  qty:  $scope.newItemQty};
      $scope.shoplist2.push(newItem);
    };




  }


})();
