var people = [
    { name: "TK", age: 26 },
    { name: "Kaio", age: 10 },
    { name: "Kazumi", age: 30 }
  ];
  
  var peopleSentences = [];
  
  for (var i = 0; i < people.length; i++) {
    var sentence = people[i].name + " is " + people[i].age + " years old";
    peopleSentences.push(sentence);
  }

/* const makeSentence = person => `${person.name} is ${person.age} years old`;
const peopleSentences = people => people.map(makeSentence);
peopleSentences(people);  declarative */
  
  console.log(peopleSentences);

var values = [1, 2, 3, -4, 5];

for (var i = 0; i < values.length; i++) {
  values[i] = Math.abs(values[i]);
}

console.log(values)