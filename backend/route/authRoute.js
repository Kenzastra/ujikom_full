import express from "express";
import {login,logout,me} from "../controllers/authController.js"

export const route = express.Router();

route.get("/me",me);
route.post("/login",login);
route.delete("/logout",logout);

export default route;