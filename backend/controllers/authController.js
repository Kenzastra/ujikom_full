import Users from "../models/userModel.js";
import argon2 from "argon2";

export const login = async(req,res) => {
    const user = await Users.findOne({
        where:{
            username: req.body.username
        }
    });
    if(!user) return res.status(404).json({msg:"Data Tidak Ditemukan"});
    const match = await argon2.verify(user.password, req.body.password);
    if(!match) return res.status(400).json({msg:"Password Salah"});
    req.session.userId = user.id_user;
    const id_user = user.id_user;
    const nama = user.nama;
    const username = user.username;
    const role = user.role;
    res.status(200).json({id_user,nama,username,role});
}

export const me = async (req,res) => {
    if(!req.session.userId){
        return res.status(401).json({msg:"Mohon login dengan akun anda!"});
    }
    const user = await Users.findOne({
        attributes:['id_user','nama','username','role'],
        where:{
            id_user: req.session.userId
        }
    });
    if(!user) return res.status(404).json({msg:"Data Tidak Ditemukan"})
    res.status(200).json(user);
}

export const logout = async (req,res) => {
    req.session.destroy((err) => {
        if(err) return res.status(400).json({msg:"Tidak Bisa Logout"});
        res.status(200).json({msg:"Berhasil Logout"});
    })
}