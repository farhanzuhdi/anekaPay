const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Buku = mongoose.model('buku');
const User = mongoose.model('user');
const Keranjang = mongoose.model('keranjang');
const Detilkeranjang = mongoose.model('detilkeranjang');

router.get('/home', (req, res) => {
    req.session;
    if(req.session.level=='user'){
        Buku.find((err, docs) => {
            if (!err) {
                res.render("homeUser", {
                    message: req.session.username ,
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
    }else{
        res.redirect('/user/logout');
    }
});

// router.get('/home', (req, res) => {
//         res.redirect('/buku/listapi',(err, docs)=>{
//             if (!err) {
//                 res.render("homeUser", {
//                     message: "user" ,
//                     list: docs
//                 });
//             }
//             else {
//                 console.log('Gagal Menampilkan Buku :' + err);
//                     res.render('error',{
//                     message:'gagal menampilkan halaman index'
//                     });
//                 }
//         })
// });

router.get('/listapi',(req, res)=>{
    User.find({level:'user'},(err, buku) =>{
        if(err){
        res.json({
            status: "error",
            message: err
        })
        }
        res.json({
            data : buku
        })
    })
})

router.get('/beli/:id',(req,res)=>{
    Buku.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("tambahkeranjang", {
                viewTitle: "Beli Buku",
                buku: doc
            });
        }else{
            console.log('Terjadi kesalahan saat tambah data : ' + err);
            res.render('error',{
                message:'data tidak ditemukan'
            });
        }
    });
})

router.post('/tambah',(req,res)=>{
    req.session;
    if(!req.session.cart){
        req.session.cart = []; 
    }
    req.session.cart.push({
        username:req.session.username,
        id_buku:req.body._id,
        buku:req.body.nama,
        harga:req.body.harga,
        jumlah:req.body.jumlah,
        subtotal:req.body.harga*req.body.jumlah
    });
    res.redirect('/user/home');
})

router.get('/keranjang',(req,res)=>{
    req.session;
    if(req.session.level=='user'){
    if(!req.session.cart){
        res.render('error',{
            message:'keranjang kosong'
        });
    }else{
        var harga1 = 0
        var harga2 = 0
        for (let i = 0; i < req.session.cart.length; i++) {
        var harga = req.session.cart[i].harga;
        var jumlah = req.session.cart[i].jumlah
        harga1 = harga * jumlah
        harga2 = harga2+harga1
        }
        res.render('keranjang',{
            keranjang: req.session.cart,
            message: req.session.username,
            total: harga2
      })
    } 
    }else{
    res.redirect('/user/logout');
    }
})

router.get('/profil',(req,res)=>{
    req.session;
    if(req.session.level=='user'){
    User.findById(req.session._id, (err, doc) => {
        res.render("userprofil", {
            username: req.session.username,
            password: req.session.password
       });
  
    });
    }else{
    res.redirect('/user/logout');
    }
})

router.get('/keranjang/hapus/:id', (req, res) => {
    if(!req.session.cart){
        req.session.cart = [];
    }
        var id = req.params.id
        var cart = req.session.cart.reduce((acc,c)=>{
        if(c.buku !== id){
            acc.push(c)
    }else{   
    }
    return acc;
    }, []);
        req.session.cart = cart;
      res.redirect('/user/keranjang');
});

router.get('/ubahkeranjang/:id', (req, res) => {
    var c = req.session.cart.filter((cart)=>{
        return cart.buku == req.params.id
    })
    res.render('ubahkeranjang',{
        viewTitle: "Ubah Keranjang",
        d : c
        })
});

router.post('/ubah',(req,res)=>{
    req.session;
    if(!req.session.cart){
        req.session.cart = [];
    }

    var buku = req.body.buku
    var ubah = req.session.cart.reduce((acc,c)=>{
    if(c.buku !== buku){
        acc.push(c)
    }else{   
    }
    return acc;
    }, []);
        req.session.cart = ubah;

    req.session.cart.push({
        username:req.session.username,
        id_buku:req.body.id_buku,
        buku:req.body.buku,
        harga:req.body.harga,
        jumlah:req.body.jumlah,
        subtotal:req.body.harga*req.body.jumlah
    })
    res.redirect('/user/keranjang');
})

router.get('/cekout',(req,res)=>{
    req.session;
    var harga1 = 0
    var harga2 = 0
    var id_keranjang = Math.random();
    for(let i =0;i < req.session.cart.length; i++){
        var detil = new Detilkeranjang();
        detil.id_keranjang = id_keranjang
        detil.nama_buku = req.session.cart[i].buku
        detil.harga = req.session.cart[i].harga
        detil.jumlah = req.session.cart[i].jumlah
        detil.subtotal = req.session.cart[i].subtotal
        detil.save()
        
        var harga = req.session.cart[i].harga;
        var jumlah = req.session.cart[i].jumlah
        harga1 = harga * jumlah
        harga2 = harga2+harga1
    }
    var keranjang = new Keranjang();
    keranjang.id_keranjang = id_keranjang
    keranjang.pembeli = req.session.username
    keranjang.total = harga2
    keranjang.tanggal = Date.now()
    keranjang.save()

    req.session.cart = [];
    res.redirect('/user/home')
})

router.get('/history',(req,res)=>{
    req.session;
    Keranjang.find({pembeli:req.session.username}, (err, doc) => {
        console.log(doc)
        if (!err) {
            res.render("history", {
                message: req.session.username,
                history: doc
            });
        }else{
            console.log('Terjadi kesalahan saat tambah data : ' + err);
            res.render('error',{
                message:'data tidak ditemukan'
            });
        }
    });
})

router.get('/detil/:id',(req,res)=>{
    req.session;
    Detilkeranjang.find({id_keranjang:req.params.id}, (err, doc) => {
        if (!err) {
            res.render("detilkeranjang", {
                message: req.session.username,
                history: doc
            });
        }else{
            console.log('Terjadi kesalahan saat tambah data : ' + err);
            res.render('error',{
                message:'data tidak ditemukan'
            });
        }
    });
})

router.get('/logout',(req,res)=>{
    req.session.destroy();
    res.redirect('/login');
})

module.exports = router;