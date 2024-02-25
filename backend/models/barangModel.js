import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Barangs = db.define('barangs',{
    id_barang:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nama_barang:{
        type:DataTypes.STRING
    },
    satuan_barang:{
        type:DataTypes.STRING
    },
    stok_barang:{
        type:DataTypes.INTEGER
    },
    harga_barang:{
        type:DataTypes.DECIMAL
    }
},{
    freezeTableName:true
});

export default Barangs;

// (async()=>{
//     await db.sync();
// }) ();