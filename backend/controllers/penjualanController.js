import { Op } from "sequelize";
import Barangs from "../models/barangModel.js";
import Penjualan from "../models/penjualanModel.js";

export const createPenjualan = async(req,res) => {
    try {
        const penjualan = await Penjualan.create();
        res.status(201).json(penjualan)
    } catch (error) {
        console.log(error);
    }
}

export const updatePenjualan = async(req,res) => {
    const {total_harga} = req.body;
    try {
        await Penjualan.create({
            total_harga:total_harga
        });
        res.status(201).json({msg:"Transaksi Berhasil"})
    } catch (error) {
        console.log(error)
    }
}