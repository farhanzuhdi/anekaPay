var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evenNumbers = [];

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    evenNumbers.push(numbers[i]);
  }
}

console.log(evenNumbers); //create an empty array evenNumbers

const even = n => n % 2 == 0;
const listOfNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(listOfNumbers.filter(even)); // iterate over the numbers array

var filterArray = function(x, coll) {
    var resultArray = [];
  
    for (var i = 0; i < coll.length; i++) {
      if (coll[i] < x) {
        resultArray.push(coll[i]);
      }
    }
  
    return resultArray;
  }
  
  console.log(filterArray(3, [10, 9, 8, 2, 7, 5, 1, 3, 0])); // push the even numbers to the evenNumbers array