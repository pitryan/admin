const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const session = require('express-session');

const router = express.Router();

router.get('/', async (req, res) => {
    res.render('pages/index')
});

module.exports = router;
