import express from 'express';
import { getPenjualan } from "../controllers/penjualanController.js";
import { verifyUser } from "../middleware/authUser.js";

const route = express.Router();

route.get("/penjualan",verifyUser, getPenjualan);

export default route;