// Depedencies
import express from "express";
import cors from "cors";
import db from "./config/database.js";
import fileUpload from "express-fileupload";
import dotenv from "dotenv";
import session from "express-session";
import sequelizeStore from "connect-session-sequelize";
dotenv.config();

// Models
import Users from "./models/userModel.js";
import Barangs from "./models/barangModel.js";
import Details from "./models/detailModel.js";
import Penjualan from "./models/penjualanModel.js";
import Keranjang from "./models/keranjangModel.js";

// Routes
import transaksiRoute from "./route/transaksiRoute.js";
import barangRoute from "./route/barangRoute.js";
import userRoute from "./route/userRoute.js";
import authRoute from "./route/authRoute.js";

const app = express();

const sessionStore = sequelizeStore(session.Store)
const store = new sessionStore({
    db:db
}); 

// db.sync({alter:true});
try {
    await db.authenticate();
    console.log("Database Connected")
} catch (error) {
    console.error(error);
}

app.use(session({
    secret: process.env.SESS_SECRET,
    resave:false,
    saveUninitialized:true,
    store: store,
    cookie: {
        secure: 'auto'
    }
}
))

// store.sync();

app.use(cors(
    {credentials: true,
    origin: 'http://localhost:3000'}
));
app.use(express.json());
app.use(fileUpload());
app.use(
    transaksiRoute,
    barangRoute,
    userRoute,
    authRoute);

app.listen(process.env.APP_PORT, () => console.log("Server up and running..."));