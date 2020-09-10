const mongoose = require('mongoose');
//koneksi db
mongoose.connect('mongodb://localhost:27017/db_buku', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('Connect db success.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./bukumodel');
require('./usermodel')