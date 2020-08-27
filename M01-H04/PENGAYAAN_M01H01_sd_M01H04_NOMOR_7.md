arrow function memungkingkan kita untuk menulis sintaks fungsi yang lebih pendek.

sebelum :
    hello = function(){
        return "Hello World!";
    }

dengan arrow function :
    hello = () => {
        return "Hello World!";
    }

arrow function return value by default :
    hello = () => "Hello World!";

arrow function dengan parameter :
    hello = (val) => "Hello "+val;

arrow function tanpa tanda kurung :
    hello = val => "Hello "+val;