function alertA(){
    console.log('A');
    console.log(1);
}
function alertB(){
    console.log('B');
    setTimeout(() => console.log(2),0);
}
function alertC(){
    console.log('C');
    console.log(3);
}
alertA();alertB();alertC();