class User {
    constructor(name,age) {
      this.name = name;
      this.age = age;
    }

    set age(value){
        if(value < 20){
            console.log(" Nama       : "+this.name);
            console.log(" Umur       : "+value);
            console.log(" Keterangan : Dibawah Umur");
            return;
        }else{
            console.log(" Nama       : "+this.name);
            console.log(" Umur       : "+value);
            console.log(" Keterangan : Dewasa");
            return;
        }
    }
  }
  
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Nama : ', (nama) => {
    rl.question('Umur : ', (umur) => {
        console.log('===========');
        console.log('---Data----');
        let user = new User(nama,umur);
        rl.close();
    });
});