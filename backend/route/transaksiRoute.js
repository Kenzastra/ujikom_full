import express from "express";
import {
    Checkout, createKeranjang, deleteKeranjang, getKeranjang, getKeranjangById, updateQty
} from "../controllers/transaksiController.js";
import { getDetail } from "../controllers/detailController.js";

const route = express.Router();

route.get('/detail', getDetail);
route.get('/keranjang',getKeranjang);
route.get('/keranjang/:id_transaksi',getKeranjangById);
route.post('/keranjang',createKeranjang);
route.post('/checkout',Checkout);
route.patch('/keranjang/:id_transaksi', updateQty);
route.delete('/keranjang/:id_transaksi', deleteKeranjang);


export default route;