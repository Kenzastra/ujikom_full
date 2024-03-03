import { Op } from "sequelize";
import Barangs from "../models/barangModel.js";
import Penjualan from "../models/penjualanModel.js";
import Details from "../models/detailModel.js";

export const getPenjualan = async(req,res) => {
    try {
        const response = await Penjualan.findAll({
            include:{
                model: Details,
                attributes:['id_barang', 'nama_barang', 'jumlah_produk', 'subtotal']
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error);
    }
}

export const getPenjualanById = async(req,res) => {
    try {
        const response = await Penjualan.findOne({
            include:{
                model: Details,
                attributes:['id_barang', 'nama_barang', 'harga_barang','jumlah_produk', 'subtotal']
            },
            where:{
                id_penjualan:req.params.id_penjualan
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error);
    }
}

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