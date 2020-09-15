const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('user');
//var sess;


router.get('/home', (req, res) => {
  //  sess = req.session;
    if(req.session.level=='admin'){
        res.render("homeAdmin", {
            message: req.session.username        
        });
    }else{
        res.redirect('/admin/logout');
    }
});

router.get('/logout',(req,res)=>{
    req.session.destroy();
    res.redirect('/login');
})

router.get('/listuser', (req, res) => {
    if(req.session.level=='admin'){
    User.find({level:'user'},(err, docs) => {
        if (!err) {
            res.render("listUser", {
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
    res.redirect('/admin/logout');
}
});

router.get('/ubahuser/:id', (req, res) => {
    User.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("editUser", {
                viewTitle: "Ubah Data User",
                user: doc
            });
        }else{
            console.log('Terjadi kesalahan saat tambah data : ' + err);
            res.render('error',{
                message:'data tidak ditemukan'
            });
        }
    });
});

router.post('/ubah', (req, res) => {
    User.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect('/admin/listuser'); }
        else {
            console.log('Gagal ubah data : ' + err);
            res.render('error',{
                message:'gagal ubah data'
            });
        }
    });
});


router.get('/hapususer/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/admin/listuser');
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