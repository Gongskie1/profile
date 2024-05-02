import dotenv from 'dotenv';
dotenv.config();
import { Sequelize } from "sequelize";

 const sequelize = new Sequelize(
    {
        
        dialect:"mysql",
        host:"localhost",
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB

    }
)   

export default sequelize;