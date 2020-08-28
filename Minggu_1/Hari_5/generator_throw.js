function* gen(){
    try{
        let result = yield "2 + 2 = ?";
        console.log("Dilempar ke bawah");
    }catch(e){
        console.log(e)
    }
}

let generator = gen();
let question = generator.next().value;
generator.throw(new Error("Jawaban not found"));