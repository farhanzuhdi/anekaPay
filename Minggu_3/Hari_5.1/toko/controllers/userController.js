const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Buku = mongoose.model('buku');
var sess;


router.get('/home', (req, res) => {
    sess = req.session;
    if(sess.level=='user'){
        Buku.find((err, docs) => {
            if (!err) {
                res.render("homeUser", {
                    message: sess.username ,
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
        res.redirect('/login');
    }
});

router.get('/logout',(req,res)=>{
    req.session.destroy();
    res.redirect('/login');
})

module.exports = router;