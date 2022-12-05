const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose')
const app = express();
const flash = require("connect-flash");
const passport = require('passport');
const port = process.env.PORT || 8000;
const database = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/AsdarrID';

// set the view engine to ejs
app.set('view engine', 'ejs'); // Model - View - Controller


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// static files
app.use(express.static('public'));
//connect flash
app.use(flash());

// Session Setup
app.use(
    session({
        // It holds the secret key for session
        secret: "some_secret_key",

        // Forces the session to be saved
        // back to the session store
        resave: true,

        // Forces a session that is "uninitialized"
        // to be saved to the store
        saveUninitialized: false,
        cookie: {

            // Session expires after 1 day of inactivity.
            expires: 86400000
        }
    })
);

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect((database), (err,res) => {
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
const sale = require('./routes/sale');

app.use('/', index);
app.use('/auth', auth);
app.use('/sale', sale);

//port 
app.listen(port, ()=> {
    console.log(`Server sudah berjalan di port ${port}`);
})