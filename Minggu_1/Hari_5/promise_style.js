doSomething()
.then(function(result){
    return doSomethingThingElse(result);
})
.then(function(newResult){
    return doThirdThing(newResult);
})
.then(function(finalResult){
    console.log("Got the final result: "
+ finalResult);
})
.catch(failureCallback);