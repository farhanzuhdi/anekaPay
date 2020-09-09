const mongoose = require('mongoose');

//model buku
var bukuSchema = new mongoose.Schema({
    nama: {
        type: String
    },
    author: {
        type: String
    },
    penerbit: {
        type: String
    },
    tahun_terbit: {
        type: Number
    },
    jumlah_halaman:{
        type: Number
    }
});

mongoose.model('buku', bukuSchema);