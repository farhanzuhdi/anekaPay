const fs = require('fs');
function AsyncrounousReadFileContentMustUseCallback(filename, callback) {
    return fs.readFile(filename, function read(err, data) {
        if (err) {
            throw err;
        }
        const content = data;
        callback(content)
    });
    function processFile(content) {
        console.log(content);
    }
}

function writeFileContent(filename, contents, cb) { 
    fs.writeFile(filename, contents, function (err) {
        if (err) return console.log(err);
        cb()
    });
}

AsyncrounousReadFileContentMustUseCallback("./a.md", function (a) {
    AsyncrounousReadFileContentMustUseCallback("./b.md", function (b) {
        AsyncrounousReadFileContentMustUseCallback("./c.md", function (c) {
            writeFileContent('./result.md', a + b + c, function () {
                console.log("we are done");
            })
        })
    })
})
// let a = fs.readFileSync("a.md");
// let b = fs.readFileSync("b.md");
// let c = fs.readFileSync("c.md");
// fs.writeFileSync("result.md", a + b + c);
// console.log("We are done");