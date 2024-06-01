import model  from "../../../models/user.cjs";
import connection from "../../mysql/connection.js";
import { DataTypes } from "sequelize";


const User = model(connection,DataTypes);


export default {
    login: async (req,res,err) => {
        try {
            if (!err) {
                return res.status(401).json({ status: false, message: err });
            }
            
            return res.status(200).json({
                status: true,
                message: 'Login successful'
            });
        } catch (error) {
            console.error('Error during login process:', error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    },
    register:async (req,res) =>{
        try {
            const  {email,username,password,displayName} = req.body;
            
            const createUser = {
                email:email,
                username:username,
                password:password,
                display_name:displayName
            } 

            const findUserByEmail = await User.findOne({ where: { email: email } });
            if (findUserByEmail) {
                return res.status(400).json({ message: "Email already exists." });
            }

            const findUserByUsername = await User.findOne({ where: { username: username } });
            if (findUserByUsername) {
                return res.status(400).json({ message: "Username already exists." });
            }

            const create = await User.create(createUser)

            return res.status(201).json({ message: "User created successfully.",user_created:create});

            

        } catch (error) {
            return res.status(500).json({message : "Internal server error"})
        }
    },
    getting: async (req,res)=> {
        const user = req.user;
        res.json(user)
    }
}