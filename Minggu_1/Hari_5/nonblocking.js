const fs = require('fs');
fs.readFile('./file.md',(err,data) => {
    if(err) throw err;
    console.log(data);
});

function lainnya(){
    console.log('Ini fungsi lainnya');
}
lainnya();