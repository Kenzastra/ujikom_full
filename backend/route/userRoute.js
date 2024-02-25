import express from "express";
import {
    getUser,
    addUser,
    updateUser,
    deleteUser,
    getUserById
} from "../controllers/userController.js";
import { verifyUser , adminOnly} from "../middleware/authUser.js";

const route = express.Router()

route.get("/user",getUser);
route.get("/user/:id_user",verifyUser,adminOnly,getUserById)
route.post("/user",verifyUser,adminOnly,addUser);
route.patch("/user/:id_user", verifyUser,adminOnly,updateUser);
route.delete("/user/:id_user",verifyUser,adminOnly,deleteUser);

export default route;