const { buildSchema } = require("graphql")

module.exports = buildSchema(`

  type Buku {
    _id: ID!
    nama: String!
    author: String!
    penerbit: String!
    tahun_terbit: Int
    jumlah_halaman: Int
    harga: Int
  }

  type Hasil {
      hasil : String
  }

  input BukuInput {
    nama: String!
    author: String!
    penerbit: String!
    tahun_terbit: Int
    jumlah_halaman: Int
    harga: Int
  }

  input NamaBuku {
      nama: String!
  }

  type Query {
    buku:[Buku!]
    addBuku(buku:BukuInput): Buku
    cari(namabuku:NamaBuku): [Buku!]
    hapus(namabuku:NamaBuku): Hasil
    editBuku(namabuku:NamaBuku,buku:BukuInput): Hasil
  }

  schema {
    query: Query
  }
`)