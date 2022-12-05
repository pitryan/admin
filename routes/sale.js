const express = require('express');
const { get } = require('mongoose');
const Member = require("../models/member");
const Produk = require('../models/produk');
const Sale = require('../models/sale');
const router = express.Router();


router.post('/Sudah-Bayar', async(req, res) => {
    const konfirmasi = req.body.konfirmasi;
    const id_trx = req.body.transaksi;
    if(konfirmasi === "Terima"){
        stat_transaksi = "Sedang Dikirim";
        stat_pembayaran = "Sudah Dibayar";
    }
    else{
        stat_transaksi = "Belum Diproses";
        stat_pembayaran = "Belum Dibayar";
    }

    const query = Sale.findOne({no: id_trx});
    query.exec((error, data) => {
        query.getFilter();
        data.stat_transaksi = stat_transaksi;
        data.stat_pembayaran = stat_pembayaran;
        data.save();
    });
        
    res.redirect('/Sudah-Bayar');
});

router.post('/Siap-Dikirim', async(req, res) => {
    const id_trx = req.body.transaksi;
    const query = Sale.findOne({no: id_trx});
    query.exec((error, data) => {
        query.getFilter();
        data.stat_transaksi ="Sudah Dikirim";
        data.stat_pembayaran = "Sudah Dibayar";
        data.save();
    });
    //console.log(id_trx);
    res.redirect('/Siap-Dikirim');
});

router.post('/Kode-Pembayaran-Retail', async(req, res) => {
    const id_trx = req.body.transaksi;
    const kode = req.body.tagihan;
    
    Sale.updateOne({no: id_trx}, {$set: {
        kode: kode, 
        retail: "no"
    }}, (err, res) => {
        if(err) throw err;
        //console.log("1 document updated");
    });

    res.redirect('/Kode-Pembayaran-Retail');
});

module.exports = router;