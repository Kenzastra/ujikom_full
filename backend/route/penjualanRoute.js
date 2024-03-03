import express from 'express';
import { getPenjualan, getPenjualanById } from "../controllers/penjualanController.js";
import { verifyUser } from "../middleware/authUser.js";

const route = express.Router();

route.get("/penjualan",verifyUser, getPenjualan);
route.get("/penjualan/:id_penjualan", verifyUser, getPenjualanById);

export default route;