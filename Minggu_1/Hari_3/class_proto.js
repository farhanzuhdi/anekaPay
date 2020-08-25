function Jenis(className) {
    this.className = className;
}

Jenis.prototype.getClass = function(){
    return 'Jenis : '+this.className;
};

function Nama(name,klasi){

    Jenis.call(this,klasi);

    this.name = name;
}

Nama.prototype = Object.create(Jenis.prototype);

Nama.prototype.constructor = Nama;

Nama.prototype.getName = function(){
    return 'Nama : '+this.name;
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Jenis : ', (klasifi) => {
    rl.question('Nama : ', (nama) => {
        console.log('===========');
        console.log('---Hewan---');
        var data = new Nama(nama,klasifi);

        console.log(data.getClass());
        console.log(data.getName());
        rl.close();
    });
});