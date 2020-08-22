function chessboard(){
    var output ='';
    for(var i=1;i <= 8; i++){
        for(var j=1;j <= 8; j++){
            if(i%2==0){
                if(j%2==0){
                    output += ' ';
                }else{
                    output += '#';
                }
            }else{
                if(j%2==0){
                    output += '#';
                }else{
                    output += ' ';
                }
            }
        }
        console.log(output);
        output ='';
    }
}

chessboard();