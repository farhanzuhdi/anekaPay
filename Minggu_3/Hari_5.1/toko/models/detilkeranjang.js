const mongoose = require('mongoose');

var detilkeranjang = new mongoose.Schema({
    id_keranjang: {
        type: Number
    },
    nama_buku: {
        type: String
    },
    harga:{
        type:Number
    },
    jumlah:{
        type:Number
    },
    subtotal:{
        type:Number
    }
});

mongoose.model('detilkeranjang', detilkeranjang);