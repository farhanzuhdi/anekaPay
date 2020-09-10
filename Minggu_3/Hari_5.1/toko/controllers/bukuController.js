const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Buku = mongoose.model('buku');

//tampil buku
router.get('/list', (req, res) => {
    Buku.find((err, docs) => {
        if (!err) {
            res.render("list", {
                list: docs
            });
        }
        else {
            console.log('Gagal Menampilkan Buku :' + err);
            res.render('error',{
                message:'gagal menampilkan halaman index'
            });
        }
    });
});

//tampil form tambah
router.get('/add', (req, res) => {
    res.render("tambah", {
        viewTitle: "Tambah Buku"
    });
});

//tambah buku
router.post('/tambah', (req, res) => {
    var buku = new Buku();
    buku.nama = req.body.nama;
    buku.author = req.body.author;
    buku.penerbit = req.body.penerbit;
    buku.tahun_terbit = req.body.tahun_terbit;
    buku.jumlah_halaman = req.body.jumlah_halaman;
    buku.save((err, doc) => {
        if (!err)
            res.redirect('/buku/list');
        else {
            console.log('Terjadi kesalahan saat tambah data : ' + err);
            res.render('error',{
                message:'gagal menambahkan data'
            });
        }
    });
});

//tampil form ubah
router.get('/:id', (req, res) => {
    Buku.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("ubah", {
                viewTitle: "Ubah Data Buku",
                buku: doc
            });
        }else{
            console.log('Terjadi kesalahan saat tambah data : ' + err);
            res.render('error',{
                message:'data tidak ditemukan'
            });
        }
    });
});

//ubah data buku
router.post('/ubah', (req, res) => {
    Buku.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect('/buku/list'); }
        else {
            console.log('Gagal ubah data : ' + err);
            res.render('error',{
                message:'gagal ubah data'
            });
        }
    });
});

//hapus buku
router.get('/hapus/:id', (req, res) => {
    Buku.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/buku/list');
        }
        else { 
            console.log('Gagal hapus :' + err); 
            res.render('error',{
            message:'gagal ubah data'
        });        
    }
    });
});

module.exports = router;