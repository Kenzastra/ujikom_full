import express from "express";
import {
    getBarang,
    addBarang,
    updateBarang,
    deleteBarang,
    getBarangById
} from "../controllers/barangController.js";

const route = express.Router();

route.get("/barang",getBarang);
route.get("/barang/:id_barang",getBarangById);
route.post("/barang",addBarang);
route.patch("/barang/:id_barang",updateBarang);
route.delete("/barang/:id_barang",deleteBarang);

export default route;