const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const readline = require("readline");

const url = 'mongodb://localhost:27017';
const dbName = 'db_test';
const client = new MongoClient(url);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("===menu===");
console.log("1. Tampil data");
console.log("2. Tambah data");
console.log("3. Ubah data");
console.log("4. Hapus data");
rl.question("Pilih : ", function(pilih) {
    if(pilih==1){
        client.connect(function(err) {
            assert.equal(null, err);
            const db = client.db(dbName);
                  findDocuments(db, function(){
                  client.close(); 
              });
              });
              rl.close();
    }else if(pilih==2){
        rl.question("Nama : ", function(inama) {
            rl.question("Umur : ", function(iumur) {
                rl.question("Alamat : ", function(ialamat) {
                    client.connect(function(err) {
                        assert.equal(null, err);
                        const db = client.db(dbName);
                              insertDocuments(db, inama, iumur, ialamat, function(){
                              client.close(); 
                          });
                          });
                          rl.close();
                });
            });
        });
    }else if(pilih==3){
        rl.question("Masukkan nama yang akan diubah :", function(nama){
            rl.question("Nama : ", function(inama) {
                rl.question("Umur : ", function(iumur) {
                    rl.question("Alamat : ", function(ialamat) {
                        client.connect(function(err) {
                            assert.equal(null, err);
                            const db = client.db(dbName);
                                  updateDocument(db, nama, inama, iumur, ialamat, function(){
                                  client.close(); 
                              });
                              });
                              rl.close();
                            });
                        });
                    });
                });
    }else if(pilih==4){
        rl.question("Masukkan nama yang akan dihapus :", function(nama){
            client.connect(function(err) {
                assert.equal(null, err);
                const db = client.db(dbName);
                      removeDocument(db, nama, function(){
                      client.close(); 
                  });
                  });
                  rl.close();
        });
    }
});


const findDocuments = function(db, callback) {
    const collection = db.collection('user');
    collection.find({}).toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("Data saat ini :");
      console.log(docs)
      callback(docs);
    });
  }

  const insertDocuments = function(db, nama, umur, alamat, callback) {
    const collection = db.collection('user');
    collection.insertOne(
      {nama : nama, umur : umur, alamat : alamat}
    , function(err, result) {
      assert.equal(err, null);
      assert.equal(1, result.result.n);
      assert.equal(1, result.ops.length);
      console.log("Tambah Berhasil");
      callback(result);
    });
  }

  const updateDocument = function(db, nama, namabaru, umur, alamat,  callback) {
    const collection = db.collection('user');
    collection.updateOne({ nama : nama }
      , { $set: { nama : namabaru, umur: umur, alamat: alamat} }, function(err, result) {
      assert.equal(err, null);
      assert.equal(1, result.result.n);
      console.log("Ubah Berhasil");
      callback(result);
    });  
  }

  const removeDocument = function(db, nama, callback) {
    const collection = db.collection('user');
    collection.deleteOne({ nama : nama }, function(err, result) {
      assert.equal(err, null);
      assert.equal(1, result.result.n);
      console.log("Hapus Berhasil");
      callback(result);
    });    
  }