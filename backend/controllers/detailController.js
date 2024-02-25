import Details from "../models/detailModel.js";
import Penjualan from "../models/penjualanModel.js";
import Barangs from "../models/barangModel.js";
import { Sequelize } from "sequelize";

export const getDetail = async(req,res) => {
    try {
        const response = await Details.findAll();
        res.json(response);
    } catch (error) {
        console.log(error);
    }
}

export const addDetail = async(req,res) => {
    const {id_barang, jumlah_produk} = req.body;

    const penjualan = await Penjualan.create({
    });

    const id_penjualan = penjualan.id_penjualan;

}

// export const addDetail = async(req,res) => {

//     const {id_barang, jumlah_produk} = req.body;
//     if(id_barang == "" || id_barang == null,jumlah_produk == "" || jumlah_produk == null) return res.status(400).json({msg:"Kolom Masih Kosong"});

//     const barang = await Barangs.findOne({
//         where:{
//             id_barang : req.body.id_barang
//         }
//     });

//     try {
//         const penjualan = await Penjualan.create({});
//         let id_penjualan = penjualan.id_penjualan;
//         const detail = await Details.create({
//             id_penjualan : id_penjualan,
//             id_barang : id_barang,
//             jumlah_produk : jumlah_produk,
//             subtotal : barang.harga_barang * jumlah_produk
//         });

//         await Barangs.update({
//             stok_barang: barang.stok_barang - jumlah_produk
//         },{
//             where:{
//                 id_barang:req.body.id_barang
//             }
//         });

//         const total_harga = await Details.findOne({
//             attributes:[Sequelize.fn('SUM',Sequelize.col('subtotal'))],
//             group: ['subtotal'],
//             raw:true,
//             where:{
//                 id_penjualan: id_penjualan
//             }
//         });

//         await Penjualan.update({
//             total_harga: total_harga
//         },{
//             where:{
//                 id_penjualan:id_penjualan
//             }
//         })
//         res.status(201).json({msg:"Transaksi Berhasil"});
//     } catch (error) {
//         console.log(error);
//     }

// }