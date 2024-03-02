import express from "express";
import {
    getBarang,
    addBarang,
    updateBarang,
    deleteBarang,
    getBarangById
} from "../controllers/barangController.js";
import { verifyUser } from "../middleware/authUser.js";

const route = express.Router();

route.get("/barang",verifyUser,getBarang);
route.get("/barang/:id_barang",verifyUser,getBarangById);
route.post("/barang",verifyUser,addBarang);
route.patch("/barang/:id_barang",verifyUser,updateBarang);
route.delete("/barang/:id_barang",verifyUser,deleteBarang);

export default route;