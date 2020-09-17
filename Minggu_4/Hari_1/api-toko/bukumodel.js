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
    },
    harga:{
        type: Number
    }
});

var Buku = module.exports = mongoose.model('buku', bukuSchema);
module.exports.get = function (callback, limit) {
    Buku.find(callback).limit(limit);
}