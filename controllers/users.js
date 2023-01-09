import { authCheck } from "../middlewares/auth.js";
import { Users } from "../models/users.js"

export const getAll = async (_req, res) => {
    try {
        const listUsers = await Users.find()
        res.status(200).json(listUsers)
        
    } catch (err) {
        res.status(500).json({
            err: err.message,
            code: err.code,
        });
    }
}

export const create = async (req, res) => {
    try {
        const currentUser = await authCheck(req)
        const {name, displayName,phone,photoUrl,role} = req.body;
        const {email} = currentUser;
        console.log(currentUser);
        console.log(email);

        const createUser = await Users({phone,name, displayName, photoUrl,email,role:'BASIC'}).save()
        console.log(createUser);
        res.status(201).json(createUser)
    } catch (err) {
        res.status(400).json({
            err: err.message,
            code: err.code,
        });
    }
}

export const auth = async(req,res) => {
    try {
        const currentUser = await authCheck(req)
        const token = req.headers
        console.log(token)
        console.log(req)
        res.status(200).json(currentUser)
        
    } catch (err) {
        res.status(400).json({
            err: err.message,
            code: err.code,
        });
    }
}


export const userExist = async(req, res) => {
    console.log('ESTE ES HEADER',req.headers);
    try {

        const recibeToken = req.headers
        const currentUser = await authCheck(req)
        res.status(200).json({currentUser})
        
    } catch (error) {
        res.status(400).json({
            err: err.message,
            code: err.code,
        });
    }
}


export async function displayNameExist(req, res){
    try {
        const exist = await Users.findOne({displayName: req.params.displayName})
        

        if(exist){
            res.status(200).json(true)
        }else{

            res.status(200).json(false)
        }
        
    } catch (error) {
        return res.status(500).json({
            error: 'Error en el servidor'
        })
    }
}