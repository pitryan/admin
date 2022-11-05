const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

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

// routes
const index = require('./router/index');
const auth = require('./router/auth');
const todo = require('./router/todo');

app.use('/', index);
app.use('/auth', auth);
app.use('/todo', todo);

app.listen(process.env.PORT || 4000, () => { 
    console.log('Server is running...'); 
});
