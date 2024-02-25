import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Barangs from "./barangModel.js";

const {DataTypes} = Sequelize;

const Details = db.define('details',{
    id_detail:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    id_penjualan:{
        type:DataTypes.INTEGER,
        allowNull:true
    },
    id_barang:{
        type:DataTypes.INTEGER
    },
    nama_barang:{
        type: DataTypes.STRING
    },
    jumlah_produk:{
        type:DataTypes.INTEGER
    },
    subtotal:{
        type:DataTypes.DECIMAL
    }
},{
    freezeTableName:true
});

Details.belongsTo(Barangs,{foreignKey:"id_barang"});

export default Details;