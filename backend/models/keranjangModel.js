import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Barangs from "./barangModel.js";

const {DataTypes} = Sequelize;

const Keranjang = db.define('keranjang',{
    id_transaksi :{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    id_barang : {
        type: DataTypes.INTEGER,
    },
    nama_barang : {
        type: DataTypes.STRING
    },
    harga_barang:{
        type:DataTypes.INTEGER
    },
    jumlah_produk: {
        type: DataTypes.INTEGER
    },
    subtotal:{
        type: DataTypes.DECIMAL
    }
},{
    freezeTableName: true
})

export default Keranjang;