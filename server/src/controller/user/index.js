import {request,response} from "express"
import model  from "../../../models/user.cjs";
import connection from "../../mysql/connection.js";
import { DataTypes } from "sequelize";


const User = model(connection,DataTypes);


export default {
    create: async (req,res) => {
        const {username,password} = req.body;
        const findUser = await User.findOne({where:{ username:username, password,password}})
        if(!findUser){
            console.log(`user is not found`);
            res.status(400).send(`user is not found ${"gongskie"}`)
        }
        res.send(req.user);
    },
    getting: async (req,res)=> {

        req.send(req.user)
    }
}