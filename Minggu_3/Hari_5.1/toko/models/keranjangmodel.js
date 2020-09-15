const mongoose = require('mongoose');

var keranjangSchema = new mongoose.Schema({
    id_keranjang:{
        type:Number,
        unique:true
    },
    pembeli: {
        type: String
    },
    total: {
        type: Number
    },
    tanggal: {
        type: Date
    }
});

mongoose.model('keranjang', keranjangSchema);