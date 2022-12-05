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

router.get('/Semua-pesanan', (req, res) => {
    const query2 = Sale.find({});
        query2.exec((error, data) => {
        query2.getFilter();
        res.render('pages/Semua-pesanan', {
            ListOrder: data
        });
    });
});

router.get('/Belum-Bayar', (req, res) => {
    const query2 = Sale.find({stat_pembayaran: "Belum Dibayar"});
        query2.exec((error, data) => {
        query2.getFilter();
        res.render('pages/Belum-Bayar', {
            BelumBayar: data
        });
    });
});

router.get('/Sudah-Bayar', (req, res) => {
    const query2 = Sale.find({stat_pembayaran: "Sedang di Verifikasi"});
        query2.exec((error, data) => {
        query2.getFilter();
        res.render('pages/Sudah-Bayar', {
            SudahBayar: data
        });
    });
});

router.get('/Siap-Dikirim', (req, res) => {
    const query2 = Sale.find({stat_transaksi: "Sedang Dikirim"});
        query2.exec((error, data) => {
        query2.getFilter();
        res.render('pages/Siap-Dikirim', {
            SiapDikirim: data
        });
    });
});

router.get('/Selesai', (req, res) => {
    const query2 = Sale.find({stat_transaksi: "Sudah Dikirim"});
        query2.exec((error, data) => {
        query2.getFilter();
        res.render('pages/Selesai', {
            Selesai: data
        });
    });
});

router.get('/Kode-Pembayaran-Retail', (req, res) => {
    const query2 = Sale.find({retail: "yes"});
        query2.exec((error, data) => {
        query2.getFilter();
        res.render('pages/Kode-Pembayaran-Retail', {
            retail: data
        });
    });
});

router.get('/views/pages', (req, res) => {
    res.render('pages/index')
});

module.exports = router;