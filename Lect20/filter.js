var numberArray  =[1,2,3,4,5,6,7,8,9,10];
console.log("Number Array:",numberArray);

function above5(value){
  return value >5
}
var filteredNumberArray = numberArray.filter(above5);

console.log("filtered Number Array : ", filteredNumberArray);

var shoplist1 =["milk","donuts","chocolate", "milk biscuit"];

console.log("Shop list", shoplist1);

var searchValue = "milk";

function containsFilter(value){
  return value.indexOf(searchValue) !== -1;
}

var Shoplistfiltered = shoplist1.filter(containsFilter);
console.log(Shoplistfiltered);
