// Callback sebagai injeksi sebuah function
function calculate(param1,param2,callback){
    //default operation
    result = param1 + param2

    //callback is function ?
    if(typeof callback == 'function'){
        result=callback(param1,param2)
    }
    return result
}
//execute
a=calculate(2000,4000,function(x,y){return "$" +(x+y)})
b=calculate(2000,4000,function(x,y){return "Rp"+(x*y)})
console.log(a)
console.log(b)
