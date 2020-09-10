require('./models/connect');

const express = require('express');
const session = require('express-session');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');

var app = express();

const bukuController = require('./controllers/bukuController');
const loginController = require('./controllers/loginController');
const adminController = require('./controllers/adminController'); 
const userController = require('./controllers/userController');   

var app = express();
app.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: true}));
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs());
app.set('view engine', 'hbs');

app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});

app.use('/buku', bukuController);
app.use('/login', loginController);
app.use('/admin', adminController);
app.use('/user', userController);