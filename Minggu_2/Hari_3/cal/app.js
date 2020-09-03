// Express.js calculator app //

// bring in the express module
var express = require("express");

// call the express function, return an object
var app = express();

// tell the app to use EJS as our view engine
app.set("view engine", "ejs");

app.get("/", function(request, response){
   // response.send("My Calculator App");
   response.render("index");
});


// add numbers
app.get("/tambah/:num1/:num2", function(request, response){
	var n1 = parseFloat(request.params.num1); // parseFloat can parse a string with a decimal into a number
	var n2 = parseFloat(request.params.num2); // using here instead of parseInt which is only for whole numbers
	var sum = n1 + n2;
	response.render("add", {ang1:n1,ang2:n2,number:sum});
});

// subtract numbers
app.get("/kurang/:num1/:num2", function(request, response){
	var n1 = parseFloat(request.params.num1); // parseFloat can parse a string with a decimal into a number
	var n2 = parseFloat(request.params.num2); // using here instead of parseInt which is only for whole numbers
	var sum = n1 - n2;
	response.render("sub", {ang1:n1,ang2:n2,number:sum});
});

// multiply numbers
app.get("/kali/:num1/:num2", function(request, response){
	var n1 = parseFloat(request.params.num1);
	var n2 = parseFloat(request.params.num2); 
	var sum = n1 * n2;
	response.render("mult", {ang1:n1,ang2:n2,number:sum});
});

// divide numbers
app.get("/bagi/:num1/:num2", function(request, response){
	var n1 = parseFloat(request.params.num1); 
	var n2 = parseFloat(request.params.num2);
	if(n2==0){
		var sum = 0;
		response.render("err");
	}else{
		sum = (n1 / n2);
		response.render("div", {ang1:n1,ang2:n2,number:sum});
	}
});


// localhost:3000/
app.listen(3000, function(){
    console.log("server starting on port 3000");
});

