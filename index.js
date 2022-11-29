const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose')
const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs'); // Model - View - Controller

// body-parser to parse request body
app.use(bodyParser.urlencoded()); // req res : request response

// static files
app.use(express.static('public'));

// enabling session
app.use(session({
    secret: 'some_secret_key',
    cookie: {}
}));

mongoose.connect(('mongodb://127.0.0.1:27017/AsdarrID'), (err,res) => {
    if(err){
        console.error(err);
    }
    else{
        console.log('Database Sudah terhubung')
    }
})

// routes
const index = require('./routes/index');
const auth = require('./routes/auth');

app.use('/', index);
app.use('/auth', auth);

app.listen(8000);
console.log('Server runs at port 8000...');