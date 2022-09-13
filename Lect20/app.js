(function(){
'use strict';

  angular.module('ShopApp',[])
  .controller('ShoppingListAddController',ShoppingListAddController)
  .controller('ShopListController',ShopListController)
  .service('ShopListService',ShopListService);

  ShoppingListAddController.$inject= ['ShopListService'];
  function ShoppingListAddController(ShopListService){
    var itemAdder = this;

    itemAdder.itemName = "";
    itemAdder.itemQty="";

    itemAdder.addItem=function(){
      ShopListService.addItem(itemAdder.itemName, itemAdder.itemQty);
    }
  }

ShopListController.$inject=['ShopListService'];
function ShopListController(ShopListService){
  var showlist = this;
  showlist.items = ShopListService.getItems();

  showlist.removeItem = function (inx){
    ShopListService.removeItem(inx);
  };
}

function ShopListService(){
  var service = this;
  var items  =[];

  service.addItem=function (iname, iqty){
    var item = {
      itemName: iname,
      itemQty:iqty
    };
    items.push(item);
  };

  service.getItems = function(){
    return items;
  };

  service.removeItem = function(inx){
      items.splice(inx,1);
  };

}

})();
