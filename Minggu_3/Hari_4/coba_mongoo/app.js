const mongoose = require('mongoose');
const { program } = require('commander');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console,'Koneksi error'));
db.once('open', function(){
});

const userSchema = new mongoose.Schema({
    nama: String,
    usia: Number,
    alamat: String
});

const Users = mongoose.model('users', userSchema);

program
  .option('-n, --nama <nama>')
  .option('-in, --inama <inama>')
  .option('-us, --usia <usia>')
  .option('-a, --alamat <alamat>')
  .option('-t,--tambah')
  .option('-u,--ubah')
  .option('-h,--hapus')
  .option('-l,--lihat');
 
program.parse(process.argv);
 
if(program.tambah && program.nama && program.usia && program.alamat){
const add=new Users({nama:`${program.nama}`,usia:`${program.usia}`,alamat:`${program.alamat}`});
add.save()
console.log('Tambah Berhasil');
}else if(program.ubah,program.nama,program.inama,program.usia,program.alamat){
    Users.updateOne({nama:`${program.nama}`},
    {$set:{nama:`${program.inama}`,usia:`${program.usia}`,alamat:`${program.alamat}`}},
    (err,results)=>{
        console.log('Ubah berhasil');
        db.close();
    })
}else if(program.hapus,program.nama){
    Users.deleteOne({nama:`${program.nama}`},(err,results)=>{
        console.log('Hapus Berhasil');
        db.close();
    })
}else if(program.lihat){
    Users.find((err,results)=>{
    console.log('Tampil Data :')
    console.log(results)
    db.close();
    })
}