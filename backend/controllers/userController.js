import Users from "../models/userModel.js";
import argon2 from "argon2";

export const getUser = async (req, res) => {
    try {
        const response = await Users.findAll({
            attributes:['id_user','nama','username','role']
        });
        res.json(response);
    } catch (error) {
        console.log(error);
    }
}

export const getUserById = async (req, res) => {
    try {
        const response = await Users.findOne({
            where:{
                id_user:req.params.id_user
            },
            attributes:['id_user','nama','username','role']
        });
        res.json(response);
    } catch (error) {
        console.log(error);
    }
}

export const addUser = async (req, res) => {
    const {nama, username, password, confPassword, role} = req.body;
    if(password !== confPassword) return res.status(400).json({msg:"Password Dan Confirm Password Tidak Cocok"})
    const hashPassword = await argon2.hash(password);
    try {
        await Users.create({
            nama:nama,
            username:username,
            password:hashPassword,
            role:role
        });
        res.status(201).json({msg:"User Berhasil Dibuat"})
    } catch (error) {
        console.log(error)
    }
}

export const updateUser = async (req,res) => {
    const user = await Users.findOne({
        where:{
            id_user: req.params.id_user
        }
    })
    if(!user) return res.status(404).json({msg:"Data Tidak Ditemukan"});
    const {nama, username, password, confPassword, role} = req.body;
    let hashPassword;
    if( password == "" || password == null) {
        hashPassword = user.password
    } else {
        hashPassword = await argon2.hash(password)
    }
    if(password !== confPassword) return res.status(400).json({msg:"Password Dan Confirm Password Tidak Cocok"})
    try {
        await Users.update({
            nama:nama,
            username:username,
            password:hashPassword,
            role:role
        }, {
            where:{
                id_user:user.id_user
            }
        });
        res.status(200).json({msg:"User Berhasil Di Update"})
    } catch (error) {
        console.log(error)
    }
}

export const deleteUser = async (req,res) => {
    const user = await Users.findOne({
        where:{
            id_user: req.params.id_user
        }
    })
    if(!user) return res.status(404).json({msg:"Data Tidak Ditemukan"});
    try {
        await Users.destroy({
            where:{
                id_user:req.params.id_user
            }
        });
        res.status(200).json({msg:"User Berhasil Dihapus"})
    } catch (error) {
        console.log(error)
    }
}