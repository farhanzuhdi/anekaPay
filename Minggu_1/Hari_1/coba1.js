function triangleLooping() {
    var k= '#';
    var output = '';
    for (var i = 1; i <= 7; i++) {
        for (var j = 1; j <= i; j++) {
            output += k;
        }
        console.log(output);
        output = '';
    }
}

triangleLooping();