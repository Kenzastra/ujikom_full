import Details from "../models/detailModel.js";
import Penjualan from "../models/penjualanModel.js";
import Keranjang from "../models/keranjangModel.js";
import Barangs from "../models/barangModel.js";

export const getKeranjang = async(req,res) => {
    const keranjang = await Keranjang.findAll({
    });
    res.json(keranjang);
}

export const getKeranjangById = async(req,res) => {
    const keranjang = await Keranjang.findOne({
        where:{
            id_transaksi: req.params.id_transaksi
        }
    });
    if(!keranjang) return res.status(404).json({msg:"Data Tidak Ditemukan!"})
    res.json(keranjang);
}

export const createKeranjang = async(req,res) => {
    
    const {id_barang,jumlah_produk,total} = req.body;
    const barang = await Barangs.findOne({
        where:{
            id_barang: req.body.id_barang
        }
    });
    if(!barang) return res.status(404).json({msg:"Barang Tidak Ada"});
    try {
        await Keranjang.create({
            id_barang: id_barang,
            nama_barang: barang.nama_barang,
            jumlah_produk: jumlah_produk,
            harga_barang: barang.harga_barang,
            subtotal: jumlah_produk * barang.harga_barang
        });
        res.status(200).json({msg:"Berhasil Menambahkan Ke Keranjang"})
    } catch (error) {
        console.log(error)
    }
}

export const updateQty = async(req,res) => {
    const jumlah_produk = req.body.jumlah_produk
    
    const keranjang = await Keranjang.findOne({
        where:{
            id_transaksi:req.params.id_transaksi
        }
    });
    if(!keranjang) return res.status(404).json({msg:'Data Tidak Ditemukan!'})
    const subtotal = jumlah_produk * keranjang.harga_barang
    try {
        await Keranjang.update({
            jumlah_produk: jumlah_produk,
            subtotal: subtotal
        },{
            where:{
                id_transaksi:req.params.id_transaksi
            }
        });
        res.status(201).json({msg:"Berhasil Diubah"})
    } catch (error) {
        console.log(error);
    }
}

export const deleteKeranjang = async(req,res) => {
    const keranjang = await Keranjang.findOne({
        where:{
            id_transaksi : req.params.id_transaksi
        }
    })
    if(!keranjang) return res.status(404).json({msg:"Data Tidak Ada!"})

    try {
        await Keranjang.destroy({
            where:{
                id_transaksi: req.params.id_transaksi
            }
        })
        res.status(200).json({msg:"Item Berhasil Dihapus"})
    } catch (error) {
        console.log(error);
    }
}

export const Checkout = async(req,res) => {
    const penjualan = await Penjualan.create();

    const id_penjualan = penjualan.id_penjualan;

    let dataKeranjang = await Keranjang.findAll();
    
    try{
        for (let index = 0; index < dataKeranjang.length; index++) {
            const keranjang = dataKeranjang[index];
            await Details.create({
                id_penjualan:id_penjualan,
                id_barang: keranjang.id_barang,
                nama_barang: keranjang.nama_barang,
                harga_barang: keranjang.harga_barang,
                jumlah_produk: keranjang.jumlah_produk,
                subtotal: keranjang.subtotal
            });

            const barang = await Barangs.findOne({
                where:{
                    id_barang:keranjang.id_barang
                }
            })

            await Barangs.update({
                stok_barang: barang.stok_barang - keranjang.jumlah_produk
            },{
                where:{
                    id_barang: keranjang.id_barang
                }
            })

        }
        
        const total_harga = dataKeranjang.reduce((acc, item) => acc + item.subtotal,0)

        await Penjualan.update({
            total_harga: total_harga
        },{
            where:{id_penjualan:id_penjualan}
        });

        await Keranjang.truncate()
        res.status(200).json({msg:"Transaksi Berhasil"})
    }
    catch(error){
        console.log(error)
    }
    
    
}