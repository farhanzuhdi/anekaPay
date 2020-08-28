function* generateSequence(){
    yield 1;
    yield 2;
    yield 3; // jika return, nilai 3 tidak akan terbaca karena tidak di proses
}

let generator = generateSequence();

for(let value of generator){
    console.log(value);
}