const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const session = require('express-session');
const User = mongoose.model('user');
//var sess;

router.get('/', (req, res) => {
    res.render("login", {
        viewTitle: "Login"
    });
});

router.get('/register', (req, res) => {
    res.render("register", {
        viewTitle: "Register"
    });
});

router.post('/auth', (req, res) => {
    User.findOne({username:`${req.body.username}`,password:`${req.body.password}`},(err,doc) =>{
        if(!err){
            if(doc!=null){
                //sess = req.session;
                req.session.id = doc._id;
                req.session.username = doc.username;
                req.session.level = doc.level;
                if(doc.level=='admin'){
                    res.redirect('/admin/home');
                }else{
                    res.redirect('/user/home');
                }
            }else{
                res.render('error',{
                    message:'Username atau Password Salah'
                });
            }
        }else{
            console.log('Terjadi kesalahan saat login : ' + err);
            res.render('error',{
            message:'Ada kesalahan data'
        });}
    })
});

router.post('/register', (req, res) => {
    var user = new User();
    user.username = req.body.username;
    user.password = req.body.password;
    user.level = "user";
    user.save((err, doc) => {
        if (!err)
            res.redirect('/login');
        else {
            console.log('Terjadi kesalahan saat tambah data : ' + err);
            res.render('error',{
                message:'gagal register'
            });
        }
    });
});

module.exports = router;