function smaller(number) {
    return number < this;
  }
  
  function filterArray(x, listOfNumbers) {
    return listOfNumbers.filter(smaller, x);
  }
  
  let numbers = [10, 9, 8, 2, 7, 5, 1, 3, 0];
  
  console.log(filterArray(3, numbers));


  let people = [
    { name: "TK", age: 26 },
    { name: "Kaio", age: 10 },
    { name: "Kazumi", age: 30 }
  ];
  const olderThan21 = person => person.age > 21;
    const overAge = people => people.filter(olderThan21);
    console.log(overAge(people));