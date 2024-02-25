import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Details from "./detailModel.js";

const {DataTypes} = Sequelize;

const Penjualan = db.define('penjualan',{
    id_penjualan:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    tanggal_penjualan:{
        type:DataTypes.DATE,
        defaultValue:DataTypes.NOW,
    },
    total_harga:{
        type:DataTypes.DECIMAL,
        allowNull:true
    }
},{
    freezeTableName:true
});

Details.belongsTo(Penjualan,{foreignKey:"id_penjualan"})

export default Penjualan;