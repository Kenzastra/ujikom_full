import express from "express";
import {
    Checkout, createKeranjang, deleteKeranjang, getKeranjang, getKeranjangById, updateQty
} from "../controllers/transaksiController.js";
import { getDetail } from "../controllers/detailController.js";
import { verifyUser } from "../middleware/authUser.js";

const route = express.Router();

route.get('/detail',verifyUser, getDetail);
route.get('/keranjang',verifyUser,getKeranjang);
route.get('/keranjang/:id_transaksi',verifyUser,getKeranjangById);
route.post('/keranjang',verifyUser,createKeranjang);
route.post('/checkout',verifyUser,Checkout);
route.patch('/keranjang/:id_transaksi', verifyUser,updateQty);
route.delete('/keranjang/:id_transaksi', verifyUser,deleteKeranjang);


export default route;