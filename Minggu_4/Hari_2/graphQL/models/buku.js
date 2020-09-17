const mongoose = require("mongoose")

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

module.exports = mongoose.model("buku", bukuSchema)