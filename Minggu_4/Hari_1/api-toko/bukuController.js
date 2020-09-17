Buku = require('./bukumodel');

exports.index = function (req, res) {
    Buku.get(function (err, bukus) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Data buku",
            buku: bukus
        });
    });
};
exports.add = function (req, res) {
    var buku = new Buku();
    buku.nama = req.body.nama;
    buku.author = req.body.author;
    buku.penerbit = req.body.penerbit;
    buku.tahun_terbit = req.body.tahun_terbit;
    buku.jumlah_halaman = req.body.jumlah_halaman;
    buku.harga = req.body.harga;
    buku.save(function (err) {
        if (err)
            res.json(err);
        else
            res.json({
                message: 'Buku berhasil ditambahkan!',
                data: buku
            });
    });
};
exports.view = function (req, res) {
    Buku.find({nama:req.params.nama}, function (err, buku) {
        if (err)
            res.send(err);
        res.json({
            message: 'Data buku',
            data: buku
        });
    });
};

exports.update = function (req, res) {
    Buku.findOneAndUpdate({ nama: req.params.nama },
        req.body, { new: true }, (err, buku) => {
            if (err)
            res.json(err);
        res.json({
            message: 'Buku diperbarui',
            data: buku
        });
    });
};

exports.delete = function (req, res) {
    Buku.remove({nama: req.params.nama}, function (err) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Buku berhasil dihapus'
        });
    });
};