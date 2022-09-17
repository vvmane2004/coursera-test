(function(){
'use strict';

  angular.module('ShopApp',[])
  .controller('ShoppingListAddController1',ShoppingListAddController1)
  .controller('ShoppingListAddController2',ShoppingListAddController2)
  .factory('ShopListFactory',ShopListFactory);

  ShoppingListAddController.$inject= ['ShopListFactory'];
  function ShoppingListAddController1(ShopListFactory){
    var itemAdder = this;

    var ShopList = ShopListFactory();
    itemAdder.items = ShopList.getItems();
    itemAdder.itemName = "";
    itemAdder.itemQty="";

    itemAdder.addItem=function(){
      ShopList.addItem(itemAdder.itemName, itemAdder.itemQty);
    };

    itemAdder.removeItem = function(itemIndex){
      ShopList.removeItem(itemIndex);
    };
  }

ShoppingListAddController2.$inject=['ShopListFactory'];
function ShoppingListAddController2(ShopListFactory){
  var itemAdder = this;

  var ShopList = ShopListFactory(3);
  itemAdder.items = ShopList.getItems();
  itemAdder.itemName = "";
  itemAdder.itemQty="";

  itemAdder.addItem=function(){
    try {
        ShopList.addItem(itemAdder.itemName, itemAdder.itemQty);
    }catch(error){
      itemAdder.errorMessage = error.message;
    }
  };

  itemAdder.removeItem = function(itemIndex){
    ShopList.removeItem(itemIndex);
  };
}

function ShopListService(maxItems){
  var service = this;
  var items  =[];

  service.addItem=function (iname, iqty){
    if ((maxItems ===undefined) ||
        (maxItems !== undefined) && (items.length < maxItems)){
          var item = {
            itemName: iname,
            itemQty:iqty
          };
          items.push(item);
    }
    else{
      throw new Error("Max items " + maxItems +" reached.");
    }

  };

  service.getItems = function(){
    return items;
  };

  service.removeItem = function(inx){
      items.splice(inx,1);
  };

}

function ShopListFactory(){
  var factory = function (maxItems){
    return new ShopListService(maxItems);
  }
  return factory;
}

})();
