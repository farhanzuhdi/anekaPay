var kamus_indo = new Map([
    ['kuning','yellow'],
    ['merah','red'],
    ['hitam','black']
]);

let kamus_ing = new Map([
    ['yellow','kuning'],
    ['red','merah'],
    ['black','hitam']
]);

let now = new Date();
console.log( now );

function indo (kata) {
    console.log(kamus_indo.get(kata));
}

function tambah_indo(kata_indo,kata_inggris) {
    kamus_indo.set(kata_indo,kata_inggris);
}

function inggris(kata) {
    console.log(kamus_ing.get(kata));
}

function tambah_ing(kata_ing,kata_ind) {
    kamus_ing.set(kata_ing,kata_ind)
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Pilih Aksi');
console.log('1. kamus indo->ing');
console.log('2. kamus ing->indo');
console.log('3. tambah kamus indonesia');
console.log('4. tambah kamus inggris');
rl.question('Pilih = ', (answer) => {
  if(`${answer}`==1){
    const r1 = require('readline');

    const ip1 = r1.createInterface({
      input: process.stdin,
      output: process.stdout
    });
        ip1.question('Masukkan kata : ', (ans) => {
        indo(`${ans}`);

        ip1.close();
      });
  }else if(`${answer}`==2){
    const r2 = require('readline');

    const ip2 = r2.createInterface({
      input: process.stdin,
      output: process.stdout
    });
        ip2.question('Masukkan kata : ', (ans) => {
        inggris(`${ans}`);

        ip2.close();
      });
  }else if(`${answer}`==3){
        //
  }else if(`${answer}`==4){
      //
  }

  rl.close();
});