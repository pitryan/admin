const { request, response } = require('express');
const express = require('express');
const user = require('../models/member');
const price = require('../models/produk');
const Sale = require('../models/sale');
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

router.get('/Pesanan/Semua-pesanan', (req, res) => {
    const query2 = Sale.find({});
        query2.exec((error, data) => {
        query2.getFilter();
        res.render('pages/html/Pesanan/Semua-pesanan', {
            ListOrder: data
        });
    });
});

router.get('/Pesanan/Belum-Bayar', (req, res) => {
    const query2 = Sale.find({stat_pembayaran: "Belum Dibayar"});
        query2.exec((error, data) => {
        query2.getFilter();
        res.render('pages/html/Pesanan/Belum-Bayar', {
            BelumBayar: data
        });
    });
});

router.get('/Pesanan/Sudah-Bayar', (req, res) => {
    const query2 = Sale.find({stat_pembayaran: "Sedang di Verifikasi"});
        query2.exec((error, data) => {
        query2.getFilter();
        res.render('pages/html/Pesanan/Sudah-Bayar', {
            SudahBayar: data
        });
    });
});

router.get('/Pesanan/Siap-Dikirim', (req, res) => {
    const query2 = Sale.find({stat_transaksi: "Sedang Dikirim"});
        query2.exec((error, data) => {
        query2.getFilter();
        res.render('pages/html/Pesanan/Siap-Dikirim', {
            SiapDikirim: data
        });
    });
});

router.get('/Pesanan/Selesai', (req, res) => {
    const query2 = Sale.find({stat_transaksi: "Sudah Dikirim"});
        query2.exec((error, data) => {
        query2.getFilter();
        res.render('pages/html/Pesanan/Selesai', {
            Selesai: data
        });
    });
});

router.get('/Pesanan/Kode-Pembayaran-Retail', (req, res) => {
    const query2 = Sale.find({payment: "alfamart" || "indomaret" || "alfamidi"});
        query2.exec((error, data) => {
        query2.getFilter();
        res.render('pages/html/Pesanan/Kode-Pembayaran-Retail', {
            retail: data
        });
    });
});

router.get('/views/pages', (req, res) => {
    res.render('pages/index')
});

module.exports = router;