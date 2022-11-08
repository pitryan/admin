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

router.get('/Pesanan/Belum-Bayar', (req, res) => {
    res.render('pages/html/Pesanan/Belum-Bayar')
});

router.get('/Pesanan/Kode-Pembayaran-Retail', (req, res) => {
    res.render('pages/html/Pesanan/Kode-Pembayaran-Retail')
});

router.get('/Pesanan/Selesai', (req, res) => {
    res.render('pages/html/Pesanan/Selesai')
});

router.get('/Pesanan/Semua-pesanan', (req, res) => {
    res.render('pages/html/Pesanan/Semua-pesanan')
});

router.get('/Pesanan/Siap-Dikirim', (req, res) => {
    res.render('pages/html/Pesanan/Siap-Dikirim')
});

router.get('/Pesanan/Sudah-Bayar', (req, res) => {
    res.render('pages/html/Pesanan/Sudah-Bayar')
});

router.get('/views/pages', (req, res) => {
    res.render('pages/index')
});

module.exports = router;