const express = require('express');
const router = express.Router();

router.get('/', async(req, res) => {

    // check user session
    // root     
    if (!req.session.user) {
        res.redirect('/auth/login');
    } else {
        res.render('pages/index');
    }

});

module.exports = router;