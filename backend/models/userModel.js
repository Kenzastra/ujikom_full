import db from "../config/database.js";
import { Sequelize } from "sequelize";

const {DataTypes} = Sequelize;

const Users = db.define('users',{
    id_user:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nama:{
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:true,
            len:[3,100]
        }
    },
    username:{
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:true,
            len:[3,100]
        }
    },
    password:{
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:true,
        }
    },
    role:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:true,
        }
    }
},{
    freezeTableName:true
});

// (async()=>{
//     await db.sync();
// }) ();

export default Users;