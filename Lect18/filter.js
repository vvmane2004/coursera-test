var numberArray  =[1,2,3,4,5,6,7,8,9,10];
console.log("Number Array:",numberArray);

var filteredNumberArray = numberArray.filter(function(value){
  return value > 5;
});

console.log("filtered Number Array : ", filteredNumberArray);
