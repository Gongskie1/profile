import model  from "../../../models/user.cjs";
import connection from "../../mysql/connection.js";
import { DataTypes } from "sequelize";


const User = model(connection,DataTypes);


export default {
    create: async (req,res) => {
        try {
            const {username,password} = req.body;
            const findUser = await User.findOne({where:{ username:username, password:password}})
            if(!findUser){
                console.log(`user is not found`);
                return res.status(400).json({ message: `User not found` });
            }
            return res.send(req.user);
        } catch (error) {
            console.error('Error creating user:', error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    },
    getting: async (req,res)=> {
        const user = req.user;
        res.json("lezgow")
    }
}