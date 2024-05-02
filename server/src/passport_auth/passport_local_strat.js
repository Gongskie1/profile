import passport from "passport";
import {Strategy} from 'passport-local';
import model from "../../models/user.cjs";
import { DataTypes } from "sequelize";
import connection from "../mysql/connection.js"

const User = model(connection,DataTypes);

passport.serializeUser((user,done)=>{
    console.log("This is sereialize")
    console.log(user.id)
    done(null,user.id);
});

passport.deserializeUser(async (id,done)=>{
    try {
        console.log("This is the deserialize");
        console.log(id)
        const findUser = await User.findOne({where:{id:id}});

        if(!findUser){
            throw new Error("User not found");
        }
        done(null,findUser);
    } catch (error) {
        done(error,null);
    }
});

export default passport.use(
    new Strategy(async(username,password,done)=>{
        try {
            const findUser = await User.findOne({where: {username:username}});        
            if(!findUser){
                throw new Error("wrong credentials");
            }
            // console.log(findUser);
            done(null,findUser)
        } catch (error) {
            console.log(`Error: ${error}`)
            done(error,null)
        }

    })
)