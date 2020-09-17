const Buku = require("../models/buku")

module.exports = {
  buku: async () => {
    try {
      const tampilbuku = await Buku.find()
      return tampilbuku.map(buku => {
        return {
          ...buku._doc,
        }
      })
    } catch (error) {
      throw error
    }
  },

  cari: async args => {
    try {
        const cari = args.namabuku
      const caribuku = await Buku.find(cari)
      return caribuku.map(buku => {
        return {
          ...buku._doc,
        }
      })
    } catch (error) {
      throw error
    }
  },

  hapus: async args => {
    try {
        const cari = args.namabuku
      await Buku.remove(cari)
      return { hasil:"Success" }
    } catch (error) {
      throw error
    }
  },

  addBuku: async args => {
    try {
      const { nama, author, penerbit, tahun_terbit, jumlah_halaman, harga } = args.buku
      const buku = new Buku({
        nama,
        author,
        penerbit,
        tahun_terbit,
        jumlah_halaman,
        harga
      })
      const bukuBaru = await buku.save()
      return { ...bukuBaru._doc, _id: bukuBaru.id }
    } catch (error) {
      throw error
    }
  },

  editBuku: async args => {
    try {
      const cari = args.namabuku
      const { nama, author, penerbit, tahun_terbit, jumlah_halaman, harga } = args.buku
      await Buku.findOneAndUpdate( cari, { 
          nama : nama, 
          author : author, 
          penerbit : penerbit, 
          tahun_terbit : tahun_terbit, 
          jumlah_halaman : jumlah_halaman, 
          harga : harga })
      return { hasil:"Success" }
    } catch (error) {
      throw error
    }
  },

}