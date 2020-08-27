function bulatanmap(inp){
let angkamap = [1,2,3]
let bulatan2 = angkamap.map(function(num){
return num * inp;});
console.log("Contoh Map : ");
console.log(angkamap);
console.log("Setelah diberi fungsi map pembulatan "+inp+" :")
console.log(bulatan2);
console.log("");
}

function reducenum(){
let numbers = [1,2,3,4,5];
let totalNumber = numbers.reduce(function(total, number){
return total + number;
}, 0);
console.log("Contoh Reduce : ");
console.log(numbers);
console.log("Setelah diberi fungsi reduce :");
console.log(totalNumber);
console.log("");
}

function filnum(){
let numbers = [1,2,3,4,5];
let newNumbers = numbers.filter(function(number){
return (number % 2 !== 0);
});
console.log("Contoh Filter : ");
console.log(numbers);
console.log("Setelah difilter tampil angka ganjil :");
console.log(newNumbers);
console.log("");
}

function pushnum(inp){
let angkapush= [ 1 , 2 , 3 , 4 , 5 ] ;
console.log("Contoh Push : ");
console.log(angkapush);
angkapush.push(inp);
console.log("Setelah dipush nilai "+inp+" :");
console.log(angkapush);
console.log("");
}

function popnum(){
let angkapop= [ 1 , 2 , 3 , 4 , 5 ] ;
console.log("Contoh Pop :");
console.log(angkapop);
angkapop.pop();
console.log("Seteleh dipop :");
console.log(angkapop);
console.log("");
}

function unnum(inp){
let angkaun= [ 2 , 3 , 4 , 5 ] ;
console.log("Contoh Unshift :");
console.log(angkaun);
angkaun.unshift(inp);
console.log("Setelah diunshift nilai "+inp+" :");
console.log(angkaun);
console.log("");
}

function shiftnum(){
let angkashift= [ 1 , 2 , 3 , 4 , 5 ];
console.log("Contoh Shift :");
console.log(angkashift);
angkashift.shift();
console.log("Setelah dishift :");
console.log(angkashift);
}

bulatanmap(4);
reducenum();
filnum();
pushnum(7);
popnum();
unnum(0);
shiftnum();