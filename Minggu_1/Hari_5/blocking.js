const fs = require('fs');
const data = fs.readFileSync('./file.md');
//blocks here until file read
console.log(data);

function lainnya(){
    console.log('Ini fungsi lainnya');
}
lainnya();